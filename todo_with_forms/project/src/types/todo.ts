export interface Todos{
    id:string,
    text:string,
}

export interface ContextType {
    todos: Todos[],
    addTodos:(text:string) => void,
    deleteTodos:(id:string) => void,
    updateTodos:(id:string, text:string) => void,
}