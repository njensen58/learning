Algorithm:
 - A set of steps or instructions for completing a task
        ( recipes, driving directions ) 
 - in CS:
        - A set of steps a program takes to complete a task.
 - Algorithms have very specific and destinct order
        - destinct meaning that instructions should not be able to be broken down to sub instructions
        - Algorithms should produce a result
        - Clearly defined problem statement, input and output
        - Consistent results given the same values

Big O:
 - a theoretical definition of the complexity of an algorithm as a function of the size

Exponent:  
- 2 ^ 3 = 8  === how many times must I multiply this value to itself to get the number (2 * 2 * 2 = 8)

Factorial `n!`:
- It's basically n(n-1) until you reach the number 1
    - eg: 3!  3 x 2 x 1 = 6    ( The traveling salesman is the equation this represents)
    - Worst case scenario is a `Factorial/Combonational runtime n!`

Linear Time `O(n)`: 
- The runtime of the algorithm is directly proportional to the size of the data set

Logarithm (inverse of Exponent): 
- log2 8 = 3 === how many times must I divide 8 by 2 to get the value 1 (takes 3 operations)

Logarithmic Time `O(log n)` or `O(ln n)`  log2 n + 1:
- Sublinear algorithms( preferred even though linear searches do have advantages )
- Iteration amount will increase little compared to increasing value size which makes it curve compared to linear runtime.

Order of growth:
 - a measure of how much the time taken to execute operations increases as the input size increases
 - growth rate is the amount of iterations required to complete the task when the input data increases from 100 to 1000 to 10000 etc.

Space Complexity 
- a measure of how much working storage, or extra storage, is needed as a particular algorithm grows

Tail call 
- a call, inside a function, to the same function itself as the last operation. Also called tail recursion


SEARCH ALGORITHMS:
 - Linear Search:  
    // Input: An unsorted list of values
    // Output: Found item or a value of some sort letting us know it was not found
        // Guess 1, 2, 3, 4, 5  . .. until you find the value you're looking for, or you get to the end of the list.
            
 - Binary Search:
    // Items must be sorted for this algorithm to work
    // Input: Sorted list of values
    // Output: Found item or a value of some sort letting us know it was not found
        eg:  guess a num 1 - 100;  ask if num is >= 50.  If false, you do not need 50 - 100. Must be sorted


    
            


FROM TREEHOUSE:
Polynomial runtimes 
- O(n ^ k): An algorithm is considered to have a polynomial runtime if, for a given value of n, it's worst case runtime is in the form of n raise to the k power. Examples of this are O(n^2) and O(n^3). Algorithms with polynomial runtimes are considered efficient.

Exponential runtime 
- O(x^n): A runtime where number of operations increases exponentially as the size of the data set increases. Exponential runtimes are considered inefficient.

Combinatorial or factorial runtime 
- O(n!) - Runtimes where as the size of n increases the number of operations increases by n! where n! is the factorial of n.