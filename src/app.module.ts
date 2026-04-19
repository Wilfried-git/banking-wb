import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { CustomersModule } from './customers/customers.module';
import { AccountsModule } from './accounts/accounts.module';
import { TransactionsModule } from './transactions/transactions.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';

@Module({
  imports: [PrismaModule, UsersModule, CustomersModule, AccountsModule, TransactionsModule, BeneficiariesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
