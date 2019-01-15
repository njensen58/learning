// Javascript - the Recent Parts //


// Core underparts introduced in ES6

 // Spread - Rest === Spread - Gather
  // ... & ...

// Iterators & Generators

// Generators - Creating an 'iterable' object

var obj = {
    a: 1,
    b: 2,
    c: 3,
    *[Symbol.iterator](){
        for (let key of Object.keys(this)){
            yield this[key];
        }
    }
}
console.log([...obj]) // => [1, 2, 3]





// ES2016  - 2 features //

    // array.includes()
        // array.indexOf() uses a === to test for value;
            // === lies about NAN and -0 values;

        // includes(NAN) would return true if the array inludes NAN, where indexOf() is false.




// ES2017 //

// ASYNC - AWAIT

// async funciton main() {
//     var user = await fetchCurrentUser(); // go make request
//
//     var [ archivedOrders, currentOrders ] =
//         await Promise.all([
//             fetchArchivedOrders( user.id ),
//             fetchCurrentOrders( user.id )
//         ])
//     // ..
// }

//main();

  // Downside
    // No external cancelation
    // await Only Promises
    // Scheduling (Starvation)


    // github.com/getify/CAF
        // uses generators that look like an async function, but gives
        // you control to send a cancelation token to the CAF.





// ES 2018 //

// RegEx improvements //
// Look behinds added to Look aheads //

var msg = "Hello World";

console.log(msg.match(/.(l.)/));

console.log(msg.match(/([jkl])o Wor\1/));

// console.log(msg.match(/(?<cap>l.)/).groups);



// async* .. yield await

 // asynchronous generator that makes an asynchronous iterator
   // for await (let text of urls){

// }  // for await loop is a way to loop asynchronously over


// speakerdeck.com/getify/javascript-the-recent-parts












////
