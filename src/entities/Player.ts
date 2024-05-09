import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import {Team} from "./Team"

@Entity()
@ObjectType()
export class Player {
  remove(): any {
    throw new Error("Method not implemented.");
  }
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column({ unique: true })
  @Field()
  firstname: string;

  @Column({ unique: true })
  @Field()
  lastname: string;

  @Column()
  @Field()
  number: number;

  @ManyToOne(() => Team, team => team.players)
  @Field(() => Team)
  team: Team;

}

@InputType()
export class PlayerInput {
    
  @Field()
  firstname: string;

  @Field()
  lastname: string;

  @Field()
  number: number;

}
