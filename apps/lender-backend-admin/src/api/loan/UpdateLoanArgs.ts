import { LoanWhereUniqueInput } from "./LoanWhereUniqueInput";
import { LoanUpdateInput } from "./LoanUpdateInput";

export type UpdateLoanArgs = {
  where: LoanWhereUniqueInput;
  data: LoanUpdateInput;
};
