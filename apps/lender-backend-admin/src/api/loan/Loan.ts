import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Loan = {
  amount: number | null;
  createdAt: Date;
  dueDate: Date | null;
  id: string;
  installmentAmount: number | null;
  installmentFrequency?: "Option1" | null;
  issuedDate: Date | null;
  payments?: Array<Payment>;
  status: string | null;
  updatedAt: Date;
  user?: User | null;
};
