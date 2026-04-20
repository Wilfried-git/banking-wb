import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";
import { TransactionsService } from "./transactions.service";
export declare class TransactionsController {
    private readonly transactionsService;
    constructor(transactionsService: TransactionsService);
    deposit(dto: DepositDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
    withdraw(req: any, dto: WithdrawalDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
    transfer(req: any, dto: TransferDto): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }>;
    findAll(req: any): Promise<{
        id: string;
        sourceAccountId: string;
        destAccountId: string;
        amount: import("@prisma/client/runtime/library").Decimal;
        type: string;
        status: string;
        reference: string;
        executedAt: Date;
    }[]>;
}
