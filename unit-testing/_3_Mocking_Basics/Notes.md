Mocking
- When you need to test something like a credit card transaction without doing real network calls
    or reall requests.
- Network calls can fail as well which would cause the test to fail, so mock functions return fake values
    so we can make sure it's called the correct way

Example
- Thing of the purchase of items across the world and the different tax rates (that change over time)
    How the f*9k do you test that?
   
- In the test.js, all the tests were changed to expect a return promise
        - "mocking" and api response
    - Then the function returned a Promise.resolve as it simulates a returned promise 
        bringin back data.
