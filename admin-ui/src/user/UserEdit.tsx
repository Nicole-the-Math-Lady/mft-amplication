import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  PasswordInput,
  SelectArrayInput,
} from "react-admin";

import { CityTitle } from "../city/CityTitle";
import { CountryTitle } from "../country/CountryTitle";
import { StateTitle } from "../state/StateTitle";
import { ROLES_OPTIONS } from "../user/RolesOptions";

export const UserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <div />
        <div />
        <ReferenceInput source="city.id" reference="City" label="City">
          <SelectInput optionText={CityTitle} />
        </ReferenceInput>
        <ReferenceInput source="country.id" reference="Country" label="Country">
          <SelectInput optionText={CountryTitle} />
        </ReferenceInput>
        <TextInput label="Currency" source="currency" />
        <DateTimeInput label="Date of Birth" source="dateOfBirth" />
        <TextInput label="Email" source="email" type="email" />
        <TextInput label="First Name" source="firstName" />
        <SelectInput
          source="howDidYouHear"
          label="How did you hear?"
          choices={[
            { label: "Google", value: "Google" },
            { label: "Facebook", value: "Facebook" },
            { label: "Instagram", value: "Instagram" },
            { label: "Tiktok", value: "Tiktok" },
            { label: "Medium", value: "Medium" },
            { label: "Youtube", value: "Youtube" },
            { label: "Referral", value: "Referral" },
            { label: "Email", value: "Email" },
            { label: "Conference", value: "Conference" },
            { label: "Other", value: "Other" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Language" source="language" />
        <TextInput label="Last Name" source="lastName" />
        <PasswordInput label="Password" source="password" />
        <TextInput label="Phone Number" source="phoneNumber" />
        <SelectArrayInput
          source="roles"
          choices={ROLES_OPTIONS}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput source="state.id" reference="State" label="State">
          <SelectInput optionText={StateTitle} />
        </ReferenceInput>
        <TextInput label="Timezone" source="timezone" />
        <TextInput label="Title" source="title" />
        <TextInput label="Username" source="username" />
      </SimpleForm>
    </Edit>
  );
};
