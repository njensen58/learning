////////////////
// Data Types //
////////////////
    `int`:    integer/whole number
    `float`:  floating point, a number with a fractional part.
    `double`: double-precision floating point value
    `char`:   single character


//////////////////////
// ESCAPE SEQUENCES //
//////////////////////
    `\n`: newline
    `\t`: horizontal tab
    `\\`: backslash
    `\b`: backspace
    `\'`: single quote
    `\"`: double quote


///////////////////////
// FORMAT SPECIFIERS //
///////////////////////
    Specifiers are used for functions like scanf() and printf() to coorelate the variable with it's type.
        `%d`: Intiger - whole number
        `%s`: String - Array of characters
        `%c`: Character - single character
        `%x`: Memory Address in hexidecimal for a peice of data
        `%e`: Scientific Notation
        `%%`: Prints `%` in the string
        Can inclue conversion characters to customize data output:
            `printf("Pi = %3.2f", 3.14159)` // Output:  "Pi = 3.14"   
                - 3 specifies the total length of the output with the .2 details how many decimal places to print.


///////////////////////
// UTILITY/OPERATORS //
///////////////////////
    `'+' '-' '/' '*' '%' '+=' '-=' '/=' '*=' '%=' '++' '--' '<' '>' '<=' '>=' '==' '!=' '!' '&&' '||'`:
        `%` division cannot be performed on floats or doubles.
    `Order of Operations`:
        `()` can be used to set order of operations above default
    `&`: Address Operator
        `Gives the address, or location in memory, of a variable`
    `sizeof()`: Displays the corresponding size in bytes for each data type
        `"%d", sizeof(int);` 
    Type Casting:  WHen you want the output to be a different type than the original data type
        `int total = 23;`
        `int count = 4;`
        `average = (float) total / count;`  // Divides 23/4 and returns a `float` rather than an `int`. Would return 5 otherwise.



////////////////////////////
// INPUT/OUTPUT OPERATORS //
////////////////////////////
    INPUT:
    `getchar`: Returns value of next single character input
        `char a = getchar();`
    `gets`: Returns inputs of characters stored in an array making a String
        `char a[100];`
        `gets(a);`
        `printf("You entered: %d", a)`
    `scanf()`: Scans input that matches format specifiers and places input value at a variable address using the `&` operator.
        - scanf will stop reading as soon as it encounters a space, so "hello world" would be two separate inputs/variables.
        `int a = 100;`
        `scanf("%d", &a);`
        - Another Example of multiple inputs:
        `int x;`
        `float num;`
        `char text[20];`
        `scanf("%d %f %s", &x, &num, text);`  
            - `&` is not needed on the `text` variable because a string name acts as a pointer

    
    OUTPUT:
   `printf():`  Prints a string with named variables in place of placeholders
        `printf("%d", 50)    printf("%s", "string")`  
    `putchar()`: Outputs a single character
        `char a = getChar();` // Enter "a"
        `putchar(a);`         // output: "a"
    `puts()`:  used to display output as a string
        `char a[100];`
        `gets(a);`                 // input: "Hello"
        `printf("You entered: ");` 
        `puts(a);`                 // Output: "Hello"
    

//////////////////
// CONDITIONALS //
//////////////////
    `if elseif() else`:  Just like javascript except you do not need {} on a single `if else`;
    `terniary assignment:  y = (x >= 5) ? 5 : x`:  same as assigning y to either 5 or x in an if else statement.
    `switch`: Exactly the same as JS.


/////////////////
//    LOOPS    //
/////////////////
    `while`:          Same as JS
    `do while`:       Same as JS 
        `do {`
            `// some code`
        `} while(someVar < 10);`
    `for`:            Same as JS except can accept more than 1 parameter in each part
        `for(int i = 0, int j = 0; i < 10; i++, j+=2)`
            - The extra parameters of the same parameter type are `,` separated, with each type being `;` separated like in JS.
    `break continue`: Same as JS


/////////////////
//  FUNCTIONS  //
/////////////////
    Function `main()` is required as the initializing function of any `C` program
    Declarations:  Declare functions above `main()`.  (declarations are called a function prototype)
        syntax: `return_type function_name(parameters){}`
            `return_type`: What does the function return?
                `int char float double`
                `void`: Function does not return any value
    Defining:  Occurs after the `main()` function even though the function is declared before `main()`
        Example program:
            `#inlude <stdio.h>                          `
            `int square (int num);                      `
            `                                           `
            `int main(){                                `
            `   int x, result;                          `
            `   x = 5;                                  `
            `   result = square(x);                     `
            `   printf("%d squared is %d\n", x, result);`
            `   return 0;                               `
            `}                                          `
            `                                           `
            `int square (int num) {                     `
            `    int y;                                 `
            `    y = num * num;                         `
            `    return y;                              `
            `}                                          `
    Parameters:  By default, arguments are `passed by value`, which means that a copy of data is given to the parameters of the called function.
        `formal parameters`: The parameters named in a function `declaration`
        `actual parameters`: The values passed to parameters, also called `arguments`


