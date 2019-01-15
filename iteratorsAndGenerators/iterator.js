var arr = ['blue', 'green', 'yellow', 'purple']

// for of loops have no idea what an array is
  // The only reason it can iterate over it is 
  // because the array provides an iterator that
  // tells the for of loop how to iterator over it

for(const item of arr){
    
}

// This is how it works inside/ how the for
// of loop gets the iterator from the array

const iterator = arr[Symbol.iterator]()
iterator { [Iterator] }


// [Symbol.iterator]() - It's wierd looking
// so that it is completely unique and won't
// fight with any other js object properties.
    // It looks like this in the background:
        Symbol.iterator // Symbol {} - A unique object
    // that is used as a key or a property on
    // objects


// Iterators expect to have a .next() method called
    const iterator = arr[Symbol.iterator]()
    console.log(iterator.next()) // { value: 'blue',  done: false }
    console.log(iterator.next()) // { value: 'green', done: false }
    iterator.next()

// So an Iterator is an object an array produces to teach
// things like 'for of' loops how to iterator over it.
    for(const char of arr[0]){
        console.log(char) // 'b' 'l' 'u' 'e'
    }