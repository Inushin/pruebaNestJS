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

  @Get()
  async findAll(): Promise<ToDo[]> {
    return this.todoRepository.find();
  }

  @Get('todosusuario/:id')
  async findById(id_todo: number): Promise<ToDo[]> {
    return this.todoRepository.find({ id_todo });
  }

  @Get('todosidusuario/:userId')
  async findToDosByUserId(user: number): Promise<ToDo[]> {
    return this.todoRepository.find(ToDo[user]);
  }

  @Post('create')
  async create(todo: CrearToDo): Promise<ToDo> {
    let actividad = this.todoRepository.create(todo);
    return this.todoRepository.save(actividad);
  }

  @Put('editar/:id')
  async update(todo: ModificarToDo): Promise<ToDo> {
    let modificado = await this.findById(todo.id_todo);

    modificado[0].actividad = todo.actividad;
    modificado[0].finalizada = todo.finalizada;
    return this.todoRepository.save(modificado[0]);
  }

  @Delete('eliminar/:id')
  async remove(id_todo: number) {
      await this.todoRepository.delete(id_todo);
  }

}
