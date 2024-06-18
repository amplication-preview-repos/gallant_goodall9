import { Loan } from "../loan/Loan";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  loans?: Array<Loan>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
