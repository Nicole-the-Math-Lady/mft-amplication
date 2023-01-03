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
import { CityUpdateManyWithoutStatesInput } from "./CityUpdateManyWithoutStatesInput";
import {
  ValidateNested,
  IsOptional,
  IsString,
  IsInt,
  IsBoolean,
} from "class-validator";
import { Type } from "class-transformer";
import { CountryWhereUniqueInput } from "../../country/base/CountryWhereUniqueInput";
import { UserUpdateManyWithoutStatesInput } from "./UserUpdateManyWithoutStatesInput";
@InputType()
class StateUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CityUpdateManyWithoutStatesInput,
  })
  @ValidateNested()
  @Type(() => CityUpdateManyWithoutStatesInput)
  @IsOptional()
  @Field(() => CityUpdateManyWithoutStatesInput, {
    nullable: true,
  })
  cities?: CityUpdateManyWithoutStatesInput;

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
    type: () => UserUpdateManyWithoutStatesInput,
  })
  @ValidateNested()
  @Type(() => UserUpdateManyWithoutStatesInput)
  @IsOptional()
  @Field(() => UserUpdateManyWithoutStatesInput, {
    nullable: true,
  })
  users?: UserUpdateManyWithoutStatesInput;
}
export { StateUpdateInput };