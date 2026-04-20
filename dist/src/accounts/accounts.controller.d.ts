import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
export declare class AccountsController {
    private readonly accountsService;
    constructor(accountsService: AccountsService);
    create(req: any, dto: CreateAccountDto): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
    findAll(req: any): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
}
