import { Body, Controller, Post } from '@nestjs/common'
import { TodoService } from '../todo/todo.service'

@Controller('copy-todos')
export class CopyTodoController {
    constructor(private readonly todoService: TodoService) {}

    @Post()
    create(@Body() body) {
        this.todoService.createTodo(body)
        return body
    }
}
