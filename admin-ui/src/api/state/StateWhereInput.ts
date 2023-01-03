import { CityListRelationFilter } from "../city/CityListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { IntNullableFilter } from "../../util/IntNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type StateWhereInput = {
  cities?: CityListRelationFilter;
  code?: StringNullableFilter;
  country?: CountryWhereUniqueInput;
  createdBy?: IntNullableFilter;
  id?: IntFilter;
  isActive?: BooleanNullableFilter;
  name?: StringNullableFilter;
  updatedBy?: IntNullableFilter;
  users?: UserListRelationFilter;
};
