import React from 'react'


const Todo = props => {

    const styles = {
        item: {
            padding: '10px',
            border: '1px solid black',
            fontSize: '22px',
            fontWeight: 'bold',
            borderRadius: '10px',
            margin: '5px 0'
        }
    }

    return (
         <div style={ styles.item } key={props.title}>
            <p>Todo: { props.title }</p>
            <p>Price: { props.price }</p>
        </div>
    )
}

export default Todo