import { JsonValue } from "type-fest";
import { City } from "../city/City";
import { Country } from "../country/Country";
import { State } from "../state/State";

export type User = {
  affiliate: JsonValue;
  avatar: JsonValue;
  city?: City | null;
  country?: Country | null;
  createdAt: Date;
  currency: string | null;
  dateOfBirth: Date | null;
  email: string | null;
  firstName: string | null;
  howDidYouHear?:
    | "Google"
    | "Facebook"
    | "Instagram"
    | "Tiktok"
    | "Medium"
    | "Youtube"
    | "Referral"
    | "Email"
    | "Conference"
    | "Other"
    | null;
  id: number;
  language: string | null;
  lastName: string | null;
  phoneNumber: string | null;
  roles: JsonValue;
  state?: State | null;
  timezone: string | null;
  title: string | null;
  updatedAt: Date;
  username: string;
};
