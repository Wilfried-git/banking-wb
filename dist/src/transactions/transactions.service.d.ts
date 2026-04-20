import { Prisma } from "@prisma/client";
import { PrismaService } from "../prisma/prisma/prisma.service";
import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";
export declare class TransactionsService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateRef;
    deposit(dto: DepositDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: Prisma.Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
    withdraw(userId: string, dto: WithdrawalDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: Prisma.Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
    transfer(userId: string, dto: TransferDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: Prisma.Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
}
