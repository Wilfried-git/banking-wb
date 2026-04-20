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
exports.AccountsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let AccountsService = class AccountsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateAccountNumber() {
        const prefix = 'BNK';
        const timestamp = Date.now().toString().slice(-8);
        const random = Math.floor(10 + Math.random() * 90);
        return `${prefix}-${timestamp}-${random}`;
    }
    async create(userId, dto) {
        const customer = await this.prisma.customer.findUnique({
            where: { userId }
        });
        if (!customer) {
            throw new common_1.ForbiddenException("Vous devez d'abord créer un profil client.");
        }
        return this.prisma.account.create({
            data: {
                type: dto.type,
                currency: dto.currency || 'EUR',
                balance: 0,
                accountNumber: this.generateAccountNumber(),
                customerId: customer.id,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.account.findMany({
            where: {
                customer: { userId }
            }
        });
    }
    async findOne(userId, accountId) {
        const account = await this.prisma.account.findFirst({
            where: {
                id: accountId,
                customer: { userId }
            }
        });
        if (!account) {
            throw new common_1.NotFoundException("Compte introuvable ou vous n'y avez pas accès.");
        }
        return account;
    }
    async remove(userId, accountId) {
        const account = await this.findOne(userId, accountId);
        if (Number(account.balance) !== 0) {
            throw new common_1.ConflictException("Impossible de supprimer un compte avec un solde positif.");
        }
        return this.prisma.account.delete({
            where: { id: accountId }
        });
    }
};
exports.AccountsService = AccountsService;
exports.AccountsService = AccountsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AccountsService);
//# sourceMappingURL=accounts.service.js.map