const Todo = require('../models/todo');

// Princípio da Responsabilidade Única: Este controller é responsável por gerenciar as operações relacionadas às tarefas.
exports.getTodos = (req, res) => {
    const todos = Todo.getAllTodos();
    res.render('index', { todos: todos });
};

exports.createTodo = (req, res) => {
    const { title } = req.body;
    if (title) {
        Todo.addTodo(title);
    }
    res.redirect('/');
};

exports.deleteTodo = (req, res) => {
    const { id } = req.body;
    Todo.deleteTodo(parseInt(id));
    res.redirect('/');
};
