# When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means "Not a Number". If you concatenate a string with an `undefined` variable, you will get a string of `undefined`.


# Explore Differences Between the var and let Keywords

One of the biggest problems with declaring variables with the  `var`  keyword is that you can easily overwrite variable declarations:

```js
var camper = "James";
var camper = "David";
console.log(camper);

```

In the code above, the  `camper`  variable is originally declared as  `James`, and is then overridden to be  `David`. The console then displays the string  `David`.

In a small application, you might not run into this type of problem. But as your codebase becomes larger, you might accidentally overwrite a variable that you did not intend to. Because this behavior does not throw an error, searching for and fixing bugs becomes more difficult.

A keyword called  `let`  was introduced in ES6, a major update to JavaScript, to solve this potential issue with the  `var`  keyword. You'll learn about other ES6 features in later challenges.

If you replace  `var`  with  `let`  in the code above, it results in an error:

```js
let camper = "James";
let camper = "David";

```

The error can be seen in your browser console.

So unlike  `var`, when you use  `let`, a variable with the same name can only be declared once.

# The remainder operator is sometimes incorrectly referred to as the modulus operator. It is very similar to modulus, but does not work properly with negative numbers.

# String  values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```js
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';

```

# Concatenating Strings with Plus Operator


```js
'My name is Alan,' + ' I concatenate.'
```

# string.length - length of a string


# In JavaScript,  `String`  values are  immutable, which means that they cannot be altered once created.

For example, the following code will produce an error because the letter  `B`  in the string  `Bob`  cannot be changed to the letter  `J`:

```js
let myStr = "Bob";
myStr[0] = "J";

```

Note that this does  _not_  mean that  `myStr`  could not be re-assigned. The only way to change  `myStr`  would be to assign it with a new value, like this:

```js
let myStr = "Bob";
myStr = "Job";
```

# Variables which are declared without the let or const keywords are automatically created in the global scope. This can create unintended consequences elsewhere in your code or when running a function again. You should always declare your variables with let or const.

 In JavaScript, when a variable is declared without the `let`, `const`, or `var` keyword inside a function or a block (such as loops or conditionals), it automatically becomes a global variable. This means the variable is accessible from anywhere in your code, which can lead to unintended consequences and bugs, especially in larger or complex applications. 

Here's an example demonstrating the issue of unintentional global variables:

```javascript
function exampleFunction() {
    undeclaredVar = "I am global"; // This variable is now global, not recommended!
    let localVar = "I am local"; // This variable is local to the function.
    console.log(localVar); // Outputs: "I am local"
}

exampleFunction();
console.log(undeclaredVar); // Outputs: "I am global"
```

To avoid such issues, it's recommended to always declare your variables with `let` or `const` (preferably `const` when the variable's value won't change) to limit their scope to the block or function where they are needed. This practice helps prevent accidental variable reassignments and keeps your code more predictable and maintainable.

# It is possible to have both  local  and  global  variables with the same name. When you do this, the local variable takes precedence over the global variable.

In this example:


```js
const someVar = "Hat";

function myFun() {
  const someVar = "Head";
  return someVar;
}

```

The function  `myFun`  will return the string  `Head`  because the local version of the variable is present.

# The  `==`  just check the value,  `===`  check both the value and the type.

```javascript
0 == false   // true
0 === false  // false, different type
1 == "1"     // true,  automatic type conversion 
1 === "1"    // false, different type
null == undefined  // true
null === undefined // false
'0' == false       // true
'0' === false      // false

```

# In JavaScript, you can determine the type of a variable or a value with the  `typeof`  operator, as follows:

```js
typeof 3
typeof '3'

```

`typeof 3`  returns the string  `number`, and  `typeof '3'`  returns the string  `string`.


# Inequality Operator

The inequality operator (`!=`) is the opposite of the equality operator. It means not equal and returns  `false`  where equality would return  `true`  and  _vice versa_. Like the equality operator, the inequality operator will convert data types of values while comparing.

**Examples**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

#  Strict Inequality Operator

The strict inequality operator (`!==`) is the logical opposite of the strict equality operator. It means "Strictly Not Equal" and returns  `false`  where strict equality would return  `true`  and  _vice versa_. The strict inequality operator will not convert data types.

**Examples**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# Like the equality operator, the greater than operator(and also (> >= < <=)) will convert data types of values while comparing. (> >= < <=)

**Examples**

```js
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# [`undefined`  is a keyword](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/understanding-uninitialized-variables), not a string

