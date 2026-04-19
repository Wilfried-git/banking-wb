import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type AccountModel = runtime.Types.Result.DefaultSelection<Prisma.$AccountPayload>;
export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
};
export type AccountAvgAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type AccountSumAggregateOutputType = {
    balance: runtime.Decimal | null;
};
export type AccountMinAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    accountNumber: string | null;
    type: string | null;
    balance: runtime.Decimal | null;
    currency: string | null;
    status: string | null;
};
export type AccountMaxAggregateOutputType = {
    id: string | null;
    customerId: string | null;
    accountNumber: string | null;
    type: string | null;
    balance: runtime.Decimal | null;
    currency: string | null;
    status: string | null;
};
export type AccountCountAggregateOutputType = {
    id: number;
    customerId: number;
    accountNumber: number;
    type: number;
    balance: number;
    currency: number;
    status: number;
    _all: number;
};
export type AccountAvgAggregateInputType = {
    balance?: true;
};
export type AccountSumAggregateInputType = {
    balance?: true;
};
export type AccountMinAggregateInputType = {
    id?: true;
    customerId?: true;
    accountNumber?: true;
    type?: true;
    balance?: true;
    currency?: true;
    status?: true;
};
export type AccountMaxAggregateInputType = {
    id?: true;
    customerId?: true;
    accountNumber?: true;
    type?: true;
    balance?: true;
    currency?: true;
    status?: true;
};
export type AccountCountAggregateInputType = {
    id?: true;
    customerId?: true;
    accountNumber?: true;
    type?: true;
    balance?: true;
    currency?: true;
    status?: true;
    _all?: true;
};
export type AccountAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | AccountCountAggregateInputType;
    _avg?: AccountAvgAggregateInputType;
    _sum?: AccountSumAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
};
export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
    [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAccount[P]> : Prisma.GetScalarType<T[P], AggregateAccount[P]>;
};
export type AccountGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithAggregationInput | Prisma.AccountOrderByWithAggregationInput[];
    by: Prisma.AccountScalarFieldEnum[] | Prisma.AccountScalarFieldEnum;
    having?: Prisma.AccountScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AccountCountAggregateInputType | true;
    _avg?: AccountAvgAggregateInputType;
    _sum?: AccountSumAggregateInputType;
    _min?: AccountMinAggregateInputType;
    _max?: AccountMaxAggregateInputType;
};
export type AccountGroupByOutputType = {
    id: string;
    customerId: string;
    accountNumber: string;
    type: string;
    balance: runtime.Decimal;
    currency: string;
    status: string;
    _count: AccountCountAggregateOutputType | null;
    _avg: AccountAvgAggregateOutputType | null;
    _sum: AccountSumAggregateOutputType | null;
    _min: AccountMinAggregateOutputType | null;
    _max: AccountMaxAggregateOutputType | null;
};
export type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AccountGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AccountGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AccountGroupByOutputType[P]>;
}>>;
export type AccountWhereInput = {
    AND?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    OR?: Prisma.AccountWhereInput[];
    NOT?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    id?: Prisma.StringFilter<"Account"> | string;
    customerId?: Prisma.StringFilter<"Account"> | string;
    accountNumber?: Prisma.StringFilter<"Account"> | string;
    type?: Prisma.StringFilter<"Account"> | string;
    balance?: Prisma.DecimalFilter<"Account"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Account"> | string;
    status?: Prisma.StringFilter<"Account"> | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    sentTransactions?: Prisma.TransactionListRelationFilter;
    receivedTransactions?: Prisma.TransactionListRelationFilter;
};
export type AccountOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    customer?: Prisma.CustomerOrderByWithRelationInput;
    sentTransactions?: Prisma.TransactionOrderByRelationAggregateInput;
    receivedTransactions?: Prisma.TransactionOrderByRelationAggregateInput;
};
export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    accountNumber?: string;
    AND?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    OR?: Prisma.AccountWhereInput[];
    NOT?: Prisma.AccountWhereInput | Prisma.AccountWhereInput[];
    customerId?: Prisma.StringFilter<"Account"> | string;
    type?: Prisma.StringFilter<"Account"> | string;
    balance?: Prisma.DecimalFilter<"Account"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Account"> | string;
    status?: Prisma.StringFilter<"Account"> | string;
    customer?: Prisma.XOR<Prisma.CustomerScalarRelationFilter, Prisma.CustomerWhereInput>;
    sentTransactions?: Prisma.TransactionListRelationFilter;
    receivedTransactions?: Prisma.TransactionListRelationFilter;
}, "id" | "accountNumber">;
export type AccountOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    _count?: Prisma.AccountCountOrderByAggregateInput;
    _avg?: Prisma.AccountAvgOrderByAggregateInput;
    _max?: Prisma.AccountMaxOrderByAggregateInput;
    _min?: Prisma.AccountMinOrderByAggregateInput;
    _sum?: Prisma.AccountSumOrderByAggregateInput;
};
export type AccountScalarWhereWithAggregatesInput = {
    AND?: Prisma.AccountScalarWhereWithAggregatesInput | Prisma.AccountScalarWhereWithAggregatesInput[];
    OR?: Prisma.AccountScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AccountScalarWhereWithAggregatesInput | Prisma.AccountScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    customerId?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    accountNumber?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    type?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    balance?: Prisma.DecimalWithAggregatesFilter<"Account"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringWithAggregatesFilter<"Account"> | string;
    status?: Prisma.StringWithAggregatesFilter<"Account"> | string;
};
export type AccountCreateInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    customer: Prisma.CustomerCreateNestedOneWithoutAccountsInput;
    sentTransactions?: Prisma.TransactionCreateNestedManyWithoutSourceAccountInput;
    receivedTransactions?: Prisma.TransactionCreateNestedManyWithoutDestAccountInput;
};
export type AccountUncheckedCreateInput = {
    id?: string;
    customerId: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    sentTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutSourceAccountInput;
    receivedTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutDestAccountInput;
};
export type AccountUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutAccountsNestedInput;
    sentTransactions?: Prisma.TransactionUpdateManyWithoutSourceAccountNestedInput;
    receivedTransactions?: Prisma.TransactionUpdateManyWithoutDestAccountNestedInput;
};
export type AccountUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    sentTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutSourceAccountNestedInput;
    receivedTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutDestAccountNestedInput;
};
export type AccountCreateManyInput = {
    id?: string;
    customerId: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
};
export type AccountUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AccountUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AccountListRelationFilter = {
    every?: Prisma.AccountWhereInput;
    some?: Prisma.AccountWhereInput;
    none?: Prisma.AccountWhereInput;
};
export type AccountOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type AccountCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AccountAvgOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type AccountMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AccountMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    customerId?: Prisma.SortOrder;
    accountNumber?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    balance?: Prisma.SortOrder;
    currency?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
};
export type AccountSumOrderByAggregateInput = {
    balance?: Prisma.SortOrder;
};
export type AccountScalarRelationFilter = {
    is?: Prisma.AccountWhereInput;
    isNot?: Prisma.AccountWhereInput;
};
export type AccountCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput> | Prisma.AccountCreateWithoutCustomerInput[] | Prisma.AccountUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutCustomerInput | Prisma.AccountCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.AccountCreateManyCustomerInputEnvelope;
    connect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
};
export type AccountUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput> | Prisma.AccountCreateWithoutCustomerInput[] | Prisma.AccountUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutCustomerInput | Prisma.AccountCreateOrConnectWithoutCustomerInput[];
    createMany?: Prisma.AccountCreateManyCustomerInputEnvelope;
    connect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
};
export type AccountUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput> | Prisma.AccountCreateWithoutCustomerInput[] | Prisma.AccountUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutCustomerInput | Prisma.AccountCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.AccountUpsertWithWhereUniqueWithoutCustomerInput | Prisma.AccountUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.AccountCreateManyCustomerInputEnvelope;
    set?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    disconnect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    delete?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    connect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    update?: Prisma.AccountUpdateWithWhereUniqueWithoutCustomerInput | Prisma.AccountUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.AccountUpdateManyWithWhereWithoutCustomerInput | Prisma.AccountUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.AccountScalarWhereInput | Prisma.AccountScalarWhereInput[];
};
export type AccountUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput> | Prisma.AccountCreateWithoutCustomerInput[] | Prisma.AccountUncheckedCreateWithoutCustomerInput[];
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutCustomerInput | Prisma.AccountCreateOrConnectWithoutCustomerInput[];
    upsert?: Prisma.AccountUpsertWithWhereUniqueWithoutCustomerInput | Prisma.AccountUpsertWithWhereUniqueWithoutCustomerInput[];
    createMany?: Prisma.AccountCreateManyCustomerInputEnvelope;
    set?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    disconnect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    delete?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    connect?: Prisma.AccountWhereUniqueInput | Prisma.AccountWhereUniqueInput[];
    update?: Prisma.AccountUpdateWithWhereUniqueWithoutCustomerInput | Prisma.AccountUpdateWithWhereUniqueWithoutCustomerInput[];
    updateMany?: Prisma.AccountUpdateManyWithWhereWithoutCustomerInput | Prisma.AccountUpdateManyWithWhereWithoutCustomerInput[];
    deleteMany?: Prisma.AccountScalarWhereInput | Prisma.AccountScalarWhereInput[];
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type AccountCreateNestedOneWithoutSentTransactionsInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutSentTransactionsInput, Prisma.AccountUncheckedCreateWithoutSentTransactionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutSentTransactionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
};
export type AccountCreateNestedOneWithoutReceivedTransactionsInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedCreateWithoutReceivedTransactionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutReceivedTransactionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
};
export type AccountUpdateOneRequiredWithoutSentTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutSentTransactionsInput, Prisma.AccountUncheckedCreateWithoutSentTransactionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutSentTransactionsInput;
    upsert?: Prisma.AccountUpsertWithoutSentTransactionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccountUpdateToOneWithWhereWithoutSentTransactionsInput, Prisma.AccountUpdateWithoutSentTransactionsInput>, Prisma.AccountUncheckedUpdateWithoutSentTransactionsInput>;
};
export type AccountUpdateOneRequiredWithoutReceivedTransactionsNestedInput = {
    create?: Prisma.XOR<Prisma.AccountCreateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedCreateWithoutReceivedTransactionsInput>;
    connectOrCreate?: Prisma.AccountCreateOrConnectWithoutReceivedTransactionsInput;
    upsert?: Prisma.AccountUpsertWithoutReceivedTransactionsInput;
    connect?: Prisma.AccountWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AccountUpdateToOneWithWhereWithoutReceivedTransactionsInput, Prisma.AccountUpdateWithoutReceivedTransactionsInput>, Prisma.AccountUncheckedUpdateWithoutReceivedTransactionsInput>;
};
export type AccountCreateWithoutCustomerInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    sentTransactions?: Prisma.TransactionCreateNestedManyWithoutSourceAccountInput;
    receivedTransactions?: Prisma.TransactionCreateNestedManyWithoutDestAccountInput;
};
export type AccountUncheckedCreateWithoutCustomerInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    sentTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutSourceAccountInput;
    receivedTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutDestAccountInput;
};
export type AccountCreateOrConnectWithoutCustomerInput = {
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput>;
};
export type AccountCreateManyCustomerInputEnvelope = {
    data: Prisma.AccountCreateManyCustomerInput | Prisma.AccountCreateManyCustomerInput[];
    skipDuplicates?: boolean;
};
export type AccountUpsertWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.AccountWhereUniqueInput;
    update: Prisma.XOR<Prisma.AccountUpdateWithoutCustomerInput, Prisma.AccountUncheckedUpdateWithoutCustomerInput>;
    create: Prisma.XOR<Prisma.AccountCreateWithoutCustomerInput, Prisma.AccountUncheckedCreateWithoutCustomerInput>;
};
export type AccountUpdateWithWhereUniqueWithoutCustomerInput = {
    where: Prisma.AccountWhereUniqueInput;
    data: Prisma.XOR<Prisma.AccountUpdateWithoutCustomerInput, Prisma.AccountUncheckedUpdateWithoutCustomerInput>;
};
export type AccountUpdateManyWithWhereWithoutCustomerInput = {
    where: Prisma.AccountScalarWhereInput;
    data: Prisma.XOR<Prisma.AccountUpdateManyMutationInput, Prisma.AccountUncheckedUpdateManyWithoutCustomerInput>;
};
export type AccountScalarWhereInput = {
    AND?: Prisma.AccountScalarWhereInput | Prisma.AccountScalarWhereInput[];
    OR?: Prisma.AccountScalarWhereInput[];
    NOT?: Prisma.AccountScalarWhereInput | Prisma.AccountScalarWhereInput[];
    id?: Prisma.StringFilter<"Account"> | string;
    customerId?: Prisma.StringFilter<"Account"> | string;
    accountNumber?: Prisma.StringFilter<"Account"> | string;
    type?: Prisma.StringFilter<"Account"> | string;
    balance?: Prisma.DecimalFilter<"Account"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFilter<"Account"> | string;
    status?: Prisma.StringFilter<"Account"> | string;
};
export type AccountCreateWithoutSentTransactionsInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    customer: Prisma.CustomerCreateNestedOneWithoutAccountsInput;
    receivedTransactions?: Prisma.TransactionCreateNestedManyWithoutDestAccountInput;
};
export type AccountUncheckedCreateWithoutSentTransactionsInput = {
    id?: string;
    customerId: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    receivedTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutDestAccountInput;
};
export type AccountCreateOrConnectWithoutSentTransactionsInput = {
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateWithoutSentTransactionsInput, Prisma.AccountUncheckedCreateWithoutSentTransactionsInput>;
};
export type AccountCreateWithoutReceivedTransactionsInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    customer: Prisma.CustomerCreateNestedOneWithoutAccountsInput;
    sentTransactions?: Prisma.TransactionCreateNestedManyWithoutSourceAccountInput;
};
export type AccountUncheckedCreateWithoutReceivedTransactionsInput = {
    id?: string;
    customerId: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
    sentTransactions?: Prisma.TransactionUncheckedCreateNestedManyWithoutSourceAccountInput;
};
export type AccountCreateOrConnectWithoutReceivedTransactionsInput = {
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedCreateWithoutReceivedTransactionsInput>;
};
export type AccountUpsertWithoutSentTransactionsInput = {
    update: Prisma.XOR<Prisma.AccountUpdateWithoutSentTransactionsInput, Prisma.AccountUncheckedUpdateWithoutSentTransactionsInput>;
    create: Prisma.XOR<Prisma.AccountCreateWithoutSentTransactionsInput, Prisma.AccountUncheckedCreateWithoutSentTransactionsInput>;
    where?: Prisma.AccountWhereInput;
};
export type AccountUpdateToOneWithWhereWithoutSentTransactionsInput = {
    where?: Prisma.AccountWhereInput;
    data: Prisma.XOR<Prisma.AccountUpdateWithoutSentTransactionsInput, Prisma.AccountUncheckedUpdateWithoutSentTransactionsInput>;
};
export type AccountUpdateWithoutSentTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutAccountsNestedInput;
    receivedTransactions?: Prisma.TransactionUpdateManyWithoutDestAccountNestedInput;
};
export type AccountUncheckedUpdateWithoutSentTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    receivedTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutDestAccountNestedInput;
};
export type AccountUpsertWithoutReceivedTransactionsInput = {
    update: Prisma.XOR<Prisma.AccountUpdateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedUpdateWithoutReceivedTransactionsInput>;
    create: Prisma.XOR<Prisma.AccountCreateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedCreateWithoutReceivedTransactionsInput>;
    where?: Prisma.AccountWhereInput;
};
export type AccountUpdateToOneWithWhereWithoutReceivedTransactionsInput = {
    where?: Prisma.AccountWhereInput;
    data: Prisma.XOR<Prisma.AccountUpdateWithoutReceivedTransactionsInput, Prisma.AccountUncheckedUpdateWithoutReceivedTransactionsInput>;
};
export type AccountUpdateWithoutReceivedTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    customer?: Prisma.CustomerUpdateOneRequiredWithoutAccountsNestedInput;
    sentTransactions?: Prisma.TransactionUpdateManyWithoutSourceAccountNestedInput;
};
export type AccountUncheckedUpdateWithoutReceivedTransactionsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    customerId?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    sentTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutSourceAccountNestedInput;
};
export type AccountCreateManyCustomerInput = {
    id?: string;
    accountNumber: string;
    type: string;
    balance?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: string;
    status?: string;
};
export type AccountUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    sentTransactions?: Prisma.TransactionUpdateManyWithoutSourceAccountNestedInput;
    receivedTransactions?: Prisma.TransactionUpdateManyWithoutDestAccountNestedInput;
};
export type AccountUncheckedUpdateWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
    sentTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutSourceAccountNestedInput;
    receivedTransactions?: Prisma.TransactionUncheckedUpdateManyWithoutDestAccountNestedInput;
};
export type AccountUncheckedUpdateManyWithoutCustomerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    accountNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    balance?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    currency?: Prisma.StringFieldUpdateOperationsInput | string;
    status?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type AccountCountOutputType = {
    sentTransactions: number;
    receivedTransactions: number;
};
export type AccountCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    sentTransactions?: boolean | AccountCountOutputTypeCountSentTransactionsArgs;
    receivedTransactions?: boolean | AccountCountOutputTypeCountReceivedTransactionsArgs;
};
export type AccountCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountCountOutputTypeSelect<ExtArgs> | null;
};
export type AccountCountOutputTypeCountSentTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type AccountCountOutputTypeCountReceivedTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.TransactionWhereInput;
};
export type AccountSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    accountNumber?: boolean;
    type?: boolean;
    balance?: boolean;
    currency?: boolean;
    status?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sentTransactions?: boolean | Prisma.Account$sentTransactionsArgs<ExtArgs>;
    receivedTransactions?: boolean | Prisma.Account$receivedTransactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccountCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["account"]>;
