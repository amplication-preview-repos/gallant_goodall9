import { Module } from "@nestjs/common";
import { LoanStatusModuleBase } from "./base/loanStatus.module.base";
import { LoanStatusService } from "./loanStatus.service";
import { LoanStatusController } from "./loanStatus.controller";
import { LoanStatusResolver } from "./loanStatus.resolver";

@Module({
  imports: [LoanStatusModuleBase],
  controllers: [LoanStatusController],
  providers: [LoanStatusService, LoanStatusResolver],
  exports: [LoanStatusService],
})
export class LoanStatusModule {}
