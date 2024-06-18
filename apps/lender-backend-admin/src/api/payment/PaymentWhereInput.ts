import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { LoanWhereUniqueInput } from "../loan/LoanWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type PaymentWhereInput = {
  amount?: FloatNullableFilter;
  id?: StringFilter;
  loan?: LoanWhereUniqueInput;
  paymentDate?: DateTimeNullableFilter;
};
