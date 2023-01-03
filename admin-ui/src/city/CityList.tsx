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
import { COUNTRY_TITLE_FIELD } from "../country/CountryTitle";
import { STATE_TITLE_FIELD } from "../state/StateTitle";

export const CityList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Cities"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="Code" source="code" />
        <ReferenceField label="Country" source="country.id" reference="Country">
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
    </List>
  );
};
