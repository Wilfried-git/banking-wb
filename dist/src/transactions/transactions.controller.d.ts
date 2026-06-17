import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";
import { TransactionsService } from "./transactions.service";
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    deposit(dto: DepositDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    withdraw(req: any, dto: WithdrawalDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    transfer(req: any, dto: TransferDto): Promise<{
        type: string;
        id: string;
        status: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }>;
    findAll(req: any): Promise<{
        type: string;
        id: string;
        status: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }[]>;
    findOne(req: any, id: string): Promise<{
        type: string;
        id: string;
        status: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        sourceAccountId: string;
        destAccountId: string;
        reference: string;
        executedAt: Date;
    }[]>;
}
