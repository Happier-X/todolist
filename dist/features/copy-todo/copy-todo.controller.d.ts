import { TodoService } from '../todo/todo.service';
export declare class CopyTodoController {
    private readonly todoService;
    constructor(todoService: TodoService);
    create(body: any): any;
}
