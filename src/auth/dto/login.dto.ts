import { IsEmail, IsString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
    @ApiProperty({ example: 'jean.dupont@email.com', description: "L'adresse email de l'utilisateur" })
    @IsEmail()
    email!: string;

    @ApiProperty({ example: 'StrongP@ssw0rd', description: 'Le mot de passe en clair (sera hashé par le service)' })
    @IsString()
    @MinLength(8)
    password!: string;
} 