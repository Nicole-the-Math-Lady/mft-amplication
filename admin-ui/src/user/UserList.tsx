import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CITY_TITLE_FIELD } from "../city/CityTitle";
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";
import { STATE_TITLE_FIELD } from "../state/StateTitle";

export const UserList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Users"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Affiliate" source="affiliate" />
        <TextField label="Avatar" source="avatar" />
        <ReferenceField label="City" source="city.id" reference="City">
          <TextField source={CITY_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField label="Country" source="country.id" reference="Country">
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
    </List>
  );
};
