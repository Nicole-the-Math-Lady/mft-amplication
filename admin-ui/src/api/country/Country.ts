import { City } from "../city/City";
import { State } from "../state/State";
import { User } from "../user/User";

export type Country = {
  cities?: Array<City>;
  code: string | null;
  createdAt: Date;
  createdBy: number | null;
  currencyCode: string | null;
  id: string;
  isActive: boolean | null;
  name: string | null;
  phoneCallingCode: string | null;
  states?: Array<State>;
  updatedAt: Date;
  updatedBy: number | null;
  users?: Array<User>;
};
