import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";
import { UserUpdateManyWithoutCitiesInput } from "./UserUpdateManyWithoutCitiesInput";

export type CityUpdateInput = {
  code?: string | null;
  country?: CountryWhereUniqueInput | null;
  latitude?: string | null;
  name?: string | null;
  state?: StateWhereUniqueInput | null;
  users?: UserUpdateManyWithoutCitiesInput;
};
