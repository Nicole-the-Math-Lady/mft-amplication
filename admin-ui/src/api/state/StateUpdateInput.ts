import { CityUpdateManyWithoutStatesInput } from "./CityUpdateManyWithoutStatesInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { UserUpdateManyWithoutStatesInput } from "./UserUpdateManyWithoutStatesInput";

export type StateUpdateInput = {
  cities?: CityUpdateManyWithoutStatesInput;
  code?: string | null;
  country?: CountryWhereUniqueInput | null;
  createdBy?: number | null;
  isActive?: boolean | null;
  name?: string | null;
  updatedBy?: number | null;
  users?: UserUpdateManyWithoutStatesInput;
};
