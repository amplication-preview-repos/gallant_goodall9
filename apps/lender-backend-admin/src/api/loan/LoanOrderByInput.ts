import { SortOrder } from "../../util/SortOrder";

export type LoanOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  dueDate?: SortOrder;
  id?: SortOrder;
  installmentAmount?: SortOrder;
  installmentFrequency?: SortOrder;
  issuedDate?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
