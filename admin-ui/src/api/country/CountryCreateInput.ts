import { CityCreateNestedManyWithoutCountriesInput } from "./CityCreateNestedManyWithoutCountriesInput";
import { StateCreateNestedManyWithoutCountriesInput } from "./StateCreateNestedManyWithoutCountriesInput";
import { UserCreateNestedManyWithoutCountriesInput } from "./UserCreateNestedManyWithoutCountriesInput";

export type CountryCreateInput = {
  cities?: CityCreateNestedManyWithoutCountriesInput;
  code?: string | null;
  createdBy?: number | null;
  currencyCode?: string | null;
  isActive?: boolean | null;
  name?: string | null;
  phoneCallingCode?: string | null;
  states?: StateCreateNestedManyWithoutCountriesInput;
  updatedBy?: number | null;
  users?: UserCreateNestedManyWithoutCountriesInput;
};
