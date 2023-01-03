import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { StateResolverBase } from "./base/state.resolver.base";
import { State } from "./base/State";
import { StateService } from "./state.service";

@graphql.Resolver(() => State)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class StateResolver extends StateResolverBase {
  constructor(
    protected readonly service: StateService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
