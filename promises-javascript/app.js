// A Promise is an object which can be returned synchronously from an asynchrous function.
// It will be one of 3 possible states:
    // - Fulfilled: onFulfilled() will be called (e.g. resolve() was called );
    // - Rejected: onRejected() will be called (e.g., reject() was called );
    // - Pending: not yet fulfilled or rejected;

    // A promise is 'Settled' if it's not pending, meaning it was either resolved or rejected.
        // A settled promise is immutable, AKA it can't be changed once it's resolved/rejected.

        // Here is a function that returns a promise which will resolve after 3 seconds:

        const wait = time => new Promise((resolve) => setTimeout(resolve, time))
        wait(3000).then(() => console.log('Hello!'));

        console.log(wait(1000))


    // The ES6 Promise constructor takes a function with 2 params: eg function(param1, param2){ }
        // param1 is resolve(), and param2 is reject();
        // In the above example, we're only providing the resolve() since we know the setTimeout will work.
            // The resolve() callback sets off the setTimeout which then resolves the promise after 3 secs.

    // You can optionally resolve() or reject() with values which makes those values available in the callback
    // function when you call .then(callback=>{})
        // When you reject() with a value, always pass an error object to handle it.




// IMPORTANT RULES ABOUT PROMISES //

    // A promise or “thenable” is an object that supplies a standard-compliant .then() method.
    // A pending promise may transition into a fulfilled or rejected state.
    // A fulfilled or rejected promise is settled, and must not transition into any other state.
    // Once a promise is settled, it must have a value (which may be undefined). That value must not change.



// Every Promise must supply a .then() method with the following signature:

    // promise.then(
    // onFulfilled?: Function,
    // onRejected?: Function
    // ) => Promise

        // Both onFulfilled() and onRejected() are optional
        // If the args supplied are not functions, they must be ignored.
        // onFullfilled() will be called after the promise is fulfilled, with the promise's
            // value as the first argument
        // onRejected() willbe called after the promise is rejected, with the reasone for the reject.
            // as the first arg
        // .then() can be used many times on a promise, as to aggregate callbacks ( mult api requests chain )
            // .then() must return a new promise, 'promise2'




// PROMISE CHAINING //

// Because .then() always returns a new promise, it's possible to chain promisdes with precise
    // control over how and where erros are handled.  Promises allow you to mimic normal synchronous code's
    // try / catch behavior.  Like synchronous code, chaining will be a sequence like this:

    // fetch(url)
    //   .then(process)
    //   .then(save)
    //   .catch(handleErrors)
    // ;

    // assuming fetch, process, and save return promises, the following function will wait for the function
        // before it to complete before starting
        // handleErrors will only run in any of the preceding promises reject.

    // Here is a promise chain using a new wait function.

    // const wait2 = time => new Promise(
    //     res => setTimeout(() => res(), time)
    // );
    //
    // wait(200)
    //       // onFulfilled() can return a new promise, `x`
    //    .then(() => new Promise(res => res('foo')))
    //       // the next promise will assume the state of `x
    //    .then(a => a)
    //       // Above we returned the unwrapped value of `x`
    //       // so `.then()` above returns a fulfilled promise
    //       // with that value:
    //    .then(b => console.log(b)) // 'foo'
    //       // Note that `null` is a valid promise value:
    //    .then(() => null)
    //    .then(c => console.log(c)) // null
    //       // The following error is not reported yet:
    //    .then(() => {throw new Error('foo');})
    //       // Instead, the returned promise is rejected
    //       // with the error as the reason:
    //    .then(
    //       // Nothing is logged here due to the error above:
    //       d => console.log(`d: ${ d }`),
    //       // Now we handle the error (rejection reason)
    //       e => console.log(e)) // [Error: foo]
    //       // With the previous exception handled, we can continue:
    //    .then(f => console.log(`f: ${ f }`)) // f: undefined
    //       // The following doesn't log. e was already handled,
    //       // so this handler doesn't get called:
    //    .catch(e => console.log(e))
    //    .catch(e => console.log(e))
    //    .then(() => { throw new Error('bar'); })
    //       // When a promise is rejected, success handlers get skipped.
    //       // Nothing logs here because of the 'bar' exception:
    //    .then(g => console.log(`g: ${ g }`))
    //    .catch(h => console.log(h)) // [Error: bar]
    // ;



// ERROR HANDLING //
    // If you handle your error like this:
        // save().then(
        //   handleSuccess,
        //   handleError
        // );

    // Any error thrown by handleSuccess gets swallowed in your function because there is nothing there
    // to catch the rejection.  So a better error handling pattern is this.

        // save()
        //     .then(handleSuccess)
        //     .catch(handleError)
        // ;

    // Because of this, all promise chains should end with a .catch(err => // handle err)
//
