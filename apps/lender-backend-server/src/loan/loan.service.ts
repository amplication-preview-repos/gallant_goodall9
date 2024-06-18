import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LoanServiceBase } from "./base/loan.service.base";

@Injectable()
export class LoanService extends LoanServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
