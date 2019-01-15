const getNames = require('./getNames')

// This is a manual mock function using vanilla javascript
    // Jest has it's own helpers for this functionality!

it("calls swapi.api correctly", () => {
    let isFakeAxiosCalled = false
    const fakeAxios = url => {
        expect(url).toBe('https://swapi.co/api/people')
        isFakeAxiosCalled = true
    }
    getNames(fakeAxios, [{name: "Luke", name: "Han Solo", name: "Darth Vader"}])
        .then(result => {
            expect(isFakeAxiosCalled).toBe(true)
        })
})

// it("if specific enpoint specified") 


////////////////
// Jest Test
// it('Quantity', () => {
//     orderTotal({
//         items: [
//             { name: "Dragon candy", price: 2, quantity: 3 }
//         ]
//     }).then(result => expect(result).toBe(6))
// })

// it('No Quantity Specified', () => {
//     orderTotal({
//         items: [
//             { name: 'Dragon candy', price: 3 }
//         ]
//     }).then(result => expect(result).toBe(3))
// })

// it("Happy Path 1", () => {
//     orderTotal({
//         items: [
//             { name: 'Dragon Food', price: 8, quantity: 1 },
//             { name: 'Dragon cage(small)', price: 800, quantity: 1 }
//         ]
//     }).then(result => expect(result).toBe(808))
// })

// it('Happy path 2', () => {
//     orderTotal({
//         items: [
//             { name: 'Dragon colar', price: 20, quantity: 1 },
//             { name: 'Dragon chew toy', price: 40, quantity: 1 }
//         ]
//     }).then(result => expect(result).toBe(60))
// })
