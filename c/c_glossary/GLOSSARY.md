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
        `%x`: Memory Address in hexidecimal
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
        `gets(a);`
        `printf("You entered: ");` // input: "Hello"
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



///////////////////////
// STRING OPERATORS  //
///////////////////////
#include <string.h>
   `strlen(<string>)`: Returns length of given string
