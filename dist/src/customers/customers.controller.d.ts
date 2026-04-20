import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
        userId: string;
    }>;
    findAll(): Promise<({
        user: {
            email: string;
            status: string;
        };
    } & {
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
        userId: string;
    })[]>;
    findOne(id: string): Promise<{
        accounts: {
            id: string;
            status: string;
            customerId: string;
            accountNumber: string;
            type: string;
            balance: import("@prisma/client/runtime/library").Decimal;
            currency: string;
        }[];
    } & {
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
        userId: string;
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
        userId: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        createdAt: Date;
        userId: string;
    }>;
}
