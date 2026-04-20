import { Injectable, NotFoundException, ConflictException, ForbiddenException } from '@nestjs/common';
import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class AccountsService {
  constructor(private prisma: PrismaService) { }

  // Générateur de numéro de compte simple (Format: BNK-8 chiffres-RANDOM)
  private generateAccountNumber(): string {
    const prefix = 'BNK';
    const timestamp = Date.now().toString().slice(-8);
    const random = Math.floor(10 + Math.random() * 90); // 2 chiffres aléatoires
    return `${prefix}-${timestamp}-${random}`;
  }

  async create(userId: string, dto: CreateAccountDto) {
    // 1. Trouver le Customer associé à cet User
    const customer = await this.prisma.customer.findUnique({
      where: { userId }
    });

    if (!customer) {
      throw new ForbiddenException("Vous devez d'abord créer un profil client.");
    }

    // 2. Créer le compte avec un numéro généré
    return this.prisma.account.create({
      data: {
        type: dto.type,
        currency: dto.currency || 'EUR',
        balance: 0,
        accountNumber: this.generateAccountNumber(),
        customerId: customer.id, // On lie automatiquement au bon client
      },
    });
  }

  // On ne récupère que les comptes appartenant à l'utilisateur
  async findAll(userId: string) {
    return this.prisma.account.findMany({
      where: {
        customer: { userId }
      }
    });
  }

  // Récupération sécurisée : ID du compte ET ID de l'utilisateur
  async findOne(userId: string, accountId: string) {
    const account = await this.prisma.account.findFirst({
      where: {
        id: accountId,
        customer: { userId }
      }
    });

    if (!account) {
      throw new NotFoundException("Compte introuvable ou vous n'y avez pas accès.");
    }
    return account;
  }

  async remove(userId: string, accountId: string) {
    // On vérifie d'abord l'existence et l'appartenance
    const account = await this.findOne(userId, accountId);

    // On ne permet la suppression que si le solde est à zéro (règle bancaire)
    if (Number(account.balance) !== 0) {
      throw new ConflictException("Impossible de supprimer un compte avec un solde positif.");
    }

    return this.prisma.account.delete({
      where: { id: accountId }
    });
  }
}