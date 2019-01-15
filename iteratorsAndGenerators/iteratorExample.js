const randomNum = require('random-number')

const randomItem = arr => {
    const randomIndex = randomNum({
        min: 0,
        max: arr.length - 1,
        integer: true
    })
    return arr[randomIndex]
}


const makeDragon = () => {
    const dragonAges = ['adult', 'young', 'baby']
    const dragonAbilities = ['fire', 'ice', 'lightning']
    return randomItem(dragonAges) + ' ' +
        randomItem(dragonAbilities) + ' ' +
        'dragon'
}


const dragonArmy = {
    // iterator that returns a factory function
    [Symbol.iterator]: () => {
        return {
            next: () => {
                const enoughDragonsSpawned = Math.random() > 0.80
                if(!enoughDragonsSpawned)
                    return {
                        value: makeDragon(),
                        done: false
                    }
                return { done: true }
            }
        }
    }
}

for(const dragon of dragonArmy){
    console.log(dragon)
}

// This shows that iterators dont just have to be a fixed set 
// of data, but rather you can customize how the iterator works
// for different results.

// Iterators can also by asynchronous
    // Which allows iterators that gradually fetch data from an api


module.exports = { dragonArmy, makeDragon }