import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [PrismaModule, AuthModule, CustomersModule, AccountsModule, TransactionsModule, BeneficiariesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
