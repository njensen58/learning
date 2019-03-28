import React from 'react'
import ReactDOM from 'react-dom'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App.js'


Enzyme.configure({ adapter: new EnzymeAdapter() })

test("renders without crashing", () => {
    const wrapper = shallow(<App/>)  // This is sufficient to check if it renders without crashing.
    // console.log(wrapper.debug())
    // expect(wrapper).toBeTruthy() // passes
    // expect(wrapper).toBeFalsey() // fails
})


// Original test using react dom
// test("renders without crashing", () => {
//     const div = document.createElement('div')
//     ReactDOM.render(<App />, div)
//     ReactDOM.unmountComponentAtNode(div)
// })

