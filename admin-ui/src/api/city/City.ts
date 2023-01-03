import { Country } from "../country/Country";
import { State } from "../state/State";
import { User } from "../user/User";

export type City = {
  code: string | null;
  country?: Country | null;
  createdAt: Date;
  id: string;
  latitude: string | null;
  name: string | null;
  state?: State | null;
  updatedAt: Date;
  users?: Array<User>;
};
