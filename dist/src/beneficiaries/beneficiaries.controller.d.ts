import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
export declare class BeneficiariesController {
    private readonly beneficiariesService;
    constructor(beneficiariesService: BeneficiariesService);
    create(req: any, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        name: string;
        accountNumber: string;
        bankName: string;
        createdAt: Date;
        customerId: string;
    }>;
}
