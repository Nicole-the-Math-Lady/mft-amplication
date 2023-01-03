import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type CityWhereInput = {
  code?: StringNullableFilter;
  country?: CountryWhereUniqueInput;
  id?: StringFilter;
  latitude?: StringNullableFilter;
  name?: StringNullableFilter;
  state?: StateWhereUniqueInput;
  users?: UserListRelationFilter;
};
