const makeDragons = require('./iteratorExample')
// A function that just returns iterators

function someDragons(){
    let iterations = -1
    const iterator = {
        next: () => {
            iterations++
            if(iterations === 0)
                return { value: 'fluffykins the dragon', done: false }
            if(iterations === 1)
                return { value: 'mark the dragon', done: true }
            if(iterations === 2){
                if(Math.random() > 0.5){
                    return { value: 'hardy the dog', done: true }
                }
            }
            return { done: true }
        }
    }
    return iterator
}

const iterator = someDragons()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())