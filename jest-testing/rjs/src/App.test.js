import React from 'react'
import { shallow } from 'enzyme'
import ask from './fetch'
import App from './App'


// STATIC UI TESTING 
it('should display a text input to fill question', () => {
    const wrapper = shallow(<App />)
    expect( wrapper.find('input[type="text"]').length ).toBe(1)
});

it('should display a submit button to send question to the Internet Gods', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('button').length).toBe(1)
});

it('should display Internet Gods answer in both text and picture format', () => {
    const wrapper = shallow(<App />)
    // wrapper.setState({
    //     answer: {
    //         answer: 'no',
    //         forced: false,
    //         image: 'https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif',
    //     },
    // })
    wrapper.find('button').simulate('click')

    return Promise.resolve(() => {
        wrapper.update()

        const answer = wrapper.find('.answer')
        expect(answer.find('h1').text()).toBe('no')
        expect(answer.find('img').prop('src')).toBe('https://yesno.wtf/assets/no/0-b6d3e555af2c09094def76cf2fbddf46.gif')
    })
});

it('should not display an answer by default', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.answer').length).toBe(0)
})



// MOCKING API CALLS
describe("API Caller", () => {
    // clear out previous test mock
    afterEach(() => {
        jest.resetAllMocks()
    })
    // TEST 1
    it("Should Call YesNo Api", () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => {},
            }))

        return ask()
                .then(() => {
                    expect(fetchSpy).toHaveBeenCalledWith('https://yesno.wtf/api/')
                })
    })
    // TEST 2
    it("Should return Yes/No response in JSON format", () => {
        const fetchSpy = jest.spyOn(global, 'fetch')
            .mockImplementation(() => Promise.resolve({
                json: () => ({ foo: 'bar' }),
            }))

            console.log(fetch.mock.calls)

        return ask()
                .then(response => {
                    expect(response).toEqual({ foo: 'bar' })
                })
    })

})