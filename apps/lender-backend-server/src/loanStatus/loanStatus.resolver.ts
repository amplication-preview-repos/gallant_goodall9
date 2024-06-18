import * as graphql from "@nestjs/graphql";
import { LoanStatusResolverBase } from "./base/loanStatus.resolver.base";
import { LoanStatus } from "./base/LoanStatus";
import { LoanStatusService } from "./loanStatus.service";

@graphql.Resolver(() => LoanStatus)
export class LoanStatusResolver extends LoanStatusResolverBase {
  constructor(protected readonly service: LoanStatusService) {
    super(service);
  }
}
