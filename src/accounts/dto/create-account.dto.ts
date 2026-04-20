import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsString, IsOptional } from 'class-validator';

export enum AccountType {
    SAVINGS = 'SAVINGS',
    CHECKING = 'CHECKING',
}

export class CreateAccountDto {
    @ApiProperty({ example: 'CHECKING', enum: AccountType })
    @IsEnum(AccountType)
    type!: AccountType;

    @ApiProperty({ example: 'EUR', default: 'EUR' })
    @IsString()
    @IsOptional()
    currency?: string;
}