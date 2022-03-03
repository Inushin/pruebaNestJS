import { InputType, Field, Int } from '@nestjs/graphql';


@InputType()
export class EliminarToDo {
  @Field(() => Int)
  id_todo!: number;
}
