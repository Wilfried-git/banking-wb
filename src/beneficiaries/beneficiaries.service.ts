import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
import { PrismaService } from 'src/prisma/prisma/prisma.service';

@Injectable()
export class BeneficiariesService {
  constructor(private prisma: PrismaService) { }

  async create(userId: string, dto: CreateBeneficiaryDto) {
    // 1. Récupérer le Customer propriétaire
    const owner = await this.prisma.customer.findUnique({
      where: { userId }
    });

    if (!owner) {
      throw new ForbiddenException("Profil client inexistant. Créez votre profil d'abord.");
    }

    // 2. Logique de génération de nom si absent
    const finalName = dto.name || `${owner.firstName} ${owner.lastName}`;

    return this.prisma.beneficiary.create({
      data: {
        name: finalName,
        accountNumber: dto.accountNumber,
        bankName: dto.bankName || 'Unknown Bank',
        customerId: owner.id, // Sécurité : lié au client du token
      },
    });
  }

  // Lister uniquement MES bénéficiaires
  findAll(userId: string) {
    return this.prisma.beneficiary.findMany({
      where: {
        customer: { userId }
      }
    });
  }

  // Trouver UN de MES bénéficiaires
  async findOne(userId: string, beneficiaryId: string) {
    const beneficiary = await this.prisma.beneficiary.findFirst({
      where: {
        id: beneficiaryId,
        customer: { userId }
      }
    });

    if (!beneficiary) {
      throw new NotFoundException("Bénéficiaire introuvable dans votre liste.");
    }
    return beneficiary;
  }

  // Supprimer UN de MES bénéficiaires
  async remove(userId: string, beneficiaryId: string) {
    // On vérifie d'abord l'appartenance via findOne
    const beneficiary = await this.findOne(userId, beneficiaryId);

    return this.prisma.beneficiary.delete({
      where: { id: beneficiary.id }
    });
  }
}