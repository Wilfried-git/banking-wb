import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: RegisterDto): Promise<{
        message: string;
        userId: string;
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): Promise<{
        id: string;
        createdAt: Date;
        email: string;
        status: string;
        lastLoginAt: Date;
        updatedAt: Date;
    }>;
}
