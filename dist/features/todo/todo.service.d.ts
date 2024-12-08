export declare class TodoService {
    private todos;
    getTodos(): {
        id: number;
        title: string;
        description: string;
    }[];
    createTodo(item: any): void;
}
