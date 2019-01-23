
// THIS IS A FIRST CLASS FUNCTION/OBJECT
function func1(x){
    return function(y){
        return x * y
    }
}

const doubler = func1(2)
const triple = func1(3)

console.log(doubler(20))
console.log(triple(10))