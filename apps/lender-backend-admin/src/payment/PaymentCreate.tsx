import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LoanTitle } from "../loan/LoanTitle";

export const PaymentCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="loan.id" reference="Loan" label="loan">
          <SelectInput optionText={LoanTitle} />
        </ReferenceInput>
        <DateTimeInput label="paymentDate" source="paymentDate" />
      </SimpleForm>
    </Create>
  );
};
