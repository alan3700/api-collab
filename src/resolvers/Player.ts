import { Resolver, Mutation, Arg, Query, ID, Authorized } from "type-graphql";
import { Player, PlayerInput } from "../entities/Player";
import datasource from "../utils";
import { Team } from "../entities/Team";


@Resolver()
export class PlayerResolver {
  @Authorized()
  @Mutation(() => Player)
  async createPlayer(
    @Arg("data", () => PlayerInput) data: PlayerInput,
    @Arg("TeamId", () => ID) id: number,
  ): Promise<Player> {
    const team = await datasource
    .getRepository(Team)
    .findOne({ where: {id}, relations: { players: true } });
    const player = {...data,team}
    return await datasource.getRepository(Player).save(player);
  }

  @Query(() => [Player])
  async players(): Promise<Player[]> {
    return await datasource.getRepository(Player).find({ relations: ['team']});
  }

  @Mutation(() => Player, { nullable: true })
  async deletePlayer(
    @Arg("id", () => ID) id: number,
  ): Promise<Player> {
    const player = await datasource
      .getRepository(Player)
      .findOne({ where: { id }, relations: { team: true } });
    if (player === null) {
      throw new Error("Il n'y a pas de Joueur pour cette recherche");
    }
    return await datasource.getRepository(Player).remove(player);
  }
}
function Ctx(): (target: PlayerResolver, propertyKey: "createPlayer", parameterIndex: 2) => void {
  throw new Error("Function not implemented.");
}

