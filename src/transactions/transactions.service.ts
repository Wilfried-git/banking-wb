import { BadRequestException, ForbiddenException, Injectable } from "@nestjs/common";
import { Prisma } from "@prisma/client";
import { PrismaService } from "src/prisma/prisma/prisma.service";
import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";

@Injectable()
export class TransactionsService {
  constructor(private prisma: PrismaService) { }

  private generateRef() { return `TX-${Date.now()}`; }

  // 1. DÉPÔT : Pas besoin de vérifier le solde, on ajoute juste l'argent
  async deposit(dto: DepositDto) {
    return this.prisma.$transaction(async (tx) => {
      const account = await tx.account.update({
        where: { id: dto.accountId },
        data: { balance: { increment: dto.amount } },
      });

      return tx.transaction.create({
        data: {
          sourceAccountId: dto.accountId, // On met le même ID car source=dest pour un dépôt cash
          destAccountId: dto.accountId,
          amount: new Prisma.Decimal(dto.amount),
          type: 'DEPOSIT',
          status: 'COMPLETED',
          reference: this.generateRef(),
        },
      });
    });
  }

  // 2. RETRAIT : Vérifier propriété + solde
  async withdraw(userId: string, dto: WithdrawalDto) {
    const account = await this.prisma.account.findFirst({
      where: { id: dto.accountId, customer: { userId } },
    });

    if (!account) throw new ForbiddenException("Ce compte ne vous appartient pas.");
    if (Number(account.balance) < dto.amount) throw new BadRequestException("Solde insuffisant.");

    return this.prisma.$transaction(async (tx) => {
      await tx.account.update({
        where: { id: dto.accountId },
        data: { balance: { decrement: dto.amount } },
      });

      return tx.transaction.create({
        data: {
          sourceAccountId: dto.accountId,
          destAccountId: dto.accountId,
          amount: new Prisma.Decimal(dto.amount),
          type: 'WITHDRAWAL',
          status: 'COMPLETED',
          reference: this.generateRef(),
        },
      });
    });
  }

  // 3. TRANSFERT : Le plus complet
  async transfer(userId: string, dto: TransferDto) {
    const source = await this.prisma.account.findFirst({
      where: { id: dto.sourceAccountId, customer: { userId } },
    });

    if (!source) throw new ForbiddenException("Compte source invalide.");
    if (Number(source.balance) < dto.amount) throw new BadRequestException("Solde insuffisant.");

    return this.prisma.$transaction(async (tx) => {
      await tx.account.update({ where: { id: dto.sourceAccountId }, data: { balance: { decrement: dto.amount } } });
      await tx.account.update({ where: { id: dto.destAccountId }, data: { balance: { increment: dto.amount } } });

      return tx.transaction.create({
        data: {
          sourceAccountId: dto.sourceAccountId,
          destAccountId: dto.destAccountId,
          amount: new Prisma.Decimal(dto.amount),
          type: 'TRANSFER',
          status: 'COMPLETED',
          reference: this.generateRef(),
        },
      });
    });
  }

  // Voir l'historique de l'utilisateur (toutes les transactions liées à ses comptes)
  async findAll(userId: string) {
    return this.prisma.transaction.findMany({
      where: {
        OR: [
          { sourceAccount: { customer: { userId } } },
          { destAccount: { customer: { userId } } },
        ],
      },
      orderBy: { executedAt: 'desc' },
    });
  }
}