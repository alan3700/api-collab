import { Player } from "./entities/Player";
import { Team } from "./entities/Team";
import { User } from "./entities/User";
import { DataSource } from "typeorm";

const datasource = new DataSource({
  type: "sqlite",
  database: "./nba.db",
  synchronize: true,
  entities: [User,Team,Player],
  logging: ["query", "error"],
});

export default datasource;
