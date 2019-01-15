Why Jest? 
- While not super important, Jest is:
    - Estalished
    - Testing tool that comes bundled with create-react-app
    - Battle tested
    - Ready to use!
    - Includes an Assertion and a Mocking library

Tests by default in the package.json are not specified, so `npm test` does nothing
- To use Jest, simply replace the default string to `jest` and now you can `npm test` using jest.
- has an `it` tester
- add a "watch" script in package.json `npm run watch` to have the testrunner alive and run 
    without having to keep type npm test.
    - Must add "watch": "jest --watch *.js"


Useful Jest introduction methods:
- expect().toBe()
- expect(functionCall(data)).toBe(outputData)