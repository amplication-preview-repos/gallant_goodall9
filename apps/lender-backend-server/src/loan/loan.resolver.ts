import * as graphql from "@nestjs/graphql";
import { LoanResolverBase } from "./base/loan.resolver.base";
import { Loan } from "./base/Loan";
import { LoanService } from "./loan.service";

@graphql.Resolver(() => Loan)
export class LoanResolver extends LoanResolverBase {
  constructor(protected readonly service: LoanService) {
    super(service);
  }
}
