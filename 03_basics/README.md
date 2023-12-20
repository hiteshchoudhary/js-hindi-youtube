# Function overloading in JS

JavaScript does not support function overloading in the traditional sense, as you might find in languages like Java or C++. However, you can achieve similar behavior by using a variety of techniques. One common approach is to check the number and types of arguments within the function and then handle them accordingly. Here's an example:

```javascript
function exampleFunction() {
  // Check the number of arguments
  if (arguments.length === 0) {
    // No arguments provided
    console.log("No arguments");
  } else if (arguments.length === 1) {
    // One argument provided
    console.log("One argument: " + arguments[0]);
  } else if (arguments.length === 2) {
    // Two arguments provided
    console.log("Two arguments: " + arguments[0] + " and " + arguments[1]);
  } else {
    // Handle other cases as needed
    console.log("More than two arguments");
  }
}

// Examples
exampleFunction();                 // No arguments
exampleFunction("FirstArg");       // One argument: FirstArg
exampleFunction("FirstArg", 42);   // Two arguments: FirstArg and 42
exampleFunction("FirstArg", 42, true);   // More than two arguments
```

In this example, the function `exampleFunction` checks the number of arguments passed to it using the `arguments` object and then performs different actions based on the number of arguments. You can customize this logic to handle different argument combinations and types as needed.

Another modern approach is to use default parameter values and the rest parameter (`...`) to achieve a more concise and readable syntax:

```javascript
function exampleFunction(arg1 = "DefaultArg1", arg2 = "DefaultArg2", ...rest) {
  console.log("Arguments:", arg1, arg2);
  if (rest.length > 0) {
    console.log("Additional arguments:", rest);
  }
}

// Examples
exampleFunction();                 // Arguments: DefaultArg1 DefaultArg2
exampleFunction("CustomArg1");     // Arguments: CustomArg1 DefaultArg2
exampleFunction("CustomArg1", "CustomArg2", "ExtraArg1", "ExtraArg2");
// Arguments: CustomArg1 CustomArg2
// Additional arguments: ExtraArg1 ExtraArg2
```

This approach allows you to set default values for parameters and handle additional arguments using the rest parameter.

# `arguments` object is a local variable available within all functions

In JavaScript, the `arguments` object is a local variable available within all functions that provides a way to access the arguments passed to a function. It's not exactly a standard array, but it behaves like an array in many ways. The `arguments` object contains an entry for each argument passed to the function, indexed by position.

Here's a simple example:

```javascript
function exampleFunction(arg1, arg2) {
  console.log(arguments); // The arguments object
  console.log(arguments.length); // Number of arguments

  // Accessing individual arguments
  console.log(arguments[0]); // Value of the first argument
  console.log(arguments[1]); // Value of the second argument
}

exampleFunction('Hello', 42);
```

In the example above, `arguments` will be an object with properties corresponding to the arguments passed to the function (`'Hello'` and `42`). Note that the `arguments` object does not have array methods like `forEach` or `map`. If you want to convert it to an array or use array methods, you can do so explicitly:

```javascript
function exampleFunction(arg1, arg2) {
  // Convert arguments to an array
  var argsArray = Array.from(arguments);
  console.log(argsArray);

  // Or using the spread operator (ES6+)
  var argsArrayES6 = [...arguments];
  console.log(argsArrayES6);
}

exampleFunction('Hello', 42);
```

Starting from ECMAScript 6 (ES6), you can also use the rest parameter to collect all remaining arguments into an array:

```javascript
function exampleFunction(...args) {
  console.log(args);
}

exampleFunction('Hello', 42);
```

In this case, `args` is an array containing all the arguments passed to the function. The rest parameter is a more modern and preferred way to handle variable numbers of arguments.

# Two functions with same name - second one overwrite first

In JavaScript, when you declare two functions with the same name, the second one will overwrite the first one. This is because function declarations are hoisted, and only the last declaration takes effect. In your case, both functions have the same name `addTwoNumbers`, but only the second one will be present after the code is executed.

Here's what happens in your example:

```javascript
function addTwoNumbers(number1, number2){
    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){
    // This function overwrites the previous one
    return number1 + number2;
}

// Now only the second function is available
```

When you call `addTwoNumbers`, it will use the second function, and the first function is effectively replaced.

If you want to have multiple functions with the same name but different implementations, you can achieve that by using different variable types or by assigning the functions to properties of an object. Here's an example using different variable types:

```javascript
// Function declaration
function addTwoNumbersV1(number1, number2){
    console.log(number1 + number2);
}

// Function expression assigned to a variable
var addTwoNumbersV2 = function(number1, number2){
    return number1 + number2;
};

// Using the functions
addTwoNumbersV1(2, 3); // Logs: 5
console.log(addTwoNumbersV2(2, 3)); // Prints: 5
```

In this example, `addTwoNumbersV1` is a function declaration, and `addTwoNumbersV2` is a function expression assigned to a variable. They can coexist because they are different types of declarations.

# Rest parameter 

In JavaScript, the rest parameter is represented by the ellipsis (`...`) and allows a function to accept an indefinite number of arguments as an array. This feature simplifies working with functions that can take a variable number of parameters. The rest parameter must be the last parameter in the function's parameter list.

Here's a basic syntax example:

```javascript
function myFunction(param1, param2, ...restParams) {
  // param1 and param2 are regular parameters
  // restParams is an array containing the rest of the parameters
  console.log(param1);
  console.log(param2);
  console.log(restParams);
}

myFunction(1, 2, 3, 4, 5);
```