export type AccountSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    accountNumber?: boolean;
    type?: boolean;
    balance?: boolean;
    currency?: boolean;
    status?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["account"]>;
export type AccountSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    customerId?: boolean;
    accountNumber?: boolean;
    type?: boolean;
    balance?: boolean;
    currency?: boolean;
    status?: boolean;
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["account"]>;
export type AccountSelectScalar = {
    id?: boolean;
    customerId?: boolean;
    accountNumber?: boolean;
    type?: boolean;
    balance?: boolean;
    currency?: boolean;
    status?: boolean;
};
export type AccountOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "customerId" | "accountNumber" | "type" | "balance" | "currency" | "status", ExtArgs["result"]["account"]>;
export type AccountInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
    sentTransactions?: boolean | Prisma.Account$sentTransactionsArgs<ExtArgs>;
    receivedTransactions?: boolean | Prisma.Account$receivedTransactionsArgs<ExtArgs>;
    _count?: boolean | Prisma.AccountCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AccountIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type AccountIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    customer?: boolean | Prisma.CustomerDefaultArgs<ExtArgs>;
};
export type $AccountPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Account";
    objects: {
        customer: Prisma.$CustomerPayload<ExtArgs>;
        sentTransactions: Prisma.$TransactionPayload<ExtArgs>[];
        receivedTransactions: Prisma.$TransactionPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        customerId: string;
        accountNumber: string;
        type: string;
        balance: runtime.Decimal;
        currency: string;
        status: string;
    }, ExtArgs["result"]["account"]>;
    composites: {};
};
export type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AccountPayload, S>;
export type AccountCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AccountCountAggregateInputType | true;
};
export interface AccountDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Account'];
        meta: {
            name: 'Account';
        };
    };
    findUnique<T extends AccountFindUniqueArgs>(args: Prisma.SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends AccountFindFirstArgs>(args?: Prisma.SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends AccountFindManyArgs>(args?: Prisma.SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends AccountCreateArgs>(args: Prisma.SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends AccountCreateManyArgs>(args?: Prisma.SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends AccountDeleteArgs>(args: Prisma.SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends AccountUpdateArgs>(args: Prisma.SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends AccountDeleteManyArgs>(args?: Prisma.SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends AccountUpdateManyArgs>(args: Prisma.SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends AccountUpsertArgs>(args: Prisma.SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma.Prisma__AccountClient<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends AccountCountArgs>(args?: Prisma.Subset<T, AccountCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AccountCountAggregateOutputType> : number>;
    aggregate<T extends AccountAggregateArgs>(args: Prisma.Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>;
    groupBy<T extends AccountGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AccountGroupByArgs['orderBy'];
    } : {
        orderBy?: AccountGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: AccountFieldRefs;
}
export interface Prisma__AccountClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    customer<T extends Prisma.CustomerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.CustomerDefaultArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    sentTransactions<T extends Prisma.Account$sentTransactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Account$sentTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    receivedTransactions<T extends Prisma.Account$receivedTransactionsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Account$receivedTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$TransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface AccountFieldRefs {
    readonly id: Prisma.FieldRef<"Account", 'String'>;
    readonly customerId: Prisma.FieldRef<"Account", 'String'>;
    readonly accountNumber: Prisma.FieldRef<"Account", 'String'>;
    readonly type: Prisma.FieldRef<"Account", 'String'>;
    readonly balance: Prisma.FieldRef<"Account", 'Decimal'>;
    readonly currency: Prisma.FieldRef<"Account", 'String'>;
    readonly status: Prisma.FieldRef<"Account", 'String'>;
}
export type AccountFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where?: Prisma.AccountWhereInput;
    orderBy?: Prisma.AccountOrderByWithRelationInput | Prisma.AccountOrderByWithRelationInput[];
    cursor?: Prisma.AccountWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.AccountScalarFieldEnum | Prisma.AccountScalarFieldEnum[];
};
export type AccountCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountCreateInput, Prisma.AccountUncheckedCreateInput>;
};
export type AccountCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.AccountCreateManyInput | Prisma.AccountCreateManyInput[];
    skipDuplicates?: boolean;
};
export type AccountCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    data: Prisma.AccountCreateManyInput | Prisma.AccountCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.AccountIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type AccountUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountUpdateInput, Prisma.AccountUncheckedUpdateInput>;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.AccountUpdateManyMutationInput, Prisma.AccountUncheckedUpdateManyInput>;
    where?: Prisma.AccountWhereInput;
    limit?: number;
};
export type AccountUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.AccountUpdateManyMutationInput, Prisma.AccountUncheckedUpdateManyInput>;
    where?: Prisma.AccountWhereInput;
    limit?: number;
    include?: Prisma.AccountIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type AccountUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
    create: Prisma.XOR<Prisma.AccountCreateInput, Prisma.AccountUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.AccountUpdateInput, Prisma.AccountUncheckedUpdateInput>;
};
export type AccountDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
    where: Prisma.AccountWhereUniqueInput;
};
export type AccountDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
    limit?: number;
};
export type Account$sentTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type Account$receivedTransactionsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.TransactionSelect<ExtArgs> | null;
    omit?: Prisma.TransactionOmit<ExtArgs> | null;
    include?: Prisma.TransactionInclude<ExtArgs> | null;
    where?: Prisma.TransactionWhereInput;
    orderBy?: Prisma.TransactionOrderByWithRelationInput | Prisma.TransactionOrderByWithRelationInput[];
    cursor?: Prisma.TransactionWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.TransactionScalarFieldEnum | Prisma.TransactionScalarFieldEnum[];
};
export type AccountDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.AccountSelect<ExtArgs> | null;
    omit?: Prisma.AccountOmit<ExtArgs> | null;
    include?: Prisma.AccountInclude<ExtArgs> | null;
};
