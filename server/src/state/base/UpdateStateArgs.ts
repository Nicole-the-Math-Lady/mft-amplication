/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { StateWhereUniqueInput } from "./StateWhereUniqueInput";
import { StateUpdateInput } from "./StateUpdateInput";

@ArgsType()
class UpdateStateArgs {
  @Field(() => StateWhereUniqueInput, { nullable: false })
  where!: StateWhereUniqueInput;
  @Field(() => StateUpdateInput, { nullable: false })
  data!: StateUpdateInput;
}

export { UpdateStateArgs };
