import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import {Player} from "./Player"

@Entity()
@ObjectType()
export class Team {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field()
  name: string;

  @OneToMany(() => Player, player => player.team)
  @Field(() => [Player], { nullable: true })
  players?: Player[];

}

@InputType()
export class TeamInput {
  @Field()
  name: string;
}
