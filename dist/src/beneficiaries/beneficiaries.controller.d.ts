import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
export declare class BeneficiariesController {
    private readonly beneficiariesService;
    constructor(beneficiariesService: BeneficiariesService);
    create(createBeneficiaryDto: CreateBeneficiaryDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateBeneficiaryDto: UpdateBeneficiaryDto): string;
    remove(id: string): string;
}
