import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsOptional } from 'class-validator';

export class CreateBeneficiaryDto {
    // On le laisse optionnel car le Service va utiliser l'ID du Token JWT
    @ApiProperty({ example: 'uuid-du-customer', required: false })
    @IsUUID()
    @IsOptional()
    customerId?: string;

    @ApiProperty({ example: 'Jean Dupont', required: false })
    @IsString()
    @IsOptional()
    name?: string;

    @ApiProperty({ example: 'IBANK' })
    @IsString()
    @IsOptional()
    bankName?: string;

    @ApiProperty({ example: 'FR761234567890...' })
    @IsString()
    accountNumber!: string;
}