import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { ObjectType, Field, ID, InputType } from "type-graphql";
import {Team} from "./Team"

@Entity()
@ObjectType()
export class Player {
  
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field()
  firstname: string;

  @Column()
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
