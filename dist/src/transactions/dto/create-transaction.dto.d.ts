export declare enum TransactionType {
    TRANSFER = "TRANSFER",
    DEPOSIT = "DEPOSIT",
    WITHDRAWAL = "WITHDRAWAL"
}
export declare class DepositDto {
    accountId: string;
    amount: number;
}
export declare class WithdrawalDto extends DepositDto {
}
export declare class TransferDto {
    sourceAccountId: string;
    destAccountId: string;
    amount: number;
}
