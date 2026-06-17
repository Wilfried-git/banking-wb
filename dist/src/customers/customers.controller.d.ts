import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
export declare class CustomersController {
    private readonly customersService;
    constructor(customersService: CustomersService);
    create(createCustomerDto: CreateCustomerDto): Promise<{
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        id: string;
        createdAt: Date;
    }>;
    findAll(): Promise<({
        user: {
            email: string;
            status: string;
        };
    } & {
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        id: string;
        createdAt: Date;
    })[]>;
    findOne(id: string): Promise<{
        accounts: {
            type: string;
            id: string;
            status: string;
            currency: string;
            accountNumber: string;
            balance: import("@prisma/client/runtime/library").Decimal;
            customerId: string;
        }[];
    } & {
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        id: string;
        createdAt: Date;
    }>;
    update(id: string, updateCustomerDto: UpdateCustomerDto): Promise<{
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        id: string;
        createdAt: Date;
    }>;
    remove(id: string): Promise<{
        userId: string;
        firstName: string;
        lastName: string;
        dateOfBirth: Date;
        address: string;
        idType: string;
        idNumber: string;
        id: string;
        createdAt: Date;
    }>;
}