//////////////////////
//  VARIABLE SCOPE  //
//////////////////////
    `Global`: Variables declared outside of functions are global and available to the entire program
    `Local`: Variables declared in a function are local to that block
        - arguments passed to functions the parameters act as local variables. Upon function exit, these local variables are destroyed.
        - `Static Variables`: Have a local scopt but are not destoyed when a function is exited.  This means a static variable
            `retains it's value for the life of the program` and can be accessed every time the funciton is  re-entered:
            Example function with static variable:
                `void say_hello();                           `
                `                                            `
                `int main() {                                `
                `   int i;                                   `
                `   for(i = 0; i < 5; i++){                  `
                `       say_hello();                         `
                `   }                                        `
                `   return 0;                                `
                `                                            `
                `void say_hello() {                          `
                `   static int num_calls = 1;                `
                `   printf("Called times = %d\n", num_calls);`
                `   num_calls++;                             `
                `}                                           `
                
                
////////////////
//   ARRAYS   //
////////////////   
    Array: A data structure that stores a collection of related values that are all of the `same type`.
            - An array is stored in contingous memory locations and `cannot change size after being declared`.
        Declaration:  `int test_scores[25];`  // This array can hold up to 25 test score values
        Initialize:   `float prices[3] = {3.2, 6.55, 10.49};` 
            - Partial initialization: `float prices[5] = {2.2, 3.1};`
        Accessing Array Elements: Same as JS  (an index of an array is also called a `subscript`)
            Example: 
                `int x[5] = {2, 3, 4, 5, 6};        `
                `printf("3rd element is: %d", x[2]);`
            Can also re-assign indexes like in JS:
                `printf("%d", x[3]);`  Outputs: 5
                `x[3] = 9;          `
                `printf("%d", x[3]);`  Outputs: 9
        Loops and Arrays:  Same as JS
    Two Dimensional Arrays:  ( can have more than 2 dimensions just like JS)
        Declaration: `int a[2][3];`  // Declares a 2 x 3 array
            Example:
                `int a[2][3] = {{1, 2, 3}, {4, 5, 6}};`
        Accessing Array Elements: Same as JS
                `printf("2nd sub-array\'s 2nd index: %d\n", a[1][1])`


/////////////////
//   POINTERS  //
/////////////////
    `&`:  The address of a variable if precedes a variable name
        - A memory address is given in hexadecimal number.  A base-16 number system (0 - 9, A - F), that represent
            a group of four binary digits that can have a value from 0 - 15
                - It's much easier to read a hex number that is 8 characters long for 32 bits of memroty than to try to 
                    decipher 32 1's and 0's in binary
    `Pointers`: Very important in C!!
        - They allow you to work with memory locations.  Fundamental to arrays, strings, and other data structures and algorithms
        Definition: `A variable that contains the address of another variable, so it 'points' to the location`
                        `assigned to a variable.`
        Syntax:  `pointer_type *identifier`
            `pointer_type`: The types of data the pointer will be pointing to. 
                - The actual pointer data type is a hexadecimal number, but when declaring a pointer, you must indicate what type
                    of data the pointer will be pointing to.
                `*`: Declares a pointer and should appear next to the identifer used for the pointer variable.
                    Examples:
                        `int j = 63;                                    `
                        `int *p = NULL;                                 `
                        `p = &j;                                        `
                        `printf("The address of j is %x\n", &j);        `
                        `printf("p contains address %x\n", p);          `
                        `printf("The value of j is %d\n", j);           `
                        `printf("p is pointing to the value %d\n", *p); `
                - Pointers should be initialized to `NULL` until assigned a valid location.
                - Pointers can be assigned the address of a variable using the `&` sign.
                - To see what a pointer is pointing to, use the `*` as in `*p`.
                    - In this case, the `*` is called the inderication of `dereference operator`. Process is `dereferencing`
                `**`: Pointer to a Pointer, can be used to be assigned the address of another pointer.
                    Example:
                        `int x = 12;        `
                        `int *p = NULL;     `
                        `int **ptr = NULL;  `
                        `p = &x;            `
                        `ptr = &p;          `
        Pointers in Expressions:  Pointers can be used in expressions just as any variable.  Arithmetic operators can be applied to whatever
            the pointer is pointing to.
                Example:
                    `int x = 5;          `
                    `int y;              `
                    `int *p = NULL;      `
                    `p = &x;             `  // *p now points to x
                    `y = *p + 2;         `  // y is assigned to 7
                    `y += *p;            `  // y is assigned to 12
                    `*p = y;             `  // x is assigned to 12
                    `(*p)++;             `  // x is incremented to 13
                NOTE:  `()` are required for the 




///////////////////////
// STRING OPERATORS  //
///////////////////////
#include <string.h>
   `strlen(<string>)`: Returns length of given string
