import { Loan as TLoan } from "../api/loan/Loan";

export const LOAN_TITLE_FIELD = "status";

export const LoanTitle = (record: TLoan): string => {
  return record.status?.toString() || String(record.id);
};