In this example, `param1` and `param2` are regular parameters, and `restParams` is the rest parameter that collects the remaining arguments into an array. When you call `myFunction(1, 2, 3, 4, 5)`, the output will be:

```
1
2
[3, 4, 5]
```

The rest parameter can also be used with the destructuring assignment to separate specific values from the rest of the parameters:

```javascript
function myFunction(...[first, second, ...rest]) {
  console.log(first);   // Output: 1
  console.log(second);  // Output: 2
  console.log(rest);    // Output: [3, 4, 5]
}

myFunction(1, 2, 3, 4, 5);
```

In this case, the first and second parameters are extracted from the array, and the rest of the parameters are collected in the `rest` array.

# Scopes 

In JavaScript, the term "scope" refers to the context in which variables are declared and accessed. It defines the visibility and accessibility of variables in different parts of your code. Understanding the scope is crucial for managing variables and avoiding naming conflicts.

JavaScript has two main types of scope:

1. **Global Scope:**
   - Variables declared outside of any function or block have global scope.
   - Global variables are accessible from any part of the code, including functions.
   - However, using too many global variables can lead to naming conflicts and make the code harder to maintain.

   Example of a global variable:
   ```javascript
   var globalVariable = 10;

   function exampleFunction() {
     console.log(globalVariable); // Accessible inside the function
   }
   ```

2. **Local Scope:**
   - Variables declared inside a function or block have local scope.
   - Local variables are only accessible within the function or block where they are declared.
   - This helps in encapsulating variables and preventing unintended side effects.

   Example of local scope:
   ```javascript
   function exampleFunction() {
     var localVariable = 20;
     console.log(localVariable); // Accessible inside the function
   }

   // console.log(localVariable); // This would result in an error
   ```

JavaScript also has a concept called "lexical scope," which means that the scope of a variable is determined by its location in the source code. Functions in JavaScript form closures, which means they have access to variables from their containing (enclosing) scope even after the outer function has finished executing.

Example of lexical scope:
```javascript
function outerFunction() {
  var outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  innerFunction();
}

outerFunction();
```

# Fucntion hoisting 

Function hoisting is a behavior in JavaScript where function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can call a function before it is declared in the code, and the JavaScript engine will still be able to find and execute the function.

Here's an example of function hoisting:

```javascript
// Example 1: Function Declaration
hoistedFunction(); // This works even though the function is called before its declaration

function hoistedFunction() {
  console.log('Function has been hoisted!');
}

// Example 2: Function Expression
// This does not work because function expressions are not hoisted in the same way as function declarations
nonHoistedFunction(); // This will result in an error

var nonHoistedFunction = function() {
  console.log('This will not work due to function expression.');
};
```

In the first example, the function `hoistedFunction` is declared using a function declaration, and it can be called before its actual declaration in the code. This is possible because function declarations are hoisted to the top of their scope.

In the second example, the variable `nonHoistedFunction` is assigned a function expression. Function expressions are not hoisted in the same way as function declarations, so trying to call `nonHoistedFunction` before its assignment will result in an error.

It's important to note that while function declarations are hoisted, variable declarations are also hoisted, but only the variable name is hoisted, not its value. This can lead to some unexpected behavior if not understood correctly.



# `this` in Javascript

In JavaScript, `this` is a keyword that refers to the current execution context, or the object to which a function or method belongs. The value of `this` is determined by how a function is called, and it can behave differently in various situations. Understanding `this` is crucial for working with object-oriented programming and handling different contexts within your code.

Here are some key points about `this` in JavaScript:

1. **Global Context:**
   - Outside of any function or method, `this` refers to the global object, which is often `window` in a browser environment.
   - ***Window is global object in DOM***

    ```javascript
    console.log(this); // refers to the global object (e.g., window in a browser and {} empty object in Node)
    ```

2. **Function Context:**
   - In a regular function (not an arrow function), `this` is determined by how the function is called.
   - If the function is called as a method of an object, `this` refers to the object itself.

    ```javascript
    const obj = {
      name: "MyObject",
      sayName: function() {
        console.log(this.name);
      }
    };

    obj.sayName(); // logs "MyObject" because sayName is called as a method of obj
    ```

3. **Constructor Context:**
   - When a function is used as a constructor (i.e., called with the `new` keyword), `this` refers to the newly created instance of the object.

    ```javascript
    function Person(name) {
      this.name = name;
    }

    const person1 = new Person("John");
    console.log(person1.name); // logs "John"
    ```

4. **Event Handlers:**
   - In event handlers, `this` often refers to the element that triggered the event.

    ```javascript
    document.getElementById("myButton").addEventListener("click", function() {
      console.log(this); // refers to the button element
    });
    ```

5. **Arrow Functions:**
   - Arrow functions do not have their own `this` context. Instead, they inherit `this` from the enclosing scope (lexical scoping).

    ```javascript
    const obj = {
      sayName: function() {
        setTimeout(() => {
          console.log(this.name);
        }, 1000);
      }
    };

    obj.name = "MyObject";
    obj.sayName(); // logs "MyObject" even though setTimeout is asynchronous
    ```

6. **Explicitly Setting `this`:**
   - You can explicitly set the value of `this` using `call`, `apply`, or `bind` methods.

    ```javascript
    function greet() {
      console.log(`Hello, ${this.name}`);
    }

    const person = { name: "John" };

    greet.call(person); // logs "Hello, John"
    ```

Understanding the value of `this` in different contexts is crucial for writing effective and bug-free JavaScript code. Keep in mind that the behavior of `this` can vary, so it's essential to be aware of the specific rules that apply in each situation.
