import { Delete, Get, Injectable, Post, Put } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ToDo } from './entities/todo.entity';
import { CrearToDo } from './dto/crearTodo';
import { ModificarToDo } from './dto/modificarTodo';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(ToDo) private todoRepository: Repository<ToDo>,
  ) {}

  async findAll(): Promise<ToDo[]> {
    return await this.todoRepository.find();
  }

  async findById(id_todo: number): Promise<ToDo[]> {
    return await this.todoRepository.find({ id_todo });
  }

  async findToDosByUserId(userId: number): Promise<ToDo[]> {
    return await this.todoRepository.find({ where: { user: userId } });
  }

  async create(todo: CrearToDo): Promise<ToDo> {
    let actividad = this.todoRepository.create(todo);
    return await this.todoRepository.save(actividad);
  }

  async update(todo: ModificarToDo): Promise<ToDo> {
    let modificado = await this.findById(todo.id_todo);

    modificado[0].actividad = todo.actividad;
    modificado[0].finalizada = todo.finalizada;
    return await this.todoRepository.save(modificado[0]);
  }

  async remove(id_todo: number) {
    await this.todoRepository.delete(id_todo);
  }
}
