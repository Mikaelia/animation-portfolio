---
title: Javascript's Function Argument Object
date: "2020-06-30"
description: "All about function arguments."
published: true
tags: Javascript
---

`arguments` is an array-like object available within Javascript functions. As its name suggests, `arguments` contains the values of the arguments passed to the function within which it is accessed.

Similar to arrays, the arguments object has a length property. In addition, its values are ordered, and can be retrieved via index:

```javascript
function argAtIndex(num1, num2) {
    console.log(arguments.length) // 2
    console.log(arguments[0]);    // 1
    console.log(arguments[1]);    // 2
}

argAtIndex(1, 2);
```

Unlike arrays,  `arguments` does not have any built-in array methods like map(), filter(), splice(), etc.

Nevertheless, we can convert `arguments` into an array easily:

```javascript 
function argsToArray(num1, num2) {
    // Using ES6 spread operator
    console.log([...arguments])        // [1,2]

    // Using static method Array.from
    console.log(Array.from(arguments)) // [1,2]
}

argsToArray(1, 2);
```

This information is particularly useful when working with functions that are called with more arguments than they have been declared to accept. It’s also useful for creating functions that can be passed a variable number of arguments:

```javascript
function concatStrings(){
    return [...arguments].reduce((s, v) => {
      return s+=v
    }, "")
}

concatStrings("Hello ", "there", "!")

// -> "Hello there!"
```

## Arrow Functions and the `rest` Parameter

Arrow functions do not have an arguments binding in their scope. In other words, no arguments `object` is created they are called.

However, if you do want to capture arguments in an arrow function, you can use the rest parameter.

With the rest parameter (...args), the memoize function below will accept a function as a parameter, and call it with whatever number of arguments are provided. This pattern allows memoize to be incredible flexible in it's application.

```javascript
function memoize(fn) {
    const cache = {};
    return function(...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
    };
}
```

Another familiar example is the debounce method. Here, a generic callback function can again accept any number of arguments: 

```javascript
const debounce = (callback, delay = 250) => {
    let timeoutId
    return (...args) => {
        clearTimeout(timeoutId)
        timeoutId = setTimeout(() => {
          timeoutId = null
            
          // Using spread syntax instead of apply
          callback(...args)
        }, delay)
    }
}
```


Rest parameters can also be combined with other parameters, but must always be included as the last parameter:

```javascript
const additionalParams = (a, b, c, ...rest) => {
	console.log (a, b, c, rest) // 1 2 3 [ 4, 5, 6, 7 ]
}
additionalParams(1, 2, 3, 4, 5, 6, 7)
```

