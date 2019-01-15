import React from 'react';
import DataList from './shared/DataList';
import Form from './shared/Form';
import Person from './Person';
import ContactForm from './ContactForm';

const App = () => {
    
    const fakeData = [0, 1, 2, 3, 4, 5];
    const moreFakeData = [
        { name: 'Nate' },
        { name: "Ben" },
        { name: "Eric" },
        { name: "Bob" },
        { name: "Marcus" }
    ]

    return (
        <div>
            <Form
                reset
                inputs={{ name: '', isHappy: false }}
                submit={ inputs => alert(`${inputs.name} is ${inputs.isHappy ? "Happy!" : "Sad... :("}`)}
                render={ props => <ContactForm {...props}/> }
            />
            <DataList
                data={ fakeData }
                className="test"
                render={ ({ item, i, key }) => ( <div key={ key }><h1>{ item }</h1></div> )}
            />
            <DataList
                data={ moreFakeData }
                className="text"
                render={ props => <Person {...props}/> }
            />
        </div>
    )
}

export default App;
