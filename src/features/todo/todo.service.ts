import { Injectable } from '@nestjs/common'

@Injectable()
export class TodoService {
    private todos = [
        {
            id: 1,
            title: 'First Todo',
            description: 'This is the first todo'
        }
    ]

    getTodos() {
        return this.todos
    }
}
