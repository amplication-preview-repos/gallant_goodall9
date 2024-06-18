import { PaymentCreateNestedManyWithoutLoansInput } from "./PaymentCreateNestedManyWithoutLoansInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanCreateInput = {
  amount?: number | null;
  dueDate?: Date | null;
  installmentAmount?: number | null;
  installmentFrequency?: "Option1" | null;
  issuedDate?: Date | null;
  payments?: PaymentCreateNestedManyWithoutLoansInput;
  status?: string | null;
  user?: UserWhereUniqueInput | null;
};
