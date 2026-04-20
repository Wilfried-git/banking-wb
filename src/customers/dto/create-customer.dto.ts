// create-customer.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCustomerDto {
    @ApiProperty({ example: 'e34b-4321-...', description: "L'ID de l'utilisateur (User) rattaché" })
    @IsUUID()
    userId!: string;

    @ApiProperty({ example: 'Jean' })
    @IsString()
    firstName!: string;

    @ApiProperty({ example: 'Dupont' })
    @IsString()
    lastName!: string;

    @ApiProperty({ example: '1990-05-15T00:00:00Z', description: 'Date de naissance au format ISO' })
    @Type(() => Date)
    @IsDate()
    dateOfBirth!: Date;

    @ApiProperty({ example: '123 Rue de Paris, 75000 Paris' })
    @IsString()
    address!: string;

    @ApiProperty({ example: 'PASSPORT', enum: ['PASSPORT', 'ID_CARD'] })
    @IsString()
    idType!: string;

    @ApiProperty({ example: '12AB34567' })
    @IsString()
    idNumber!: string;
}