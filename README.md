# fcc-intermediate-algorithm-scripting-lesson-21

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-ullldr)

## PROBLEM EXPLANATION
The first thing to do is to get familiar with what the program is for by knowing what Orbital period exactly is.  You've to return a new array that transofrms the element's average altitude into their orbital periods.  The parts generally found hard are finding the formula, implementing it and for some people, modifying objects by the key.  However, something that is not very clear is the fact that your program has to be able to check for any number of objects in the array; This is what is tested on the second part.

### REFERENCE LINKS
- [Orbital period](https://en.wikipedia.org/wiki/Orbital_period)
- [JS Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- [Math.PI](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
- [JS Math Pow](https://forum.freecodecamp.org/t/javascript-exponents-explained-math-pow-examples/14685)
- [Math.sqrt()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt)
- [Math.round()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/round)

## HINTS

### Hint 1
The formula needed is:
T = 2 * π * (√(a^3 / µ) 

### Hint 2
Use `Math.round()` to round up to the next whole number as requested.  Using `Math.ceil()` will let you pass the first test but fail the second one.

### Hint 3
Find out how to remove and add key to a JavaScript object.

