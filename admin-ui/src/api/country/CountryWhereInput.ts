import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { StateListRelationFilter } from "../state/StateListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CountryWhereInput = {
  cities?: CityListRelationFilter;
  code?: StringNullableFilter;
  createdBy?: IntNullableFilter;
  currencyCode?: StringNullableFilter;
  id?: StringFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  phoneCallingCode?: StringNullableFilter;
  states?: StateListRelationFilter;
  updatedBy?: IntNullableFilter;
  users?: UserListRelationFilter;
};
