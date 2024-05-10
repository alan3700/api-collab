import { Resolver, Mutation, Arg, Query } from "type-graphql";
import { Team, TeamInput } from "../entities/Team";
import datasource from "../utils";


@Resolver()
export class TeamsResolver {
  @Mutation(() => Team)
  async createTeam(
    @Arg("data", () => TeamInput) data: TeamInput
  ): Promise<Team> {
    return await datasource.getRepository(Team).save(data);
  }

  @Query(() => [Team])
  async teams(): Promise<Team[]> {
    return await datasource.getRepository(Team).find({ relations: ['players']});
  }
}
