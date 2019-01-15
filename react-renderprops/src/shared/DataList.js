import React from 'react';

const DataList = props => {
    const { data, render, className } = props;
    return (
        <div className={ className }>
            { data.map((item, i) => render({ item, i, key: i }) )}
        </div>
    )
}

export default DataList;
