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
    return await this.userRepository.find();
  }

  async create(user: CreateUserInput): Promise<User> {
    let usuario = this.userRepository.create(user);
    return await this.userRepository.save(usuario);
  }

  async findOne(username: string): Promise<User[]>  {
    return await this.userRepository.find( {username});
  }
}
