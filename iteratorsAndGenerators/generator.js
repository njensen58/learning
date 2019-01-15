const { makeDragon } = require('./iteratorExample')
// Generators can be seen as Pausable functions //


// Syntatic surgar to easily make iterators
    // Instead of using an iterator returning objects, we will use this as a generator
    // to generate iterators
    // They produce the same outcome, but generators is less code.

const dragonArmy = {
    [Symbol.iterator]: function* (){
        while(true){
            const enoughDragonsSpawned = Math.random() > 0.80
            if(enoughDragonsSpawned) return
            // if not enough have spawned, yeild a new dragon
            yield makeDragon()
        }
    }
}

// for(const dragon in dragonArmy){
//     console.log(dragon)
// }

// Generators like iterators maintain the state of iteration
    // So you can use next to manually generate iterations

    // The * syntax allows the function to wait for iteration calls without 
        // looping infinitely
    function* someDragons(){
        while(true){
            const enoughDragonsSpawned = Math.random() > 0.80
            if (enoughDragonsSpawned) return
            yield makeDragon()
        }
    }

    // Calling this function, we can store the iterator in a variable and 
        // iterate manually
    
    const iterator1 = someDragons()
    console.log(iterator1.next())
    // console.log(iterator1.next())
    // console.log(iterator1.next())
    // console.log(iterator1.next())
    // console.log(iterator1.next())

    


    // Simplified example
    function* otherDragons(){
        yield 'fluffy butt dragon'
        yield 'steve the perverted dragon'
        return 'bob' // returns { value: 'bob', done: true } // ends function
        return // terminates the generator / resets state to init state
        yield 'johnny the squirrel' // will never yield as function will return
    }

    const iterator2 = otherDragons() 
    // console.log(iterator2.next()) // { value: 'fluffy butt dragon', done: false }
    // console.log(iterator2.next()) // { value: 'steve the perverted dragon', done: false }
    // console.log(iterator2.next()) // { value: undefined, done: true }

    // This shows that it maintains it's own state after it's called and
        // assigned to a variable 'iterator2' and 'iterator1'


    // VERY IMPORTANT //

    // This does not cause otherDragons ( or someDragons ) to run.. . yet
    const iterator = someDragons()
    // It gives you an 'iterator' which allows us to go to the .next() step
        // beginning with step one
    console.log(iterator) // {}
    // SO your iterator is your Remote Control to control the generator
    console.log(iterator.next()) // { value: 'baby ice dragon', done: false }
        // Until the control 'iterator' calls next, it will pause/wait

    
  