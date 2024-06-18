import { SortOrder } from "../../util/SortOrder";

export type PaymentOrderByInput = {
  amount?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  loanId?: SortOrder;
  paymentDate?: SortOrder;
  updatedAt?: SortOrder;
};
