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


/////////////
// CLASSES //
/////////////
    Classes describe what an object will be.  It is not the object but rather an object Blueprint
    Attributes and Behavior are defined in the blueprint - (class) to descibe the objects that can be made by using it
        - See METHODS
    //////////////////////
    // CREATING CLASSES //
    //////////////////////
        Syntax    
        *    public class Animal {
        *        public void bark(){
        *            System.out.println("Woof Woof");
        *        }
        *    }
        This created a class - (blueprint) called Animal with a public method called bark that outputs "Woof Woof"

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
enhanced for: ( Also called a 'forEach' )
    Syntax
*    int[ ] numbers = {1, 2, 3, 4, 5}   
*        for(int b: numbers){
*            System.out.println(b)  //  1  2  3  4  5
*        }

/////////////
// METHODS //
/////////////
Methods define behavoir in a class.  They are functions that can be `called` on an object instantiated with the class.
    - Methods are called with ().  Such as  ' add(2, 3);'
    Return Types:
        - You must declare the type of data the method is expecting to return, such as String, int, boolean, or void
            - void is used to declare the method should not return anything.


///////////////////////////////////////
// OOP - OBJECT ORIENTED PROGRAMMING //
///////////////////////////////////////    
OOP: Java used OOP, a programming style that is intended to make thinking about programmin closer to thinking about the real world.
    - In OOP, each object is an indepenedent unit with a unique identity.
    - Objects have Characteristics also called Attributes that define what the object Is
    - Object Behavoir is defined by methods and describes what the Object Does


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
    -   Must Import the Scanner object to use its methods:
*            import java.util.Scanner;   
    -   Must create a instance of Scanner obj to use it:
*            Scanner myVar = new Scanner(System.in);
    -   Some other Scanner methods available:
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
    
*        import java.util.Scanner;
*
*        class MyClass {
*            public static void main(String[ ] args){
*                Scanner myVar = new Scanner(System.in);
*                System.out.println(myVar.nextLine());

*        }


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