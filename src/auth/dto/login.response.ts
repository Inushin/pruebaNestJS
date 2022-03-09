import { Field, ObjectType, Int } from '@nestjs/graphql';
import { User } from '../../users/entities/user.entity';

@ObjectType()
export class LoginResponse {
  //@Field(() => Int, { nullable: true })
  // id?: number;

  @Field()
  access_token: string;

  @Field()
  user: User;
}
