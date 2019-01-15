const orderTotal = require('./order_total')


// Jest Test
it('Quantity', () => {
    expect(orderTotal({
        items: [
            { name: "Dragon candy", price: 2, quantity: 3 }
        ]
    })).toBe(6)
})

// Vanilla js test
// if(orderTotal({
//     items: [
//         { name: "Dragon candy", price: 2, quantity: 3 }
//     ]
// }) !== 6) {
//     throw new Error('Check fail: Quantity')
// }

it('No Quantity Specified', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon candy', price: 3 }
        ]
    })).toBe(3)
})

// if(orderTotal({
//     items: [
//         { name: "Dragon candy", price: 3 }
//     ]
// }) !== 3) {
//     throw new Error('Check fail: no quantity specified')
// }


it("Happy Path 1", () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon Food', price: 8, quantity: 1 },
            { name: 'Dragon cage(small)', price: 800, quantity: 1 }
        ]
    })).toBe(808)
})

// if(orderTotal({
//     items: [
//         { name: 'Dragon Food', price: 8, quantity: 1 },
//         { name: 'Dragon cage(small)', price: 800, quantity: 1 }
//     ]
// }) !== 808) {
//     throw new Error('Check fail: Happy path 1')
// }

it('Happy path 2', () => {
    expect(orderTotal({
        items: [
            { name: 'Dragon colar', price: 20, quantity: 1 },
            { name: 'Dragon chew toy', price: 40, quantity: 1 }
        ]
    })).toBe(60)
})

// if(orderTotal({
//     items: [
//         { name: 'Dragon colar', price: 20, quantity: 1 },
//         { name: 'Dragon chew toy', price: 40, quantity: 1 }
//     ]
// }) !== 60) {
//     throw new Error('Check fail: Happy path 2')
// }