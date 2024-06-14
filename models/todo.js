class Todo {
    constructor() {
        this.todos = [];
    }

    getAllTodos() {
        return this.todos;
    }

    addTodo(title) {
        const newTodo = { id: Date.now(), title: title, completed: false };
        this.todos.push(newTodo);
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
    }
}

module.exports = new Todo();
