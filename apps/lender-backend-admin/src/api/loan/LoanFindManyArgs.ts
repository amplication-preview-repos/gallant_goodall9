import { LoanWhereInput } from "./LoanWhereInput";
import { LoanOrderByInput } from "./LoanOrderByInput";

export type LoanFindManyArgs = {
  where?: LoanWhereInput;
  orderBy?: Array<LoanOrderByInput>;
  skip?: number;
  take?: number;
};
