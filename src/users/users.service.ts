import { Injectable, Get, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  @Post('user/registro')
  async create(user: CreateUserInput): Promise<User> {
    let usuario = this.userRepository.create(user);
    return this.userRepository.save(usuario);
  }

  @Get('usuario/:id')
  findOne(username: string): Promise<User[]>  {
    return this.userRepository.find( {username});
  }
}
