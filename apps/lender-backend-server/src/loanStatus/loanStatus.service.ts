import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoanStatusServiceBase } from "./base/loanStatus.service.base";

@Injectable()
export class LoanStatusService extends LoanStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
