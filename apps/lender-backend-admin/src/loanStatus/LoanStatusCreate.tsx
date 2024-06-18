import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const LoanStatusCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="description" multiline source="description" />
        <TextInput label="statusName" source="statusName" />
      </SimpleForm>
    </Create>
  );
};
