import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
export type CustomerModel = runtime.Types.Result.DefaultSelection<Prisma.$CustomerPayload>;
export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type CustomerMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    dateOfBirth: Date | null;
    address: string | null;
    idType: string | null;
    idNumber: string | null;
    createdAt: Date | null;
};
export type CustomerMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    firstName: string | null;
    lastName: string | null;
    dateOfBirth: Date | null;
    address: string | null;
    idType: string | null;
    idNumber: string | null;
    createdAt: Date | null;
};
export type CustomerCountAggregateOutputType = {
    id: number;
    userId: number;
    firstName: number;
    lastName: number;
    dateOfBirth: number;
    address: number;
    idType: number;
    idNumber: number;
    createdAt: number;
    _all: number;
};
export type CustomerMinAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    address?: true;
    idType?: true;
    idNumber?: true;
    createdAt?: true;
};
export type CustomerMaxAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    address?: true;
    idType?: true;
    idNumber?: true;
    createdAt?: true;
};
export type CustomerCountAggregateInputType = {
    id?: true;
    userId?: true;
    firstName?: true;
    lastName?: true;
    dateOfBirth?: true;
    address?: true;
    idType?: true;
    idNumber?: true;
    createdAt?: true;
    _all?: true;
};
export type CustomerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | CustomerCountAggregateInputType;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
    [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateCustomer[P]> : Prisma.GetScalarType<T[P], AggregateCustomer[P]>;
};
export type CustomerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithAggregationInput | Prisma.CustomerOrderByWithAggregationInput[];
    by: Prisma.CustomerScalarFieldEnum[] | Prisma.CustomerScalarFieldEnum;
    having?: Prisma.CustomerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: CustomerCountAggregateInputType | true;
    _min?: CustomerMinAggregateInputType;
    _max?: CustomerMaxAggregateInputType;
};
export type CustomerGroupByOutputType = {
    id: string;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date;
    address: string;
    idType: string;
    idNumber: string;
    createdAt: Date;
    _count: CustomerCountAggregateOutputType | null;
    _min: CustomerMinAggregateOutputType | null;
    _max: CustomerMaxAggregateOutputType | null;
};
export type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<CustomerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], CustomerGroupByOutputType[P]>;
}>>;
export type CustomerWhereInput = {
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    id?: Prisma.StringFilter<"Customer"> | string;
    userId?: Prisma.StringFilter<"Customer"> | string;
    firstName?: Prisma.StringFilter<"Customer"> | string;
    lastName?: Prisma.StringFilter<"Customer"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    address?: Prisma.StringFilter<"Customer"> | string;
    idType?: Prisma.StringFilter<"Customer"> | string;
    idNumber?: Prisma.StringFilter<"Customer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    accounts?: Prisma.AccountListRelationFilter;
    beneficiaries?: Prisma.BeneficiaryListRelationFilter;
};
export type CustomerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    idType?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    accounts?: Prisma.AccountOrderByRelationAggregateInput;
    beneficiaries?: Prisma.BeneficiaryOrderByRelationAggregateInput;
};
export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId?: string;
    AND?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    OR?: Prisma.CustomerWhereInput[];
    NOT?: Prisma.CustomerWhereInput | Prisma.CustomerWhereInput[];
    firstName?: Prisma.StringFilter<"Customer"> | string;
    lastName?: Prisma.StringFilter<"Customer"> | string;
    dateOfBirth?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    address?: Prisma.StringFilter<"Customer"> | string;
    idType?: Prisma.StringFilter<"Customer"> | string;
    idNumber?: Prisma.StringFilter<"Customer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Customer"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    accounts?: Prisma.AccountListRelationFilter;
    beneficiaries?: Prisma.BeneficiaryListRelationFilter;
}, "id" | "userId">;
export type CustomerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    idType?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    _count?: Prisma.CustomerCountOrderByAggregateInput;
    _max?: Prisma.CustomerMaxOrderByAggregateInput;
    _min?: Prisma.CustomerMinOrderByAggregateInput;
};
export type CustomerScalarWhereWithAggregatesInput = {
    AND?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    OR?: Prisma.CustomerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.CustomerScalarWhereWithAggregatesInput | Prisma.CustomerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    firstName?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    lastName?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    dateOfBirth?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
    address?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    idType?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    idNumber?: Prisma.StringWithAggregatesFilter<"Customer"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Customer"> | Date | string;
};
export type CustomerCreateInput = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutCustomerInput;
    beneficiaries?: Prisma.BeneficiaryCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutCustomerInput;
    beneficiaries?: Prisma.BeneficiaryUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutCustomerNestedInput;
    beneficiaries?: Prisma.BeneficiaryUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutCustomerNestedInput;
    beneficiaries?: Prisma.BeneficiaryUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateManyInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
};
export type CustomerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type CustomerNullableScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput | null;
    isNot?: Prisma.CustomerWhereInput | null;
};
export type CustomerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    idType?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    idType?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    firstName?: Prisma.SortOrder;
    lastName?: Prisma.SortOrder;
    dateOfBirth?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    idType?: Prisma.SortOrder;
    idNumber?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
};
export type CustomerScalarRelationFilter = {
    is?: Prisma.CustomerWhereInput;
    isNot?: Prisma.CustomerWhereInput;
};
export type CustomerCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUncheckedCreateNestedOneWithoutUserInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CustomerUpsertWithoutUserInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutUserInput, Prisma.CustomerUpdateWithoutUserInput>, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerUncheckedUpdateOneWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutUserInput;
    upsert?: Prisma.CustomerUpsertWithoutUserInput;
    disconnect?: Prisma.CustomerWhereInput | boolean;
    delete?: Prisma.CustomerWhereInput | boolean;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutUserInput, Prisma.CustomerUpdateWithoutUserInput>, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerCreateNestedOneWithoutAccountsInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutAccountsInput, Prisma.CustomerUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutAccountsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutAccountsInput, Prisma.CustomerUncheckedCreateWithoutAccountsInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutAccountsInput;
    upsert?: Prisma.CustomerUpsertWithoutAccountsInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutAccountsInput, Prisma.CustomerUpdateWithoutAccountsInput>, Prisma.CustomerUncheckedUpdateWithoutAccountsInput>;
};
export type CustomerCreateNestedOneWithoutBeneficiariesInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBeneficiariesInput, Prisma.CustomerUncheckedCreateWithoutBeneficiariesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBeneficiariesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateOneRequiredWithoutBeneficiariesNestedInput = {
    create?: Prisma.XOR<Prisma.CustomerCreateWithoutBeneficiariesInput, Prisma.CustomerUncheckedCreateWithoutBeneficiariesInput>;
    connectOrCreate?: Prisma.CustomerCreateOrConnectWithoutBeneficiariesInput;
    upsert?: Prisma.CustomerUpsertWithoutBeneficiariesInput;
    connect?: Prisma.CustomerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.CustomerUpdateToOneWithWhereWithoutBeneficiariesInput, Prisma.CustomerUpdateWithoutBeneficiariesInput>, Prisma.CustomerUncheckedUpdateWithoutBeneficiariesInput>;
};
export type CustomerCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    accounts?: Prisma.AccountCreateNestedManyWithoutCustomerInput;
    beneficiaries?: Prisma.BeneficiaryCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutUserInput = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutCustomerInput;
    beneficiaries?: Prisma.BeneficiaryUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutUserInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
};
export type CustomerUpsertWithoutUserInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutUserInput, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutUserInput, Prisma.CustomerUncheckedCreateWithoutUserInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutUserInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutUserInput, Prisma.CustomerUncheckedUpdateWithoutUserInput>;
};
export type CustomerUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUpdateManyWithoutCustomerNestedInput;
    beneficiaries?: Prisma.BeneficiaryUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutCustomerNestedInput;
    beneficiaries?: Prisma.BeneficiaryUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutAccountsInput = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    beneficiaries?: Prisma.BeneficiaryCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutAccountsInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    beneficiaries?: Prisma.BeneficiaryUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutAccountsInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutAccountsInput, Prisma.CustomerUncheckedCreateWithoutAccountsInput>;
};
export type CustomerUpsertWithoutAccountsInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutAccountsInput, Prisma.CustomerUncheckedUpdateWithoutAccountsInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutAccountsInput, Prisma.CustomerUncheckedCreateWithoutAccountsInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutAccountsInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutAccountsInput, Prisma.CustomerUncheckedUpdateWithoutAccountsInput>;
};
export type CustomerUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    beneficiaries?: Prisma.BeneficiaryUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutAccountsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    beneficiaries?: Prisma.BeneficiaryUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCreateWithoutBeneficiariesInput = {
    id?: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutCustomerInput;
    accounts?: Prisma.AccountCreateNestedManyWithoutCustomerInput;
};
export type CustomerUncheckedCreateWithoutBeneficiariesInput = {
    id?: string;
    userId: string;
    firstName: string;
    lastName: string;
    dateOfBirth: Date | string;
    address: string;
    idType: string;
    idNumber: string;
    createdAt?: Date | string;
    accounts?: Prisma.AccountUncheckedCreateNestedManyWithoutCustomerInput;
};
export type CustomerCreateOrConnectWithoutBeneficiariesInput = {
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBeneficiariesInput, Prisma.CustomerUncheckedCreateWithoutBeneficiariesInput>;
};
export type CustomerUpsertWithoutBeneficiariesInput = {
    update: Prisma.XOR<Prisma.CustomerUpdateWithoutBeneficiariesInput, Prisma.CustomerUncheckedUpdateWithoutBeneficiariesInput>;
    create: Prisma.XOR<Prisma.CustomerCreateWithoutBeneficiariesInput, Prisma.CustomerUncheckedCreateWithoutBeneficiariesInput>;
    where?: Prisma.CustomerWhereInput;
};
export type CustomerUpdateToOneWithWhereWithoutBeneficiariesInput = {
    where?: Prisma.CustomerWhereInput;
    data: Prisma.XOR<Prisma.CustomerUpdateWithoutBeneficiariesInput, Prisma.CustomerUncheckedUpdateWithoutBeneficiariesInput>;
};
export type CustomerUpdateWithoutBeneficiariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutCustomerNestedInput;
    accounts?: Prisma.AccountUpdateManyWithoutCustomerNestedInput;
};
export type CustomerUncheckedUpdateWithoutBeneficiariesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    firstName?: Prisma.StringFieldUpdateOperationsInput | string;
    lastName?: Prisma.StringFieldUpdateOperationsInput | string;
    dateOfBirth?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    idType?: Prisma.StringFieldUpdateOperationsInput | string;
    idNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    accounts?: Prisma.AccountUncheckedUpdateManyWithoutCustomerNestedInput;
};
export type CustomerCountOutputType = {
    accounts: number;
    beneficiaries: number;
};
export type CustomerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    accounts?: boolean | CustomerCountOutputTypeCountAccountsArgs;
    beneficiaries?: boolean | CustomerCountOutputTypeCountBeneficiariesArgs;
};
export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerCountOutputTypeSelect<ExtArgs> | null;
};
export type CustomerCountOutputTypeCountAccountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AccountWhereInput;
};
export type CustomerCountOutputTypeCountBeneficiariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BeneficiaryWhereInput;
};
export type CustomerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    address?: boolean;
    idType?: boolean;
    idNumber?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    accounts?: boolean | Prisma.Customer$accountsArgs<ExtArgs>;
    beneficiaries?: boolean | Prisma.Customer$beneficiariesArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    address?: boolean;
    idType?: boolean;
    idNumber?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    address?: boolean;
    idType?: boolean;
    idNumber?: boolean;
    createdAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["customer"]>;
