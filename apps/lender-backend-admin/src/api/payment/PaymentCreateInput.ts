import { LoanWhereUniqueInput } from "../loan/LoanWhereUniqueInput";

export type PaymentCreateInput = {
  amount?: number | null;
  loan?: LoanWhereUniqueInput | null;
  paymentDate?: Date | null;
};