In JavaScript, `undefined` is a special primitive value that represents the lack of a defined value. It is a type in JavaScript, just like numbers, strings, and objects. When a variable is declared but not assigned a value, it is automatically assigned the value `undefined`. Also, functions without a return statement implicitly return `undefined`.

Here are some common scenarios where `undefined` might occur:

## 1. Declared but Uninitialized Variable:
```javascript
let variable;
console.log(variable); // Outputs: undefined
```

## 2. Missing Function Return:
```javascript
function doSomething() {
    // No return statement, so the function implicitly returns undefined
}

console.log(doSomething()); // Outputs: undefined
```

## 3. Object Property That Doesn't Exist:
```javascript
let obj = {};
console.log(obj.propertyThatDoesNotExist); // Outputs: undefined
```

## 4. Accessing Array Element That Doesn't Exist:
```javascript
let arr = [1, 2, 3];
console.log(arr[10]); // Outputs: undefined (index 10 doesn't exist in the array)
```

## 5. Function Parameter Without a Value:
```javascript
function exampleFunction(parameter) {
    console.log(parameter); // Outputs: undefined if the function is called without an argument
}

exampleFunction(); // Outputs: undefined
```

It's important to handle `undefined` values in your code to prevent unexpected behavior. You can use conditional statements like `if` and `typeof` to check if a value is `undefined` before using it in your logic. For example:

```javascript
let variable;
if (typeof variable !== 'undefined') {
    // Do something with the variable
} else {
    // Handle the case where the variable is undefined
}
```

By checking the type of a variable before using it, you can avoid errors caused by undefined values.

# `undefined` vs `null`

In JavaScript, `undefined` and `null` are both special values that represent the absence of a value. However, they are used in slightly different contexts and have subtle differences in their behavior.

## `undefined`:

1. **Default Value**: When a variable is declared but not initialized, it has the value `undefined`.
   ```javascript
   let variable;
   console.log(variable); // Outputs: undefined
   ```

2. **Function Return**: Functions that do not explicitly return a value return `undefined` by default.
   ```javascript
   function exampleFunction() {
       // No return statement, so it implicitly returns undefined
   }

   console.log(exampleFunction()); // Outputs: undefined
   ```

3. **Object Properties**: If you access an object property that does not exist, it returns `undefined`.
   ```javascript
   let obj = {};
   console.log(obj.nonExistentProperty); // Outputs: undefined
   ```

## `null`:

1. **Intentional Absence**: `null` is a special value that indicates the intentional absence of any object value.
   ```javascript
   let variable = null;
   console.log(variable); // Outputs: null
   ```

2. **Explicit Assignment**: Developers can set a variable to `null` to indicate that it has no meaningful value or object reference.
   ```javascript
   let variable = null;
   ```

3. **Object Initialization**: Sometimes used to initialize object properties with no initial value.
   ```javascript
   let obj = {
       property: null
   };
   ```

In summary, `undefined` typically represents the absence of an expected value or an uninitialized variable, whereas `null` is often used to indicate the intentional absence of a value, usually in the context of objects and assignments. When checking for the absence of a value, it's important to use strict equality (`===`) to distinguish between `null` and `undefined`:

```javascript
let variable = null;
console.log(variable === null); // Outputs: true
console.log(variable === undefined); // Outputs: false
```

# Why `undefined`?

In JavaScript, both `undefined` and `null` represent the absence of a value, but they are used in slightly different contexts and have nuanced differences. Here are some reasons why `undefined` is often considered preferable to `null` in certain situations:

1. **Type Consistency:**
   - `undefined` is a type itself (a primitive type), whereas `null` is an object. Using `undefined` is more consistent with the concept of a missing or uninitialized value.

2. **Default Initialization:**
   - When a variable is declared but not assigned a value, it automatically has the value `undefined`. This can be useful for checking if a variable has been initialized or not.

     ```javascript
     let exampleVar;
     console.log(exampleVar); // Output: undefined
     ```

3. **Function Return Values:**
   - Functions in JavaScript that do not explicitly return a value automatically return `undefined`. This can be helpful in scenarios where the absence of a return value is significant.

     ```javascript
     function exampleFunction() {
       // No return statement, so the function returns undefined
     }
     ```

4. **Avoiding Unexpected Behavior:**
   - In some contexts, using `null` can lead to unexpected behavior due to its loose equality with `undefined` and other falsy values. Using `undefined` helps avoid such issues.

     ```javascript
     let x = null;
     console.log(x == undefined); // Output: true
     ```

