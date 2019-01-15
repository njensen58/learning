// Objects in Javascript


// Ways to create an object

// 1
const obj = {}; // {}

// 2
const obj2 = Object.create(Object.prototype); // {}

// 3
const obj3 = new Object(); // {}




// Assigning Keys and Values

// 1
const obj4 = {};
obj4.param = "testValue";
// console.log(obj4) // { param: 'testValue' }
// console.log(obj4.param) // 'testValue'

// 2
const obj5 = {};
obj5['param'] = 'testValue2';
// console.log(obj5) // { param: 'testValue2' }
// console.log(obj5['param']) // testValue2

// 3
const obj6 = {};
const val = 'value';
obj6[val] = 'new value';
console.log(obj6); // { value: 'new value' }



// Ecmascript 5 gave us Object.defineProperty();
    // Allows us to configure our object properties.
    // In this example, 'name' is the 'key', and value is the value:
Object.defineProperty(obj, 'name', {
    value: 'my name',
    writable: true,      // Create constants (can't be changed).
    enumerable: true,    // for in loop, wont or will show up.
    configurable: true   // can or cannot change these properties.
})
