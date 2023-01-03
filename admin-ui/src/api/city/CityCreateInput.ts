import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";
import { UserCreateNestedManyWithoutCitiesInput } from "./UserCreateNestedManyWithoutCitiesInput";

export type CityCreateInput = {
  code?: string | null;
  country?: CountryWhereUniqueInput | null;
  latitude?: string | null;
  name?: string | null;
  state?: StateWhereUniqueInput | null;
  users?: UserCreateNestedManyWithoutCitiesInput;
};
