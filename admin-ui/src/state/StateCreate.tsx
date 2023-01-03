import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { CountryTitle } from "../country/CountryTitle";
import { UserTitle } from "../user/UserTitle";

export const StateCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="cities"
          reference="City"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={CityTitle} />
        </ReferenceArrayInput>
        <TextInput label="Code" source="code" />
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="Created By" source="createdBy" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <NumberInput step={1} label="Updated By" source="updatedBy" />
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
