import { LoanWhereUniqueInput } from "../loan/LoanWhereUniqueInput";

export type PaymentUpdateInput = {
  amount?: number | null;
  loan?: LoanWhereUniqueInput | null;
  paymentDate?: Date | null;
};
