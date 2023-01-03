/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import { Prisma, Country, City, State, User } from "@prisma/client";

export class CountryServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CountryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryFindManyArgs>
  ): Promise<number> {
    return this.prisma.country.count(args);
  }

  async findMany<T extends Prisma.CountryFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryFindManyArgs>
  ): Promise<Country[]> {
    return this.prisma.country.findMany(args);
  }
  async findOne<T extends Prisma.CountryFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryFindUniqueArgs>
  ): Promise<Country | null> {
    return this.prisma.country.findUnique(args);
  }
  async create<T extends Prisma.CountryCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryCreateArgs>
  ): Promise<Country> {
    return this.prisma.country.create<T>(args);
  }
  async update<T extends Prisma.CountryUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryUpdateArgs>
  ): Promise<Country> {
    return this.prisma.country.update<T>(args);
  }
  async delete<T extends Prisma.CountryDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CountryDeleteArgs>
  ): Promise<Country> {
    return this.prisma.country.delete(args);
  }

  async findCities(
    parentId: string,
    args: Prisma.CityFindManyArgs
  ): Promise<City[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .cities(args);
  }

  async findStates(
    parentId: string,
    args: Prisma.StateFindManyArgs
  ): Promise<State[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .states(args);
  }

  async findUsers(
    parentId: string,
    args: Prisma.UserFindManyArgs
  ): Promise<User[]> {
    return this.prisma.country
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .users(args);
  }
}
