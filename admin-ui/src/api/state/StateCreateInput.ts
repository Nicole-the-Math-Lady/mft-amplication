import { CityCreateNestedManyWithoutStatesInput } from "./CityCreateNestedManyWithoutStatesInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { UserCreateNestedManyWithoutStatesInput } from "./UserCreateNestedManyWithoutStatesInput";

export type StateCreateInput = {
  cities?: CityCreateNestedManyWithoutStatesInput;
  code?: string | null;
  country?: CountryWhereUniqueInput | null;
  createdBy?: number | null;
  isActive?: boolean | null;
  name?: string | null;
  updatedBy?: number | null;
  users?: UserCreateNestedManyWithoutStatesInput;
};
