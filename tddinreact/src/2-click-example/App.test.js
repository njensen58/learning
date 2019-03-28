import React from 'react'
import App from './App.js'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'

Enzyme.configure({adapter: new EnzymeAdapter() })

/** 
 * Factory function to create a ShallowWrapper for the App component
 * @function setup
 * @param {object} props - Component props specific to this setup.
 * @param {obj} state - Initial state for setup
 * @returns {ShallowWrapper} - Enzyme class
*/
const setup = (props = {}, state = null) => {
    const wrapper = shallow(<App {...props}/>)
    if(state) wrapper.setState(state)
    return wrapper
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param {ShallowWrapper} wrapper = Enzyme shallow wrapper to search within
 * @param {string} val - Value of data-test attribute for search
 * @returns {ShallowWrapper}
 */
const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`)
}



// Things core to our App 
test("renders without crashing", () => {
    // added a data-test attribute to the outermost div to 
    // do a better render test here "component-<componentName>"
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, "component-app")
    // expect to find at least 1 element with a data-test="component-app" attribute
    expect(appComponent.length).toBe(1)
})

test("renders increment button", () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
})

test("renders counter display", () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
})

// Tests for our specific situation (not implementation though)
test("counter starts at 0", () => {
    const wrapper = setup()
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
})

test("clicking increment button increments counter in the display", () => {
    const counter = 7
    const wrapper = setup(null, { counter })

    // find button and click
    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')
    wrapper.update() // Causes a re-render of the wrapper 

    // find display and test value
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
        // toContain is best as it will just look for the number
        // and ignore the other text, where toBe looks for exact match
    expect(counterDisplay.text()).toContain(counter + 1) 
})


// Challenge 1  - Decrement Button
test("renders decrement button", () => {
    const wrapper = setup()
    const decrementButton = findByTestAttr(wrapper, "decrement-button")
    expect(decrementButton.length).toBe(1)
})

test("clicking decrement button decrements counter in the display", () => {
    const counter = 10
    const wrapper = setup(null, { counter })

    const decrementButton = findByTestAttr(wrapper, "decrement-button")
    decrementButton.simulate("click")
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, "counter-display")
    expect(counterDisplay.text()).toContain(counter - 1)
})

// Challenge 2: No count below zero
    // if the counter is at 0 and the decrement button is clicked:
        // don't decrement the counter
        // display an error message that the counter can't go below zero
        // What methods from enzyme shallow wrapper docs
test("does not allow count to go below zero", () => {
    const counter = 0
    const wrapper = setup(null, { counter })

    const decrementButton = findByTestAttr(wrapper, "decrement-button")
    decrementButton.simulate("click")
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, "counter-display")
    expect(counterDisplay.text()).toContain(0)
})

test("displays error message if previous count is 0", () => {
    const counter = 0
    const wrapper = setup(null, { counter })

    const decrementButton = findByTestAttr(wrapper, "decrement-button")
    decrementButton.simulate("click")
    wrapper.update()

    const errorDisplay = findByTestAttr(wrapper, "error-display")
    expect(errorDisplay.text()).toBe("The counter cannot go below 0")
})

// Challenge 3: Clear the error on increment
    // Error should clear on click of increment button
    // counter should still increment as usual
test("error is not display if count goes above 0", () => {
    const counter = 0
    const wrapper = setup(null, { counter })

    // Make the error show up 
    const decrementButton = findByTestAttr(wrapper, "decrement-button")
    decrementButton.simulate("click")
    wrapper.update()

    // Make the error disappear
    const incrementButton = findByTestAttr(wrapper, "increment-button")
    incrementButton.simulate("click")
    wrapper.update()

    // Check to make sure the error disappeared
    const errorDisplay = findByTestAttr(wrapper, "error-display")
    expect(errorDisplay.text()).toBe("")
})