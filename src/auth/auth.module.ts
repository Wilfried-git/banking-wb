import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaModule } from '../prisma/prisma.module'; // <-- Import du module Prisma
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PrismaModule, // <-- On dit à NestJS : "Rends PrismaService disponible ici"
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || 'valeur_de_secours_en_dev',
      signOptions: { expiresIn: '1h' }, // Le token expirera dans 1 heure
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // N'oubliez pas d'ajouter la JwtStrategy ici
})
export class AuthModule { }