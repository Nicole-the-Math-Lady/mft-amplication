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
import { CityUpdateManyWithoutCountriesInput } from "./CityUpdateManyWithoutCountriesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { StateUpdateManyWithoutCountriesInput } from "./StateUpdateManyWithoutCountriesInput";
import { UserUpdateManyWithoutCountriesInput } from "./UserUpdateManyWithoutCountriesInput";
@InputType()
class CountryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CityUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => CityUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => CityUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  cities?: CityUpdateManyWithoutCountriesInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  code?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  createdBy?: number | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  currencyCode?: string | null;

  @ApiProperty({
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  @IsOptional()
  @Field(() => Boolean, {
    nullable: true,
  })
  isActive?: boolean | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  phoneCallingCode?: string | null;

  @ApiProperty({
    required: false,
    type: () => StateUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => StateUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => StateUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  states?: StateUpdateManyWithoutCountriesInput;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  updatedBy?: number | null;

  @ApiProperty({
    required: false,
    type: () => UserUpdateManyWithoutCountriesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutCountriesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutCountriesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutCountriesInput;
}
export { CountryUpdateInput };