5. **JSON Consistency:**
   - When serializing objects to JSON, properties with `undefined` values are typically omitted, which aligns with the idea of representing absence.

     ```javascript
     let obj = { prop1: undefined, prop2: "value" };
     console.log(JSON.stringify(obj)); // Output: {"prop2":"value"}
     ```

While both `undefined` and `null` have their use cases, the preference for `undefined` often stems from its default behavior, consistency, and alignment with JavaScript conventions. It's essential to consider the specific requirements of your code and choose the value that best fits the intended semantics.

# `null` in comparison

The behavior you've observed is due to type coercion in JavaScript when using loose equality (`==`) and comparison operators (`>=` and `<=`). Let's break down the explanations for each case:

1. **Strict Equality (`===`):**
   - `null === 0` evaluates to `false` because strict equality (`===`) checks for both value and type equality. `null` is of type `object`, and `0` is a number, so they are not equal in either value or type.

2. **Loose Equality (`==`):**
   - `null == 0` also evaluates to `false`. Even though `==` performs type coercion, it doesn't coerce `null` to a number. In loose equality, `null` is only loosely equal to `undefined` and no other value.

3. **Greater Than or Equal (`>=`) and Less Than or Equal (`<=`):**
   - `null >= 0` and `null <= 0` both evaluate to `true`. In these comparisons, `null` is coerced to `0` because it is loosely equal to `0` in the context of comparisons. This behavior is part of JavaScript's type coercion rules.

It's worth noting that relying on loose equality (`==`) and type coercion can lead to unexpected behavior, and it's often recommended to use strict equality (`===`) to avoid implicit conversions. Understanding the nuances of type coercion is crucial when working with JavaScript to ensure that comparisons behave as expected.

#  `Number(null) => 0` 

In JavaScript, null is a special value that represents an empty or unknown value. It's often used to indicate that a variable or property intentionally holds no value or that an object reference points to nothing.

# `isNaN()`

In JavaScript, the `isNaN()` function is used to determine whether a value is NaN (Not-a-Number). NaN is a special value in JavaScript that represents an unrepresentable or undefined value resulting from an operation, typically involving arithmetic operations with non-numeric values.

Here are the details about the `isNaN()` function:

### Syntax:
```javascript
isNaN(value)
```

### Parameters:
- `value`: The value to be tested for NaN. It can be any JavaScript value, including numbers, strings, objects, etc.

### Return Value:
- Returns `true` if the given value is NaN.
- Returns `false` if the given value is a number or a value that can be coerced into a number.

### Examples:

#### Example 1: Testing Numbers
```javascript
isNaN(123);      // false, 123 is a number
isNaN("hello");   // true, "hello" cannot be converted into a number
isNaN(NaN);       // true, NaN is always NaN
```

#### Example 2: Using with parseInt()
```javascript
isNaN(parseInt("123"));   // false, parseInt("123") returns a number (123)
isNaN(parseInt("hello")); // true, parseInt("hello") returns NaN
```

#### Example 3: Special Cases
```javascript
isNaN() // true  as parameter pass here is undefined
isNan("") // false as empty string coerces to 0
isNaN(undefined);    // true, undefined cannot be converted into a number
isNaN(null);         // false, null is considered a number in JavaScript
isNaN(true);         // false, true is considered as 1, which is a number
isNaN(false);        // false, false is considered as 0, which is a number
```

### Important Points:

1. **NaN Equality:** NaN is the only JavaScript value that is not equal to itself. This means `NaN !== NaN`. Therefore, you should not use equality operators (`==` or `===`) to test if a value is NaN. Instead, use the `isNaN()` function.

    ```javascript
    NaN === NaN;   // false
    isNaN(NaN);    // true
    ```

2. **parseFloat vs. parseInt:** `parseFloat()` and `parseInt()` functions can return NaN if they encounter non-numeric characters. If you want to check if a string can be parsed into a number, you can use `isNaN(parseFloat(value))` or `isNaN(parseInt(value))`.

    ```javascript
    isNaN(parseFloat("123.45"));   // false
    isNaN(parseFloat("hello"));    // true
    ```

3. **Conversion:** `isNaN()` function tries to convert the input value into a number before checking if it's NaN. If the input value cannot be converted into a number, `isNaN()` returns `true`.

    ```javascript
    isNaN("123");    // false, "123" can be converted into a number
    isNaN("abc");    // true, "abc" cannot be converted into a number
    ```

