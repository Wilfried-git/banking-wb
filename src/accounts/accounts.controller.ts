import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { AccountsService } from './accounts.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Accounts')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('accounts')
export class AccountsController {
  constructor(private readonly accountsService: AccountsService) { }

  @Post()
  @ApiOperation({ summary: 'Ouvrir un compte pour l’utilisateur connecté' })
  create(@Req() req: any, @Body() dto: CreateAccountDto) {
    return this.accountsService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Lister MES comptes' })
  findAll(@Req() req: any) {
    return this.accountsService.findAll(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d’un de MES comptes' })
  findOne(@Req() req: any, @Param('id') id: string) {
    return this.accountsService.findOne(req.user.userId, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un de MES comptes (si solde = 0)' })
  remove(@Req() req: any, @Param('id') id: string) {
    return this.accountsService.remove(req.user.userId, id);
  }
}