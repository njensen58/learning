const todosApi = require('./todosApi')



    console.log(todosApi.getTodos())
    todosApi.addTodo({ title: "Fourth Todo" })

    let todos = todosApi.getTodos()
    todos.push({ title: "Fifth Todo", id: 6 })

    console.log("Local")
    console.log(todos)
    console.log("Module")
    console.log(todosApi.getTodos())
