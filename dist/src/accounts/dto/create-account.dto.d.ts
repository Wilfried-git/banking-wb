export declare enum AccountType {
    SAVINGS = "SAVINGS",
    CHECKING = "CHECKING"
}
export declare class CreateAccountDto {
    type: AccountType;
    currency?: string;
}
