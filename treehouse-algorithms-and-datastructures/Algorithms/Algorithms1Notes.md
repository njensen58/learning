Algorithms:

You should know algorithms:
- Know they exist so you do not try to resolve a solved problem
- Know when they should be used
- Break problem into steps, so you can decide with algorithm and data structure will work best.

Correctness & Efficiancy:
- Correctness: 
    - If given any input and ouput the expected result depending on the given input

- Efficiancy (Time & Space):
    Time Complexity: A measure of how long it takes the algorithm to run (universal application)
        - How long it takes to complete a job. Less time === more effeciant
    Space Complexity: A measure of how much memory an algorithm takes up on a computer (specific to computers)

- Both Time and Space are measured using the same metric that uses a few parts:
    Running Time: The number of tries it takes to get to the solution (iterations)
        - Can use average case or best case scenario for running time to measure, but they are one-sided
        - Worse case scenario is nice as it will always perform at least at that measure
            -eg: linear search worse-case is 10 tries to get to 10, 100 to get to 100, etc.

CONTEXT is important (relativity).  We compare algorithms in their worst case scenarios to compare efficiancy against one another
- Feed in the same `n` to each equation and compare results
    linear vs binary:
        looking for 2 in array from 1 - 100
            linear: 2 operations - faster
            binary: ~8 operations
        looking for 90 in array from 1 - 100
            linear: 90 operations
            binary: ~10 operations - faster ( and consistenly faster with large datasets )

Big O:
- Theoretical defintion of the complexity of an algorithm as a function of the size
    - Big o is a notation used to describe complexity, meaning time, space, etc. all in one notation
    - Looks like this:  
        - O(n) - Upper Bounds using worse case scenario
            - O: Order of magnitude of complexity
            - n: A function of the size
                - Measures complexity as the input size grows/changes


- Common Notations in `Big O`
**************************
- ** Polynomial Runtime ** : Some number 'n' raised to the some power 'k' `O(n^k)`
    - Constant Time `O(1)`: Same amount of time in any given case   
        - linear search because increase in dataset === same time complexity.

    - Linear Time `O(n)`: 
        - The runtime of the algorithm is directly proportional to the size of the data set

    - Logarithmic Time (Sublinear) `O(log n)` or `O(ln n)` log2 n + 1:
        - Preferred to linear searches even though linear searches do have advantages 
        - Iteration amount will increase very little compared to increasing value size which makes it curve compared to linear runtime.
            - Inverse of an Exponent( 2 ^ 3)
                - exponent:  2 ^ 3 = 8  === how many times must I multiply this value (2 * 2 * 2 = 8)
                - logarithm: log2 8 = 3 === how many times must I divide 8 by 2 to get the value 1 (takes 3 operations)

        - **** In Practice, Linear time is more performant than Sublinear(Logarithmic) time up to a certain value of `n` ****
                    - This is because Binary search (a logarithmic algorithm) must be sorted first, 
                        requiring additional work and only really beneficial and large data sets.

    - Quadratic Time `O(n^2)`, O n squared, 4 x 4 grid, nestedArray, n ^ 2 when n = 4:
        - It is quadratic runtime because for any given value of 'n', run 'n^2' amount of operations 
                eg: n = 2 == [[ 2, 1 ], [2, 2]]
                             [[ 1, 1 ], [1, 2]]
                    - It is the same as saying n * n or n^2
                    
    - Cubic Time `O(n^3)`: 
        - Not as common as Quadratic runtime, but would be the equivalent just cubed.  eg: n = 4  => 4 * 4 * 4
        - Quadratic is expensive over a short amount of time, so this becomes extremely expensive quickly

    - Quasilinear Runtimes `O(n log n)`:
        - remember `log n` means as the data grew, the runtime grew by only a small factor
        - Quasilinear says for the value of `n`, we will run `log n` operations.
            - Has a time complexity less than quadratic but greater time complexity than linear

        EX: Merge Sort (and some other sorting algorithms) have a runtime of O(n log n)


- ** Exponential Runtime **: Some number (x) raised to the nth power `O(x^n)` 
    - Number of operations increase exponentially

    - Brute Force algorithms: 10 ^ n

    - Factorial / Combination runtime  `n! n(n - 1)`  `4!  4 x 3 x 2 x 1 === 24`
        - 200! would take the time of know history to complete


- If an equation has 3 different runtimes, the one with the largest time complexity is the upper bound for worst case


SEARCH ALGORITHMS:
- Linear Search `O(log n)`:  
    // Input: An unsorted list of values
    // Output: Found item or a value of some sort letting us know it was not found
        // Guess 1, 2, 3, 4, 5  . .. until you find the value you're looking for, or you get to the end of the list.
        
- Binary Search:
    // Items must be sorted for this algorithm to work
    // Input: Sorted list of values
    // Output: Found item or a value of some sort letting us know it was not found
        eg:  guess a num 1 - 100;  ask if num is >= 50.  If false, you do not need 50 - 100. Must be sorted
    // growth rate only increases by 1 or 2 from 10000 to 100000 etc.


    
            