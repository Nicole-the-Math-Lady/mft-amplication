import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  BooleanField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { COUNTRY_TITLE_FIELD } from "./CountryTitle";
import { STATE_TITLE_FIELD } from "../state/StateTitle";
import { CITY_TITLE_FIELD } from "../city/CityTitle";

export const CountryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Code" source="code" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="Created By" source="createdBy" />
        <TextField label="Currency Code" source="currencyCode" />
        <TextField label="ID" source="id" />
        <BooleanField label="Is Active" source="isActive" />
        <TextField label="Name" source="name" />
        <TextField label="Phone Calling Code" source="phoneCallingCode" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Updated By" source="updatedBy" />
        <ReferenceManyField reference="City" target="CountryId" label="Cities">
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <TextField label="Location" source="latitude" />
            <TextField label="Name" source="name" />
            <ReferenceField label="State" source="state.id" reference="State">
              <TextField source={STATE_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="State" target="CountryId" label="States">
          <Datagrid rowClick="show">
            <TextField label="Code" source="code" />
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Created By" source="createdBy" />
            <TextField label="ID" source="id" />
            <BooleanField label="Is Active" source="isActive" />
            <TextField label="Name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Updated By" source="updatedBy" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="User" target="CountryId" label="Users">
          <Datagrid rowClick="show">
            <TextField label="Affiliate" source="affiliate" />
            <TextField label="Avatar" source="avatar" />
            <ReferenceField label="City" source="city.id" reference="City">
              <TextField source={CITY_TITLE_FIELD} />
            </ReferenceField>
            <ReferenceField
              label="Country"
              source="country.id"
              reference="Country"
            >
              <TextField source={COUNTRY_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="createdAt" label="Created At" />
            <TextField label="Currency" source="currency" />
            <TextField label="Date of Birth" source="dateOfBirth" />
            <TextField label="Email" source="email" />
            <TextField label="First Name" source="firstName" />
            <TextField label="How did you hear?" source="howDidYouHear" />
            <TextField label="ID" source="id" />
            <TextField label="Language" source="language" />
            <TextField label="Last Name" source="lastName" />
            <TextField label="Phone Number" source="phoneNumber" />
            <TextField label="Roles" source="roles" />
            <ReferenceField label="State" source="state.id" reference="State">
              <TextField source={STATE_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Timezone" source="timezone" />
            <TextField label="Title" source="title" />
            <DateField source="updatedAt" label="Updated At" />
            <TextField label="Username" source="username" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
