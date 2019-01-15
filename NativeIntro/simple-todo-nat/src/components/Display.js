import React from 'react'
import Todo from './Todo'


const Display = props => {
    return (
        <div>
            { props.todos.map( todo => <Todo {...todo}/> ) }
        </div>
    )
}

const styles = {
    item: {
        padding: '10px',
        border: '1px solid black',
        fontSize: '22px',
        fontWeight: 'bold',
        borderRadius: '10px',
        margin: '5px 0'
    },
    container: {
        display: 'flex',
        flexDirection: 'column'
    }
}


export default Display