import { LoanStatusWhereInput } from "./LoanStatusWhereInput";
import { LoanStatusOrderByInput } from "./LoanStatusOrderByInput";

export type LoanStatusFindManyArgs = {
  where?: LoanStatusWhereInput;
  orderBy?: Array<LoanStatusOrderByInput>;
  skip?: number;
  take?: number;
};
