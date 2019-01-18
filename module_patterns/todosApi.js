module.exports = (function(){
    const todos = [
        { title: "First Todo", id: Math.random()  },
        { title: "Second Todo", id: Math.random()  },
        { title: "Third Todo", id: Math.random()  },
    ]

    const getTodos = () => {
        console.log(todos)
        return todos;
    }
    const addTodo = newTodo => {
        newTodo.id = Math.random();
        todos.push(newTodo);
    }
    const deleteTodo = id => {

    }
    return { getTodos, addTodo, deleteTodo };
})();

