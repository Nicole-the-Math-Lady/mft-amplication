import { CityUpdateManyWithoutCountriesInput } from "./CityUpdateManyWithoutCountriesInput";
import { StateUpdateManyWithoutCountriesInput } from "./StateUpdateManyWithoutCountriesInput";
import { UserUpdateManyWithoutCountriesInput } from "./UserUpdateManyWithoutCountriesInput";

export type CountryUpdateInput = {
  cities?: CityUpdateManyWithoutCountriesInput;
  code?: string | null;
  createdBy?: number | null;
  currencyCode?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  phoneCallingCode?: string | null;
  states?: StateUpdateManyWithoutCountriesInput;
  updatedBy?: number | null;
  users?: UserUpdateManyWithoutCountriesInput;
};
