import React from 'react';

const List = props => {
    console.log(props)
    const { data, className, render, onDelete, onEdit } = props;
    return (
        <div className={className}>
            { data.map((item, i) => render({ item, i, key: i, onDelete, onEdit })) }
        </div>
    )
}

export default List;
