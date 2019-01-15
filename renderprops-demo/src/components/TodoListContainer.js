import React, { Component } from 'react'
import List from '../shared/List'
import Form from '../shared/Form'
import Loading from '../shared/Loading'
import Todo from './Todo'
import AddTodoForm from './AddTodoForm'
import { connect } from 'react-redux'
import { getTodos, addTodo, deleteTodo, editTodo } from '../redux'


class TodoListContainer extends Component {
    componentDidMount(){
        this.props.getTodos()
    }

    render(){
        const { deleteTodo, addTodo, editTodo, todos } = this.props
        return (
            <div>
                {/*<Loading isLoading={ !todos.length }>*/}
                    <Form
                        reset
                        inputs={{ title: '', description: '' }}
                        render={ props => ( <AddTodoForm { ...props }/>)}
                        submit={ inputs => addTodo( inputs ) }
                    />
                    <List
                        data={ todos }
                        onDelete={ id => deleteTodo( id ) }
                        onEdit={ editTodo }
                        className="text"
                        render={ props => ( <Todo {...props}/> ) }
                    />
                {/*</Loading>*/}
            </div>
        )
    }
}

export default connect(state=>state,
                { getTodos, addTodo, deleteTodo, editTodo })(TodoListContainer)
