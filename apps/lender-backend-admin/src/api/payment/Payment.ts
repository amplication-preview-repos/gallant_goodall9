import { Loan } from "../loan/Loan";

export type Payment = {
  amount: number | null;
  createdAt: Date;
  id: string;
  loan?: Loan | null;
  paymentDate: Date | null;
  updatedAt: Date;
};
