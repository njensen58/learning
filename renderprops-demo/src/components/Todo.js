import React from 'react'
import Toggle from '../shared/Toggle'
import Form from '../shared/Form'
import EditForm from './EditForm'


const Todo = props => {
    const { onEdit, onDelete, item, item: { title, _id } } = props;
    return (
        <div>
            <h1>{ title }</h1>
            <Toggle render={({ toggle, isToggled }) =>
                <div>
                    <button onClick={ () => onDelete( _id ) }> Delete </button>
                    <button onClick={ toggle }> Edit </button>
                    { isToggled &&
                        <Form
                            reset
                            inputs={{ title: '', description: '' }}
                            edit={ props => onEdit( _id, props )}
                            render={ props => (<EditForm { ...props }/>) }
                        />
                    }
                </div>
            }/>
        </div>
    )
}

export default Todo;
