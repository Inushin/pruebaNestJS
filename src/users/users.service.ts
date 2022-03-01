import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {

  private readonly users = [
    {
      id: 1,
      username: 'Aitor',
      password: '123'
    },
    {
      id: 2,
      username: 'Pepe',
      password: '123'
    },
    {
      id: 3,
      username: 'Paco',
      password: '123'
    },
  ]

  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length + 1,
    }
    return 'This action adds a new user';
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username);
  }
}
