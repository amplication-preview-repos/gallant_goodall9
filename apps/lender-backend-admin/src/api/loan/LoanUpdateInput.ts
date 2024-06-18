import { PaymentUpdateManyWithoutLoansInput } from "./PaymentUpdateManyWithoutLoansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanUpdateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  installmentAmount?: number | null;
  installmentFrequency?: "Option1" | null;
  issuedDate?: Date | null;
  payments?: PaymentUpdateManyWithoutLoansInput;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
