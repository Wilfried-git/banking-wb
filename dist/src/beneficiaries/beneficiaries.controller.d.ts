import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
export declare class BeneficiariesController {
    private readonly beneficiariesService;
    constructor(beneficiariesService: BeneficiariesService);
    create(req: any, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
    findAll(req: any): import(".prisma/client").Prisma.PrismaPromise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }[]>;
    findOne(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
    remove(req: any, id: string): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        customerId: string;
        bankName: string;
    }>;
}
