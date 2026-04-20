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
exports.TransactionsService = void 0;
const common_1 = require("@nestjs/common");
const client_1 = require("@prisma/client");
const prisma_service_1 = require("../prisma/prisma/prisma.service");
let TransactionsService = class TransactionsService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    generateRef() { return `TX-${Date.now()}`; }
    async deposit(dto) {
        return this.prisma.$transaction(async (tx) => {
            const account = await tx.account.update({
                where: { id: dto.accountId },
                data: { balance: { increment: dto.amount } },
            });
            return tx.transaction.create({
                data: {
                    sourceAccountId: dto.accountId,
                    destAccountId: dto.accountId,
                    amount: new client_1.Prisma.Decimal(dto.amount),
                    type: 'DEPOSIT',
                    status: 'COMPLETED',
                    reference: this.generateRef(),
                },
            });
        });
    }
    async withdraw(userId, dto) {
        const account = await this.prisma.account.findFirst({
            where: { id: dto.accountId, customer: { userId } },
        });
        if (!account)
            throw new common_1.ForbiddenException("Ce compte ne vous appartient pas.");
        if (Number(account.balance) < dto.amount)
            throw new common_1.BadRequestException("Solde insuffisant.");
        return this.prisma.$transaction(async (tx) => {
            await tx.account.update({
                where: { id: dto.accountId },
                data: { balance: { decrement: dto.amount } },
            });
            return tx.transaction.create({
                data: {
                    sourceAccountId: dto.accountId,
                    destAccountId: dto.accountId,
                    amount: new client_1.Prisma.Decimal(dto.amount),
                    type: 'WITHDRAWAL',
                    status: 'COMPLETED',
                    reference: this.generateRef(),
                },
            });
        });
    }
    async transfer(userId, dto) {
        const source = await this.prisma.account.findFirst({
            where: { id: dto.sourceAccountId, customer: { userId } },
        });
        if (!source)
            throw new common_1.ForbiddenException("Compte source invalide.");
        if (Number(source.balance) < dto.amount)
            throw new common_1.BadRequestException("Solde insuffisant.");
        return this.prisma.$transaction(async (tx) => {
            await tx.account.update({ where: { id: dto.sourceAccountId }, data: { balance: { decrement: dto.amount } } });
            await tx.account.update({ where: { id: dto.destAccountId }, data: { balance: { increment: dto.amount } } });
            return tx.transaction.create({
                data: {
                    sourceAccountId: dto.sourceAccountId,
                    destAccountId: dto.destAccountId,
                    amount: new client_1.Prisma.Decimal(dto.amount),
                    type: 'TRANSFER',
                    status: 'COMPLETED',
                    reference: this.generateRef(),
                },
            });
        });
    }
};
exports.TransactionsService = TransactionsService;
exports.TransactionsService = TransactionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TransactionsService);
//# sourceMappingURL=transactions.service.js.map