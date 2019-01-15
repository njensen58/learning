Why Unit testing?
- Essentially, any piece of software will eventually grow to a size where even
    the smartest of individuals cannot comprehend it's entirety, so breaking apart
    some of the complexity into managable units is essential.

- Tests are really good documentation for your code for your future self and colleagues



Proper way to write unit tests:
- Most importantly, you write the tests first!  RED - GREEN - RED - GREEN  LOOP
    - It helps ensure you write the tests in the first place(good practice)
        - Soup Analogy: not keeping track of what you put in, hard to get it all by looking through the soup
    - First you test it and should see the function is undefined
    - Then you go write the function and test it again to see what the new error is

The problem you'll instantly face with a single unit test:
- I could write a function to just return the value the test is expecting, so a single test is not
    enough to get a true reading of a functions purpose and test that purpose.


- ** 3 Approaches ** :
    - Trianglation:
        - Feed in different data sets to confirm the expected output for each.

    - Obvious Implementation:
        - Write the obvious function to solve it

    - Fake it till you make it:
        - Write the hard coded value in first



Test Runners: 
- Mocha, Jest

Why Test Runners?:
- DRY
- Pretty test results, green pretty stuff
- They run all of your tests even if one of the tests break!(unlike vanilla js tests)
- More predictable for the team as it looks a specific way
- Makes it easier to do Continuous Integration 'CI'
- Auto-run tests!!!
    - Everytime you save, the test running will fire and automatically re-test your current code

    See part 2!!!