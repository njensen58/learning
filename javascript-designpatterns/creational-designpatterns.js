// CREATIONAL DESIGN PATTERNS //

// Used to create new objects.
    // Adapt creation pattern to the situation


//////////////
// PATTERNS //
//////////////

////////////////////////////
// 1. CONSTRUCTOR PATTERN //
////////////////////////////
    // Used to create new objects with their own object scope
    // This uses the 'new' keyword
        // 'new'
            // - creates a brand new object
            // - Links to an object prototype
            // - Binds 'this' to the new object scope
            // - Implicitely returns 'this'

    // ex:
        function Task(name, completed){
            this.name = name;
            this.completed = completed;
            this.toString = function(){
                console.log(this.name + ' ' + this.completed)
            }
        }

    // This isn't effecient since this toString function would be
    // instantiated everytime a new ObjectName was made.


    // PROTOTYPES//
        // An Encapsulation of properties that an object links to.
            // Allows to write methods once, and have objects use
            // the method without having to inherit it.

        // ex:
            Task.prototype.complete = function(){
                console.log('completing task: ' + this.name)
                this.completed = true;
            }

            Task.prototype.save = function(){
                console.log('saving Task ' + this.name)
            }

            const task1 = new Task('test1', false) // Has access to .save and .complete


        // ES6 CLASSES // - syntactic surgar on top of constructor/prototype
        class TaskClass {
            constructor(name, completed){
                this.name = name;
                this.completed = completed;
            }

            save(){
                console.log('Saving task: ' + this.name)
            }

            complete(){
                console.log('Completing task: ' + this.name)
                this.completed = true;
            }
        }

            const task2 = new TaskClass('text2', false);
            console.log(task2);
            task2.complete();
            task2.save();
            console.log(task2)



///////////////////////
// 2. MODULE PATTERN //
///////////////////////
    // Simple way to encapsulate methods
    // creates a "toolbox" of functions to use

    // This returns an object literal
    const Module = function(){
        const privateVariable = "I am a private variable"; // Not on object literal that's returned.
        return {
            method: function(){
            },
            nextMethod: function(){
            }
        }
    }


////////////////////////
// 3. FACTORY PATTERN //
////////////////////////
    // A Pattern used to simplify object creation
        // Creating different objects based on need
        














/////////////////////
