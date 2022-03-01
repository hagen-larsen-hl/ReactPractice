import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { Skip } from 'server/decorators/skip.decorator';
import { AuthGuard } from 'server/providers/guards/auth.guard';
import { TodosService } from 'server/providers/services/todos.service';
import { Todo } from 'server/entities/todo.entity';


class TodoBody {
  content: string;
  isComplete: boolean;
}


@Controller()
@Skip(AuthGuard)
export class Question5Controller {
  constructor(private todosService: TodosService) {}

  @Get('/todos')
  public async index() {
    const todos = await this.todosService.findAll();
    return { todos };
  }

  @Post('/todos')
  public async create(@Body() body: TodoBody) {
    let todo = new Todo();
    todo.content = body.content;
    todo.isComplete = body.isComplete;
    todo = await this.todosService.createTodo(todo);
    return { todo };
  }

  @Put('todos/:id')
  public async updateTask(@Param('id') id: string, @Body() body: TodoBody) {
    let todo = new Todo();
    todo.id = parseInt(id, 10);
    todo.content = body.content;
    todo.isComplete = body.isComplete;
    todo = await this.todosService.createTodo(todo);
    return { updatedTodo: todo };
  }
}
