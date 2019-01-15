const fizzBuzz = require('./fizzBuzz')

// Tests created in this order, making us examine from the beginning that
// we really only want to push "Fizz" or "Buzz" if the current num is ONLY
// divisible by 3 or 5, and to make sure we test that.

it("returns an array", () => {
    const res = fizzBuzz()
    expect(res).toBeInstanceOf(Array)
})

// Wrote this test/for loop first to make sure the loop functions as expected
    // then copied loop into function
it("loops from 0 to 100", () => {
    let count = 0
    for(let i = 0; i <= 100; i++){
        expect(i).toBeGreaterThan(-1)
        expect(i).toBeLessThan(101)
        count++
    }
    expect(count).toBe(101)
})

it("returns an array with the length of 101", () => {
    const res = fizzBuzz()
    expect(res.length).toBe(101)
})

it("returns the current number if num is not divisible by 3 or 5 or a String", () => {
    const res = fizzBuzz()
    for(let i = 1; i < res.length; i++){
        if(res[i] % 5 !== 0 && res[i] % 3 !== 0){
            if(typeof res[i] !== 'string'){
                expect(res[i]).toBe(i)
            }
        }
    }
})

it("returns an array with every num divisible by only 3 and not 5 or 5 & 3 replaced with 'Fizz'", () => {
    const res = fizzBuzz()
    for(let i = 1; i < res.length; i++){
        if((i % 3 === 0 && i % 5 !== 0) && (i % 3 !== 0 && i % 5 !== 0)){
            expect(res[i]).toBe("Fizz")
        }
    }
})

it("returns an array with every num divisible by only 5 and not 3 or 3 & 5 replaced with 'FizzBuzz'", () => {
    const res = fizzBuzz()
    for(let i = 1; i < res.length; i++){
        if((i % 5 === 0 && i % 3 !== 0) && (i % 3 !== 0 && i % 5 !== 0)){
            expect(res[i]).toBe("Buzz")
        }
    }
})

it("returns an array with every num divisible by 3 and 5 replaced with 'FizzBuzz'", () => {
    const res = fizzBuzz()
    for(let i = 1; i < res.length; i++){
        if(i % 5 === 0 && i % 3 === 0){
            expect(res[i]).toBe("FizzBuzz")
        }
    }
})