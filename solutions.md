## ALTERNATE SOLUTIONS

### Solution 1
```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const a = 2 * Math.PI;
  const newArr = [];

  const getOrbPeriod = function(obj) {
    const c = Math.pow(earthRadius + obj.avgAlt, 3);
    const b = Math.sqrt(c / GM);
    const orbPeriod = Math.round(a * b);
    // create new object
    return {name: obj.name, orbitalPeriod: orbPeriod};
  };

  for (let elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```

### Code Explanation
- **GM** and **earthRadius** are both given to us.
- To make the code easier to edit and read, each part of the equation is written separately.
- Create **newArr** to store the `orbPeriod`'s.
- **a** is 2 times pi.  The part that is constant is on the global scope while the rest is part of a function.
- Create a function, `getOrbPeriod()` that will do the required work for an amount of objects.
- **c** is (**earthRadius** + **avgAlt**) to the cube.
- **b** is the square root of **c** divided by **GM**.
- Create **orbPeriod** to store the product of **a** and **b**, with the `Math.round()` function applied to round up to the next whole number.
- Then we delete the key **avgAlt**, and add the new key and its value.

### REFERENCE LINKS
- [JS For In Loops](https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-iterate-with-javascript-for-loops/18219)
- [JS Array Prototype Push](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-push-javascript-push-explained-with-examples/14298)


### Solution 2
```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  const newArr = [];

  //Looping through each key in arr object
  for (let elem in arr) {
    //Rounding off the orbital period value
    const orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
    );
    //Adding new object with orbitalPeriod property
    newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
  }

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```

### Code Explanation
- **GM** and **earthRadius** are both given to us.
- A `for..in` loop is used to iterate through each value in given array **arr**.
- **orbitalPer** holds the value of orbital period for each iteration calculated using the formula.
- The key **avgAlt** is deleted, and **orbitalPer** found is assigned in **arr**.


### Solution 3
```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  // Create new array to prevent modification of the original
  const newArr = JSON.parse(JSON.stringify(arr));
  // Loop through each item in the array arr
  newArr.forEach(function(item) {
    // Calculate the Orbital period value
    const tmp = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM)
    );
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });

  return newArr;
}

// test here
orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);
```

### Code Explanation
- **GM** and **earthRadius** are both given to us.
- The **forEach()** method is used to execute the function once per element (**item**) in **arr**.
- **tmp** holds the value of orbital period for each element calculated using the formula.
- The key **avgAlt** is deleted, and orbital period (**tmp**) found is assigned to the key **orbitalPeriod**.

### REFERENCE LINKS
- [JS Array Prototype ForEach](https://forum.freecodecamp.org/t/how-to-use-javascript-array-prototype-foreach-foreach-explained-with-examples/14290)


### Solution 4
```js
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;
  return arr.map(({ name, avgAlt }) => {
    const earth = earthRadius + avgAlt;
    const orbitalPeriod = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earth, 3)/GM));
    return { name, orbitalPeriod };
  });
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
```