Remember, `isNaN()` is a useful tool for checking if a value is not a number, especially when you need to handle user input validation or data processing in JavaScript.

# `Number("") => 0`

In JavaScript, when you use the `Number()` constructor or the unary plus operator (`+`) to convert a value to a number, an empty string `""` is treated as zero (`0`). This behavior is specified in the ECMAScript standard and is a common convention in many programming languages.

Here's why an empty string evaluates to zero:

1. **Type Coercion:** JavaScript attempts to perform type coercion when you use the `Number()` constructor or the unary plus operator. Type coercion is the automatic conversion of values from one data type to another. In the case of an empty string, JavaScript tries to coerce it to a number.

2. **Default Value:** An empty string does not represent a valid numerical value. When JavaScript encounters an empty string in a context where a number is expected, it uses a default value. Since there is no valid number represented by an empty string, the default value is `0`.

### Examples:

```javascript
Number("");   // 0, empty string coerces to 0
+"";          // 0, empty string coerces to 0 using the unary plus operator
```

This behavior is consistent with JavaScript's dynamic typing, where variables can change types during the execution of a program. It provides a default behavior when converting non-numeric or empty values to numbers. However, it's crucial for developers to be aware of this behavior to avoid unexpected results when dealing with conversions in JavaScript.

# In JavaScript, there is no built-in function called `isNull()`. However, you can create a custom function to check if a value is `null`:

```javascript
function isNull(value) {
    return value === null;
}

// Example usage
console.log(isNull(null)); // true
console.log(isNull("Hello")); // false
console.log(isNull(123)); // false
```

In this example, the `isNull()` function takes a parameter `value` and checks if it is equal to `null`. If it is, the function returns `true`; otherwise, it returns `false`. This function can be used to test whether a variable or expression holds a `null` value.

# `string.length ===0`

Yes, there are several ways to check if a string is empty in JavaScript. Here are a few different methods:

### Method 1: Using `length` Property
```javascript
var str = "";

if (str.length === 0) {
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");
}
```

### Method 2: Using `!` (Negation) with the String
```javascript
var str = "";

if (!str) {
    console.log("The string is empty.");
} else {
    console.log("The string is not empty.");
}
```

In JavaScript, an empty string, `null`, `undefined`, `0`, and `NaN` are all considered "falsy" values. Therefore, using `!str` will evaluate to `true` if `str` is an empty string or any other falsy value, and `false` otherwise.

### Method 3: Using `trim()` Method
```javascript
var str = "   ";

if (str.trim() === "") {
    console.log("The string is empty or contains only whitespace.");
} else {
    console.log("The string is not empty and contains non-whitespace characters.");
}
```

The `trim()` method removes whitespace from both ends of a string. After trimming, if the resulting string has a length of 0, it means the original string contained only whitespace characters or was empty.

Choose the method that best fits your use case and coding style.

# `NaN ===NaN => false`

`NaN` (Not-a-Number) is a special value representing an unrepresentable numeric value resulting from an operation. It is never equal to any value, including itself.
Therefore, comparing `NaN` with any value, including `NaN` itself, will always result in `false`.


#  Comparing `undefined`, `null`, and `NaN` with Each Other:

1. **`undefined` vs. `null`**:

   - **Equality (`==`):** `undefined == null` evaluates to `true`. In loose equality comparison, `undefined` and `null` are considered equal.

   - **Strict Equality (`===`):** `undefined === null` evaluates to `false`. In strict equality comparison, `undefined` and `null` are **not** equal because they are of different data types.

2. **`undefined` vs. `NaN`** and **`null` vs. `NaN`**:

   - **Equality (`==`):** `undefined == NaN` and `null == NaN` both evaluate to `false`. `NaN` is not equal to `undefined` or `null` in loose equality comparison.

   - **Strict Equality (`===`):** `undefined === NaN` and `null === NaN` both evaluate to `false`. `NaN` is not equal to `undefined` or `null` in strict equality comparison.

### Examples:

```javascript
console.log(undefined == null); // true
console.log(undefined === null); // false

console.log(undefined == NaN); // false
console.log(undefined === NaN); // false

console.log(null == NaN); // false
console.log(null === NaN); // false
```

It's important to note that `NaN` (Not-a-Number) is a special value representing an unrepresentable numeric value resulting from an operation. It is never equal to any value, including itself. Therefore, comparing `NaN` with any value, including `NaN` itself, will always result in `false`.

Remember to use strict equality (`===`) to avoid unexpected type coercion behavior when comparing values in JavaScript.

