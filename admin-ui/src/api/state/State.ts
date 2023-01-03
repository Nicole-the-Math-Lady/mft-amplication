import { City } from "../city/City";
import { Country } from "../country/Country";
import { User } from "../user/User";

export type State = {
  cities?: Array<City>;
  code: string | null;
  country?: Country | null;
  createdAt: Date;
  createdBy: number | null;
  id: number;
  isActive: boolean | null;
  name: string | null;
  updatedAt: Date;
  updatedBy: number | null;
  users?: Array<User>;
};
