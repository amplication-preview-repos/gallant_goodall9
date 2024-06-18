import { LoanStatus as TLoanStatus } from "../api/loanStatus/LoanStatus";

export const LOANSTATUS_TITLE_FIELD = "statusName";

export const LoanStatusTitle = (record: TLoanStatus): string => {
  return record.statusName?.toString() || String(record.id);
};
