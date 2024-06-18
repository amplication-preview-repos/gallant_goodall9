import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LoanWhereInput = {
  amount?: FloatNullableFilter;
  dueDate?: DateTimeNullableFilter;
  id?: StringFilter;
  installmentAmount?: FloatNullableFilter;
  installmentFrequency?: "Option1";
  issuedDate?: DateTimeNullableFilter;
  payments?: PaymentListRelationFilter;
  status?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
