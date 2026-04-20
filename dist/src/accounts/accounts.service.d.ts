import { CreateAccountDto } from './dto/create-account.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class AccountsService {
    private prisma;
    constructor(prisma: PrismaService);
    private generateAccountNumber;
    create(userId: string, dto: CreateAccountDto): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }[]>;
    findOne(userId: string, accountId: string): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
    remove(userId: string, accountId: string): Promise<{
        id: string;
        accountNumber: string;
        type: string;
        balance: import("@prisma/client/runtime/library").Decimal;
        currency: string;
        status: string;
        customerId: string;
    }>;
}