export type CustomerSelectScalar = {
    id?: boolean;
    userId?: boolean;
    firstName?: boolean;
    lastName?: boolean;
    dateOfBirth?: boolean;
    address?: boolean;
    idType?: boolean;
    idNumber?: boolean;
    createdAt?: boolean;
};
export type CustomerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "firstName" | "lastName" | "dateOfBirth" | "address" | "idType" | "idNumber" | "createdAt", ExtArgs["result"]["customer"]>;
export type CustomerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    accounts?: boolean | Prisma.Customer$accountsArgs<ExtArgs>;
    beneficiaries?: boolean | Prisma.Customer$beneficiariesArgs<ExtArgs>;
    _count?: boolean | Prisma.CustomerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type CustomerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $CustomerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Customer";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        accounts: Prisma.$AccountPayload<ExtArgs>[];
        beneficiaries: Prisma.$BeneficiaryPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
    }, ExtArgs["result"]["customer"]>;
    composites: {};
};
export type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$CustomerPayload, S>;
export type CustomerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: CustomerCountAggregateInputType | true;
};
export interface CustomerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Customer'];
        meta: {
            name: 'Customer';
        };
    };
    findUnique<T extends CustomerFindUniqueArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends CustomerFindFirstArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends CustomerFindManyArgs>(args?: Prisma.SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends CustomerCreateArgs>(args: Prisma.SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends CustomerCreateManyArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends CustomerDeleteArgs>(args: Prisma.SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends CustomerUpdateArgs>(args: Prisma.SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends CustomerDeleteManyArgs>(args?: Prisma.SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends CustomerUpdateManyArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends CustomerUpsertArgs>(args: Prisma.SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma.Prisma__CustomerClient<runtime.Types.Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends CustomerCountArgs>(args?: Prisma.Subset<T, CustomerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], CustomerCountAggregateOutputType> : number>;
    aggregate<T extends CustomerAggregateArgs>(args: Prisma.Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>;
    groupBy<T extends CustomerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: CustomerGroupByArgs['orderBy'];
    } : {
        orderBy?: CustomerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: CustomerFieldRefs;
}
export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    accounts<T extends Prisma.Customer$accountsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    beneficiaries<T extends Prisma.Customer$beneficiariesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Customer$beneficiariesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BeneficiaryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface CustomerFieldRefs {
    readonly id: Prisma.FieldRef<"Customer", 'String'>;
    readonly userId: Prisma.FieldRef<"Customer", 'String'>;
    readonly firstName: Prisma.FieldRef<"Customer", 'String'>;
    readonly lastName: Prisma.FieldRef<"Customer", 'String'>;
    readonly dateOfBirth: Prisma.FieldRef<"Customer", 'DateTime'>;
    readonly address: Prisma.FieldRef<"Customer", 'String'>;
    readonly idType: Prisma.FieldRef<"Customer", 'String'>;
    readonly idNumber: Prisma.FieldRef<"Customer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Customer", 'DateTime'>;
}
export type CustomerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where?: Prisma.CustomerWhereInput;
    orderBy?: Prisma.CustomerOrderByWithRelationInput | Prisma.CustomerOrderByWithRelationInput[];
    cursor?: Prisma.CustomerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CustomerScalarFieldEnum | Prisma.CustomerScalarFieldEnum[];
};
export type CustomerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
};
export type CustomerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type CustomerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.CustomerCreateManyInput | Prisma.CustomerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.CustomerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type CustomerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.CustomerUpdateManyMutationInput, Prisma.CustomerUncheckedUpdateManyInput>;
    where?: Prisma.CustomerWhereInput;
    limit?: number;
    include?: Prisma.CustomerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type CustomerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
    create: Prisma.XOR<Prisma.CustomerCreateInput, Prisma.CustomerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.CustomerUpdateInput, Prisma.CustomerUncheckedUpdateInput>;
};
export type CustomerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
    where: Prisma.CustomerWhereUniqueInput;
};
export type CustomerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CustomerWhereInput;
    limit?: number;
};
export type Customer$accountsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Customer$beneficiariesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BeneficiarySelect<ExtArgs> | null;
    omit?: Prisma.BeneficiaryOmit<ExtArgs> | null;
    include?: Prisma.BeneficiaryInclude<ExtArgs> | null;
    where?: Prisma.BeneficiaryWhereInput;
    orderBy?: Prisma.BeneficiaryOrderByWithRelationInput | Prisma.BeneficiaryOrderByWithRelationInput[];
    cursor?: Prisma.BeneficiaryWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BeneficiaryScalarFieldEnum | Prisma.BeneficiaryScalarFieldEnum[];
};
export type CustomerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CustomerSelect<ExtArgs> | null;
    omit?: Prisma.CustomerOmit<ExtArgs> | null;
    include?: Prisma.CustomerInclude<ExtArgs> | null;
};
