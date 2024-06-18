import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LoanStatusService } from "./loanStatus.service";
import { LoanStatusControllerBase } from "./base/loanStatus.controller.base";

@swagger.ApiTags("loanStatuses")
@common.Controller("loanStatuses")
export class LoanStatusController extends LoanStatusControllerBase {
  constructor(protected readonly service: LoanStatusService) {
    super(service);
  }
}
