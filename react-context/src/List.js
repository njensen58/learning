import React from 'react';
import { TextContext } from './contexts/TextContext';

const List = ( props ) => {
    return (
        <TextContext.Consumer>
            { data => data.text }
        </TextContext.Consumer>
    )
}

export default List;
