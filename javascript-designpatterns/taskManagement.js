const task = {
    title: "My task",
    description: "My Description"
}

Object.defineProperty(task, 'toString', {
    value: function() {
        return this.title + ' ' + this.description;
    },
    writable: false,  // now toString will always be the function
    enumerable: false,
    configureable: true
});

// Can always change the settings later.
// Object.defineProperty(task, 'toString', {
//     enuerable: true
// })

const urgentTask = Object.create(task)

Object.defineProperty(urgentTask, 'toString', {
    value: function() {
        return this.title + ' is urgent';
    },
    writable: false,  // now toString will always be the function
    enumerable: false,
    configureable: true
});

console.log(Object.keys(task)) // Wont's show toString since enumerable = false
console.log(urgentTask.toString())
