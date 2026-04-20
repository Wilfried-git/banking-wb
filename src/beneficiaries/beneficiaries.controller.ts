import { Controller, Get, Post, Body, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { BeneficiariesService } from './beneficiaries.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@ApiTags('Beneficiaries')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('beneficiaries')
export class BeneficiariesController {
  constructor(private readonly beneficiariesService: BeneficiariesService) { }

  @Post()
  @ApiOperation({ summary: 'Ajouter un bénéficiaire à ma liste' })
  create(@Req() req: any, @Body() dto: CreateBeneficiaryDto) {
    return this.beneficiariesService.create(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Voir ma liste de bénéficiaires' })
  findAll(@Req() req: any) {
    return this.beneficiariesService.findAll(req.user.userId);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Détails d’un de mes bénéficiaires' })
  findOne(@Req() req: any, @Param('id') id: string) {
    return this.beneficiariesService.findOne(req.user.userId, id);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un bénéficiaire de ma liste' })
  remove(@Req() req: any, @Param('id') id: string) {
    return this.beneficiariesService.remove(req.user.userId, id);
  }
}