import { SortOrder } from "../../util/SortOrder";

export type LoanStatusOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  statusName?: SortOrder;
  updatedAt?: SortOrder;
};
