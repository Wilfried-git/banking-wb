import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class BeneficiariesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }[]>;
    findOne(userId: string, beneficiaryId: string): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
    remove(userId: string, beneficiaryId: string): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
}
