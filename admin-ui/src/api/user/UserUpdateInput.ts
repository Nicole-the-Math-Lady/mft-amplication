import { InputJsonValue } from "../../types";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";

export type UserUpdateInput = {
  affiliate?: InputJsonValue;
  avatar?: InputJsonValue;
  city?: CityWhereUniqueInput | null;
  country?: CountryWhereUniqueInput | null;
  currency?: string | null;
  dateOfBirth?: Date | null;
  email?: string | null;
  firstName?: string | null;
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
  language?: string | null;
  lastName?: string | null;
  password?: string;
  phoneNumber?: string | null;
  roles?: InputJsonValue;
  state?: StateWhereUniqueInput | null;
  timezone?: string | null;
  title?: string | null;
  username?: string;
};
