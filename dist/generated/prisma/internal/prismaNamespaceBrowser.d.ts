import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: any;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: any;
export declare const JsonNull: any;
export declare const AnyNull: any;
export declare const ModelName: {
    readonly User: "User";
    readonly Customer: "Customer";
    readonly Account: "Account";
    readonly Transaction: "Transaction";
    readonly Beneficiary: "Beneficiary";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: any;
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly email: "email";
    readonly passwordHash: "passwordHash";
    readonly status: "status";
    readonly lastLoginAt: "lastLoginAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CustomerScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly dateOfBirth: "dateOfBirth";
    readonly address: "address";
    readonly idType: "idType";
    readonly idNumber: "idNumber";
    readonly createdAt: "createdAt";
};
export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum];
export declare const AccountScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly accountNumber: "accountNumber";
    readonly type: "type";
    readonly balance: "balance";
    readonly currency: "currency";
    readonly status: "status";
};
export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum];
export declare const TransactionScalarFieldEnum: {
    readonly id: "id";
    readonly sourceAccountId: "sourceAccountId";
    readonly destAccountId: "destAccountId";
    readonly amount: "amount";
    readonly type: "type";
    readonly status: "status";
    readonly reference: "reference";
    readonly executedAt: "executedAt";
};
export type TransactionScalarFieldEnum = (typeof TransactionScalarFieldEnum)[keyof typeof TransactionScalarFieldEnum];
export declare const BeneficiaryScalarFieldEnum: {
    readonly id: "id";
    readonly customerId: "customerId";
    readonly name: "name";
    readonly accountNumber: "accountNumber";
    readonly bankName: "bankName";
    readonly createdAt: "createdAt";
};
export type BeneficiaryScalarFieldEnum = (typeof BeneficiaryScalarFieldEnum)[keyof typeof BeneficiaryScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
