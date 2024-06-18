import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type LoanStatusWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  statusName?: StringNullableFilter;
};
