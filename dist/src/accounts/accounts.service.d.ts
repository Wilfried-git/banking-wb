import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class AccountsService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateAccountNumber;
    create(userId: string, dto: CreateAccountDto): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
    findAll(userId: string): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }[]>;
    findOne(userId: string, accountId: string): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
    remove(userId: string, accountId: string): Promise<{
        type: string;
        id: string;
        status: string;
        currency: string;
        accountNumber: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        customerId: string;
    }>;
}
