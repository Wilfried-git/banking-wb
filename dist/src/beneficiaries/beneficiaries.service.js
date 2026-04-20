"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BeneficiariesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let BeneficiariesService = class BeneficiariesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, dto) {
        const owner = await this.prisma.customer.findUnique({
            where: { userId }
        });
        if (!owner) {
            throw new common_1.ForbiddenException("Profil client inexistant. Créez votre profil d'abord.");
        }
        const finalName = dto.name || `${owner.firstName} ${owner.lastName}`;
        return this.prisma.beneficiary.create({
            data: {
                name: finalName,
                accountNumber: dto.accountNumber,
                bankName: dto.bankName || 'Unknown Bank',
                customerId: owner.id,
            },
        });
    }
    findAll(userId) {
        return this.prisma.beneficiary.findMany({
            where: {
                customer: { userId }
            }
        });
    }
    async findOne(userId, beneficiaryId) {
        const beneficiary = await this.prisma.beneficiary.findFirst({
            where: {
                id: beneficiaryId,
                customer: { userId }
            }
        });
        if (!beneficiary) {
            throw new common_1.NotFoundException("Bénéficiaire introuvable dans votre liste.");
        }
        return beneficiary;
    }
    async remove(userId, beneficiaryId) {
        const beneficiary = await this.findOne(userId, beneficiaryId);
        return this.prisma.beneficiary.delete({
            where: { id: beneficiary.id }
        });
    }
};
exports.BeneficiariesService = BeneficiariesService;
exports.BeneficiariesService = BeneficiariesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BeneficiariesService);
//# sourceMappingURL=beneficiaries.service.js.map