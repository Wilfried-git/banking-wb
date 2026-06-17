import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    create(req: any, dto: CreateAccountDto): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
    findAll(req: any): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
    remove(req: any, id: string): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
}
