import { PrismaService } from "../prisma/prisma/prisma.service";
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        message: string;
        userId: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(userId: string): Promise<{
        email: string;
        id: string;
        status: string;
        lastLoginAt: Date;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
