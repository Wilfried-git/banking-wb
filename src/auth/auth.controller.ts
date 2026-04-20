
import { Body, Controller, Post, Get, HttpCode, HttpStatus, UseGuards, Request } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    @ApiOperation({ summary: "Création d'un nouveau compte" })
    register(@Body() dto: RegisterDto) {
        return this.authService.register(dto);
    }

    @HttpCode(HttpStatus.OK)
    @Post('login')
    @ApiOperation({ summary: "Connexion et récupération du token JWT" })
    login(@Body() dto: LoginDto) {
        return this.authService.login(dto);
    }

    @UseGuards(JwtAuthGuard)
    @ApiBearerAuth()
    @Get('me')
    @ApiOperation({ summary: "Récupérer les informations de l'utilisateur connecté" })
    getProfile(@Request() req) {
        // Le JwtAuthGuard attache le payload du token à req.user
        // On utilise "as any" car Express.Request ne connaît pas nativement notre structure
        const user = req.user as any;

        // On appelle le service pour récupérer le profil complet en base de données
        return this.authService.getProfile(user.userId);
    }
}