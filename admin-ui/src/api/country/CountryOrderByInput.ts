import { SortOrder } from "../../util/SortOrder";

export type CountryOrderByInput = {
  code?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  currencyCode?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  phoneCallingCode?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
