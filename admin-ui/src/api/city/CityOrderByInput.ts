import { SortOrder } from "../../util/SortOrder";

export type CityOrderByInput = {
  code?: SortOrder;
  countryId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  latitude?: SortOrder;
  name?: SortOrder;
  stateId?: SortOrder;
  updatedAt?: SortOrder;
};
