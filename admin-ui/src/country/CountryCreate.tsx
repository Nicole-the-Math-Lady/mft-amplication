import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
  NumberInput,
  BooleanInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { StateTitle } from "../state/StateTitle";
import { UserTitle } from "../user/UserTitle";

export const CountryCreate = (props: CreateProps): React.ReactElement => {
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
        <NumberInput step={1} label="Created By" source="createdBy" />
        <TextInput label="Currency Code" source="currencyCode" />
        <BooleanInput label="Is Active" source="isActive" />
        <TextInput label="Name" source="name" />
        <TextInput label="Phone Calling Code" source="phoneCallingCode" />
        <ReferenceArrayInput
          source="states"
          reference="State"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={StateTitle} />
        </ReferenceArrayInput>
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
