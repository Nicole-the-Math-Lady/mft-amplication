import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { CountryTitle } from "../country/CountryTitle";
import { StateTitle } from "../state/StateTitle";
import { UserTitle } from "../user/UserTitle";

export const CityCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Code" source="code" />
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="Location" source="latitude" />
        <TextInput label="Name" source="name" />
        <ReferenceInput source="state.id" reference="State" label="State">
          <SelectInput optionText={StateTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="users"
          reference="User"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={UserTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
