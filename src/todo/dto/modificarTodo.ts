import { InputType, Field, Int } from '@nestjs/graphql';
import { JoinColumn, ManyToOne } from 'typeorm';
import { User } from '../../users/entities/user.entity';

@InputType()
export class ModificarToDo {
    @Field(() => Int)
    id_todo!: number;
  
    @Field()

    actividad!: string;
  
    @Field((type) => Boolean, { nullable: true })
    finalizada: boolean;
  
    @Field(() => Int)
    @ManyToOne((type) => User, (user) => user.todos)
    user!: User;
  }