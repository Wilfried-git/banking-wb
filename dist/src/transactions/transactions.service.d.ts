import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma/prisma.service";
import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateRef;
    deposit(dto: DepositDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: Prisma.Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    withdraw(userId: string, dto: WithdrawalDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: Prisma.Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    transfer(userId: string, dto: TransferDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: Prisma.Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    findAll(userId: string): Promise<{
        type: string;
        id: string;
        status: string;
        amount: Prisma.Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }[]>;
    findAllAccount(userId: string, accountId: string): Promise<{
        type: string;
        id: string;
        status: string;
        amount: Prisma.Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }[]>;
}
