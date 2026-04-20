import { Body, Controller, Get, Post, Req, UseGuards } from "@nestjs/common";
import { ApiBearerAuth, ApiOperation, ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from "src/auth/guards/jwt-auth.guard";
import { DepositDto, TransferDto, WithdrawalDto } from "./dto/create-transaction.dto";
import { TransactionsService } from "./transactions.service";

@ApiTags('Transactions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('transactions')
export class TransactionsController {
  constructor(private readonly transactionsService: TransactionsService) { }

  @Post('deposit')
  @ApiOperation({ summary: 'Déposer de l’argent sur un compte' })
  deposit(@Body() dto: DepositDto) {
    return this.transactionsService.deposit(dto);
  }

  @Post('withdraw')
  @ApiOperation({ summary: 'Retirer de l’argent d’un de mes comptes' })
  withdraw(@Req() req: any, @Body() dto: WithdrawalDto) {
    return this.transactionsService.withdraw(req.user.userId, dto);
  }

  @Post('transfer')
  @ApiOperation({ summary: 'Virement vers un autre compte' })
  transfer(@Req() req: any, @Body() dto: TransferDto) {
    return this.transactionsService.transfer(req.user.userId, dto);
  }

  @Get()
  @ApiOperation({ summary: 'Consulter mon historique de transactions' })
  findAll(@Req() req: any) {
    return this.transactionsService.findAll(req.user.userId);
  }
}