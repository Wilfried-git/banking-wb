// create-transaction.dto.ts
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsNumber, IsPositive, IsEnum } from 'class-validator';

export enum TransactionType {
    TRANSFER = 'TRANSFER',
    DEPOSIT = 'DEPOSIT',
    WITHDRAWAL = 'WITHDRAWAL',
}

export class DepositDto {
    @ApiProperty({ description: 'ID du compte à créditer/dépiter' })
    @IsUUID()
    accountId!: string;

    @ApiProperty({ example: 100 })
    @IsNumber() @IsPositive()
    amount!: number;
}

export class WithdrawalDto extends DepositDto { } // Même structure

export class TransferDto {
    @ApiProperty() @IsUUID()
    sourceAccountId!: string;

    @ApiProperty() @IsUUID()
    destAccountId!: string;

    @ApiProperty() @IsNumber() @IsPositive()
    amount!: number;
}