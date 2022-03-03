import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class ToDo {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id_todo!: number;

  @Field()
  @Column()
  actividad!: string;

  @Field((type) => Boolean)
  @Column({ default: false })
  finalizada?: boolean;

  @Field(() => Int)
  @ManyToOne((type) => User, (user) => user.todos)
  @JoinColumn()
  user!: User;
}
