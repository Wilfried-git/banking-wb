import { Injectable, NotFoundException, ConflictException } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class CustomersService {
  constructor(private readonly prisma: PrismaService) { }

  async create(createCustomerDto: CreateCustomerDto) {
    try {
      return await this.prisma.customer.create({
        data: createCustomerDto,
      });
    } catch (error: any) {
      // P2002 est le code Prisma pour une violation de contrainte unique (ici userId)
      if (error.code === 'P2002') {
        throw new ConflictException('Un profil client existe déjà pour cet utilisateur.');
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.customer.findMany({
      // Optionnel : on peut inclure les infos de l'utilisateur (email, status)
      include: { user: { select: { email: true, status: true } } },
    });
  }

  async findOne(id: string) { // <-- Changé de number à string
    const customer = await this.prisma.customer.findUnique({
      where: { id },
      include: { accounts: true }, // On inclut les comptes liés par commodité
    });

    if (!customer) {
      throw new NotFoundException(`Le client avec l'ID ${id} est introuvable.`);
    }
    return customer;
  }

  async update(id: string, updateCustomerDto: UpdateCustomerDto) {
    // On vérifie d'abord si le client existe
    await this.findOne(id);

    return this.prisma.customer.update({
      where: { id },
      data: updateCustomerDto,
    });
  }

  async remove(id: string) {
    // On vérifie d'abord si le client existe
    await this.findOne(id);

    return this.prisma.customer.delete({
      where: { id },
    });
  }
}