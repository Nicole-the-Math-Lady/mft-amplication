import { SortOrder } from "../../util/SortOrder";

export type StateOrderByInput = {
  code?: SortOrder;
  countryId?: SortOrder;
  createdAt?: SortOrder;
  createdBy?: SortOrder;
  id?: SortOrder;
  isActive?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  updatedBy?: SortOrder;
};
