/////////////////////////
// Hello World in Java //
/////////////////////////
class myClass {
    public static void main(String[] args){
        System.out.println("Hello World");
    }
}

    - Every line of code written in Java that can run must be inside a 'class'.
    - The entry point to every Java application is a method called 'main'.
        
- Definitions 
    - public: anyone can access it
    - static: method can be run without creating an instance of the class containing the main method
    - void: method does not return a value
    - main: the name of the method.

////////////
// ARRAYS //
////////////
Array: A collection of variables of the same type.
Declaration: 
*   int[ ] arr = new int[5]; -> declares an array meant to hold 5 integers.
Initializing:
*   String[ ] myNames = {"A", "B", "C", "D", "E"};
*   System.out.println(myNames[2]) // Outputs: "C"
    - Initializing does not require a size specification as the array will auto-size to the amount of elements given 
        to it on initialization.




//////////////////
// CONDITIONALS //
//////////////////
if - else if() - else:
    - Same structure as JS
switch statements:
    - Same structure as JS
    
///////////
// LOOPS //
///////////
for:
    -Same as JS
while:
    -Same as JS
do while:
    -Same as JS

///////////////
// OPERATORS //
///////////////
Mathmatical Operators:
    +, -, *, /, %, ++n, n++, --n, n--, +=, -=, *=, /=
        ++n used to increment 'n'by one and store that new num in a var.
        n++ used to assign value of 'n' to var, then increment 'n' by one.
Logical Operators:
    &&, ||, ==, !, !=


////////////
// OUTPUT //
////////////
System (class):
*    - System.out.println("String to print to console.");


/////////////
// STRINGS //
/////////////
String: An Object that represents a sequence of characters.  "Hello" is a string of 5 characters for example.
Declaration: String myStr = "Nate"
Concatenation: 
*    String a = "Hello"; 
*    String b = "World";  
*    System.out.println(a + " " + b); // "Hello World"


////////////////
// USER INPUT //
////////////////
Scanner (object):
    -   The 'Scanner' object in Java is the most commonly used Java method for getting user input.
    -   Must Import the Scanner object to use it's methods:
*            import java.util.Scanner;   
    -   Must create a instance of Scanner obj to use it:
*            Scanner myVar = new Scanner(System.in);
    - Some other Scanner methods available:
        nextByte()    = Read a byte
        nextShort()   = Read a short 
        nextInt()     = Read an int 
        nextLong()    = Read a long 
        nextFloat()   = Read a float
        nextDouble()  = Read a double
        nextBoolean() = Read a boolean
        nextLine()    = Read a complete line
        next()        = Read a word

    Example of getting user input:
    
        import java.util.Scanner;

        class MyClass {
            public static void main(String[ ] args){
                Scanner myVar = new Scanner(System.in);
                System.out.println(myVar.nextLine());
            }
        }


///////////////
// VARIABLES //
///////////////
    Types:
        - int: for integers(whole numbers) such as 123 or 456.
        - double: for floating-point or real numbers with optional decimal points and fractional parts
        - String: for texts such as "Hello"
        - boolean: for true/false values only.
    Syntax:
*        int num = 20;
*        String name = "Nate";