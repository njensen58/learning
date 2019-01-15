import React from 'react';


const Person = props => {
    const { item } = props;
    return (
        <div>
            <h1>name: { item.name }</h1>
        </div>
    )
}

export default Person;
