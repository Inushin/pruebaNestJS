import { Controller } from '@nestjs/common';
import { Args, Query, Resolver, Mutation } from '@nestjs/graphql';
import { CrearToDo } from './dto/crearTodo';
import { ModificarToDo } from './dto/modificarTodo';
import { ToDo } from './entities/todo.entity';
import { TodoService } from './todo.service';

//@Resolver(of => ToDo)
@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  //Muestra todas las ToDo
  @Query(() => [ToDo], { name: 'todos' })
  //@UseGuards(JwtAuthGuard)
  findAll(): Promise<ToDo[]> {
    return this.todoService.findAll();
  }

  //Muestra ToDo por ID del todo --> Se busca que muestre las que tienen mismo ID usuario
  @Query(() => [ToDo], { name: 'todosById' })
  //@UseGuards(JwtAuthGuard)
  findById(@Args('id') id_todo:number): Promise<ToDo[]> {
    return this.todoService.findById(id_todo);
  }

  //Crea nuevo ToDo
  @Mutation(() => ToDo, { name: "CrearToDo" })
    create(@Args('nuevoToDo') todo: CrearToDo):Promise<ToDo> {
        return this.todoService.create(todo);
    }

  //Editar ToDo
  @Mutation(() => ToDo, { name: "ModificarToDo" })
  update(@Args('modificarToDo') todo: ModificarToDo):Promise<ToDo> {
      return this.todoService.update(todo);
  }

  //Borrar ToDo

}