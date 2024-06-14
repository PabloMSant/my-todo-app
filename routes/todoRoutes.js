const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todoController');

// Princípio da Responsabilidade Única: Este arquivo gerencia as rotas relacionadas às tarefas.
router.get('/', todoController.getTodos);
router.post('/add', todoController.createTodo);
router.post('/delete', todoController.deleteTodo);

module.exports = router;
