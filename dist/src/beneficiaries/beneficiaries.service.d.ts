import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { UpdateBeneficiaryDto } from './dto/update-beneficiary.dto';
export declare class BeneficiariesService {
    create(createBeneficiaryDto: CreateBeneficiaryDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateBeneficiaryDto: UpdateBeneficiaryDto): string;
    remove(id: number): string;
}
