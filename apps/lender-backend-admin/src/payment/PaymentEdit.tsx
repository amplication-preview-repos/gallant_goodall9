import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { LoanTitle } from "../loan/LoanTitle";

export const PaymentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="loan.id" reference="Loan" label="loan">
          <SelectInput optionText={LoanTitle} />
        </ReferenceInput>
        <DateTimeInput label="paymentDate" source="paymentDate" />
      </SimpleForm>
    </Edit>
  );
};
