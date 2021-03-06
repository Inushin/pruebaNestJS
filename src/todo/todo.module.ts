import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ToDo } from './entities/todo.entity';

@Module({
  imports:[TypeOrmModule.forFeature([ToDo])],
  providers: [TodoService, TodoController],
  controllers: [TodoController]
})
export class TodoModule {}
