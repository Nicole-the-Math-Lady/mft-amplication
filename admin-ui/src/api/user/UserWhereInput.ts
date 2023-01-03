import { JsonFilter } from "../../util/JsonFilter";
import { CityWhereUniqueInput } from "../city/CityWhereUniqueInput";
import { CountryWhereUniqueInput } from "../country/CountryWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { IntFilter } from "../../util/IntFilter";
import { StateWhereUniqueInput } from "../state/StateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  affiliate?: JsonFilter;
  avatar?: JsonFilter;
  city?: CityWhereUniqueInput;
  country?: CountryWhereUniqueInput;
  currency?: StringNullableFilter;
  dateOfBirth?: DateTimeNullableFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
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
    | "Other";
  id?: IntFilter;
  language?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phoneNumber?: StringNullableFilter;
  state?: StateWhereUniqueInput;
  timezone?: StringNullableFilter;
  title?: StringNullableFilter;
  username?: StringFilter;
};
