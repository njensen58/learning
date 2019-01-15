// MODULE PATTERN //

 // When this function is executed, we can create private variables,
 // get my information from the database, and all that stuff,
 // and while the get and save methods have access to that information,
 // the variables are not returned unless returned in one of the methods.

const repo = () => {
    const db = {};
    const get = (id) => {
        console.log('Getting task ' + id);
        return {
            name: 'new task from db'
        }
    }
    const save = (task) => {
        console.log('Saving ' + task.name + ' to the db');
    }
    // Having a return statement like this shows what calling this
    // module in another file will give you access to.
    return {
        get: get,
        save: save
    }
}

module.exports = repo(); // this will be the return section above

// the module.exports sends the function call so that the receiving
// file imports an object literal containing just the two methods
// returned, while those two methods have access to the private
// variables/data in the top level of the module 'repo'.
