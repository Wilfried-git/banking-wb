import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiResponse } from '@nestjs/swagger';
import { CustomersService } from './customers.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard'; // Ajustez le chemin si besoin

@ApiTags('Customers') // Regroupe ces routes dans Swagger
@ApiBearerAuth()      // Indique à Swagger qu'il faut un Token JWT
@UseGuards(JwtAuthGuard) // Protège TOUTES les routes de ce contrôleur
@Controller('customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) { }

  @Post()
  @ApiOperation({ summary: 'Créer un profil client (Customer)' })
  @ApiResponse({ status: 201, description: 'Le profil a été créé avec succès.' })
  @ApiResponse({ status: 409, description: 'Un profil existe déjà pour cet utilisateur.' })
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Récupérer la liste de tous les clients' })
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Récupérer un client par son ID (UUID)' })
  @ApiResponse({ status: 200, description: 'Client trouvé.' })
  @ApiResponse({ status: 404, description: 'Client introuvable.' })
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un profil client' })
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Supprimer un profil client' })
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}