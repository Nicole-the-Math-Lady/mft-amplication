/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsJSON,
  IsOptional,
  ValidateNested,
  IsString,
  IsDate,
  IsEnum,
} from "class-validator";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { CityWhereUniqueInput } from "../../city/base/CityWhereUniqueInput";
import { Type } from "class-transformer";
import { CountryWhereUniqueInput } from "../../country/base/CountryWhereUniqueInput";
import { EnumUserHowDidYouHear } from "./EnumUserHowDidYouHear";
import { StateWhereUniqueInput } from "../../state/base/StateWhereUniqueInput";
@InputType()
class UserCreateInput {
  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  affiliate?: InputJsonValue;

  @ApiProperty({
    required: false,
  })
  @IsJSON()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  avatar?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => CityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CityWhereUniqueInput)
  @IsOptional()
  @Field(() => CityWhereUniqueInput, {
    nullable: true,
  })
  city?: CityWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => CountryWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CountryWhereUniqueInput)
  @IsOptional()
  @Field(() => CountryWhereUniqueInput, {
    nullable: true,
  })
  country?: CountryWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currency?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateOfBirth?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    enum: EnumUserHowDidYouHear,
  })
  @IsEnum(EnumUserHowDidYouHear)
  @IsOptional()
  @Field(() => EnumUserHowDidYouHear, {
    nullable: true,
  })
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

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  language?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  password!: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneNumber?: string | null;

  @ApiProperty({
    required: true,
  })
  @IsJSON()
  @Field(() => GraphQLJSON)
  roles!: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => StateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StateWhereUniqueInput)
  @IsOptional()
  @Field(() => StateWhereUniqueInput, {
    nullable: true,
  })
  state?: StateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  timezone?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  title?: string | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  username!: string;
}
export { UserCreateInput };
