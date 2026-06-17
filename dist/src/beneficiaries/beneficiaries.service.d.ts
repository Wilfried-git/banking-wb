import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { PrismaService } from "../prisma/prisma/prisma.service";
export declare class BeneficiariesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
    findAll(userId: string): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }[]>;
    findOne(userId: string, beneficiaryId: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
    remove(userId: string, beneficiaryId: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
}
