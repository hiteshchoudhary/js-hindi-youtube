# Array copy makes shallow copy

To copy an array in JavaScript, there are a few different methods you can use. Here are a couple of common ways:

1. **Using the Spread Operator (...)**
   The spread operator (`...`) can be used to create a shallow copy of an array:

   ```javascript
   const originalArray = [1, 2, 3, 4, 5];
   const copiedArray = [...originalArray];

   console.log(copiedArray); // [1, 2, 3, 4, 5]
   ```

   Note that this creates a shallow copy, so if the array contains objects or other non-primitive values, they will be references to the same objects in both arrays.

2. **Using the `slice` Method**
   The `slice` method can also be used to create a shallow copy of an array:

   ```javascript
   const originalArray = [1, 2, 3, 4, 5];
   const copiedArray = originalArray.slice();

   console.log(copiedArray); // [1, 2, 3, 4, 5]
   ```

   Like the spread operator, this creates a shallow copy.

3. **Using `Array.from()`**
   Another approach is to use the `Array.from()` method:

   ```javascript
   const originalArray = [1, 2, 3, 4, 5];
   const copiedArray = Array.from(originalArray);

   console.log(copiedArray); // [1, 2, 3, 4, 5]
   ```

   This also creates a shallow copy.

Choose the method that best fits your needs based on your specific requirements for copying arrays in your JavaScript code.

# `splice` vs `slice`

`slice` and `splice` are two array methods in JavaScript, but they serve different purposes.

1. **`slice` method:**
   - **Purpose:** It is used to extract a portion of an array and returns a new array containing the selected elements.
   - **Syntax:** `array.slice(start, end)`
   - **Parameters:**
     - `start` (optional): The index at which to begin extraction. If omitted, it starts from the beginning of the array.
     - `end` (optional): The index at which to end extraction. The `slice` method extracts up to, but not including, the element at the specified index. If omitted, it extracts through the end of the array.
   - **Example:**
     ```javascript
     const originalArray = [1, 2, 3, 4, 5];
     const slicedArray = originalArray.slice(1, 4);
     // slicedArray will be [2, 3, 4]
     ```

2. **`splice` method:**
   - **Purpose:** It is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
   - **Syntax:** `array.splice(start, deleteCount, item1, item2, ...)`
   - **Parameters:**
     - `start`: The index at which to start changing the array.
     - `deleteCount`: The number of elements to remove from the array. If set to 0, no elements are removed.
     - `item1, item2, ...` (optional): The elements to add to the array at the specified `start` index.
   - **Example:**
     ```javascript
     const originalArray = [1, 2, 3, 4, 5];
     originalArray.splice(1, 2, 6, 7);
     // originalArray will be [1, 6, 7, 4, 5]
     ```

In summary, `slice` is used for extracting a portion of an array without modifying the original array, while `splice` is used for making in-place changes to an array by adding, removing, or replacing elements.

# `Array.of()`

The `Array.of()` method in JavaScript creates a new array instance with a variable number of arguments, regardless of the number or type of the arguments. It is useful when you want to create an array from a set of values, especially when those values might be of different types.

Here's an example:

```javascript
// Using Array.of()
var newArray = Array.of(1, 'hello', true, [1, 2, 3]);

console.log(newArray);
// Output: [1, 'hello', true, [1, 2, 3]]
```

In this example, `Array.of()` takes the arguments `(1, 'hello', true, [1, 2, 3])` and creates a new array with those values. The resulting array has the same elements and order as the arguments.

It's worth noting that `Array.of()` is different from the `Array()` constructor. When you use `Array()`, if you pass a single numeric argument, it will create an array with a given length. For example:

```javascript
var arr1 = Array(5);
console.log(arr1.length); // Output: 5

var arr2 = Array.of(5);
console.log(arr2.length); // Output: 1
```

In the first case (`Array(5)`), an array with a length of 5 is created, but it has no actual elements. In the second case (`Array.of(5)`), an array is created with a single element, which is the numeric value 5.

`Array.of()` helps avoid such confusion by ensuring that each argument is treated as an element of the array.

# Why there is `undefined` line printed for some executions (same can be seen in browser console)

If you're seeing "undefined" printed in the console for every execution of JavaScript, it typically means that the code you are running is producing a value that is not explicitly returned. In JavaScript, if a function does not have a `return` statement or if it explicitly returns `undefined`, the result is `undefined` by default.

For example:

```javascript
function exampleFunction() {
  // no return statement
}

console.log(exampleFunction()); // Output: undefined
```

Or:

```javascript
function exampleFunction() {
  return undefined;
}

console.log(exampleFunction()); // Output: undefined
```

# Optional Chaining 

Optional chaining is a feature introduced in ECMAScript 2020 (ES11/ES2020) that allows you to simplify the process of accessing properties on objects when it's possible that intermediate properties may be `null` or `undefined`. It makes your code more concise and avoids the need for explicit checks for each property in a chain.

Here's an example without optional chaining:

```javascript
let person = {
  name: 'John',
  address: {
    city: 'New York'
  }
};

// Without optional chaining
let cityName = person && person.address && person.address.city;

console.log(cityName);  // Output: New York
```

And here's the same example using optional chaining:

```javascript
let person = {
  name: 'John',
  address: {
    city: 'New York'
  }
};

// With optional chaining
let cityNameOptional = person?.address?.city;

console.log(cityNameOptional);  // Output: New York
```

If any part of the chain (`person`, `address`, or `city`) is `null` or `undefined`, the result of the entire expression will be `undefined`. This can help prevent errors when dealing with nested object properties, especially when working with data that might be incomplete or dynamically loaded.

Keep in mind that optional chaining is supported in modern browsers and environments, but older environments may not support it. If you're working on a project that requires broader compatibility, consider using transpilers like Babel to convert your modern JavaScript code into a version that's compatible with older environments.

# Destructuring JS Objects 

Destructuring in JavaScript is a way to extract values from objects or arrays and assign them to variables in a more concise and convenient manner. When it comes to destructuring objects, you can use the following syntax:

```javascript
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  }
};

// Destructuring assignment
const { firstName, lastName, age, address: { city, country } } = person;

console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe
console.log(age);       // Output: 30
console.log(city);      // Output: New York
console.log(country);   // Output: USA
```

In the example above, the `person` object has properties such as `firstName`, `lastName`, `age`, and `address`. The destructuring assignment allows you to extract these properties and assign them to variables with the same names.

You can also rename the variables during destructuring:

```javascript
const { firstName: fName, lastName: lName } = person;

console.log(fName); // Output: John
console.log(lName); // Output: Doe
```

This way, you're extracting the `firstName` property from the `person` object and assigning it to a variable named `fName`, and similarly for the `lastName` property.

Destructuring is commonly used in function parameters to extract values directly. Here's an example:

```javascript
function printPersonInfo({ firstName, lastName, age }) {
  console.log(`${firstName} ${lastName}, ${age} years old`);
}

printPersonInfo(person);
// Output: John Doe, 30 years old
```

In this function, the destructuring is done within the function parameter list, allowing you to directly access the properties of the passed object.

# Array destructuring 

Array destructuring is a feature in JavaScript that allows you to extract values from arrays or iterable objects and assign them to variables in a more concise way. It provides a convenient syntax for breaking down an array into individual elements.

Here's a basic example of array destructuring:

```javascript
// Basic array
const fruits = ['apple', 'banana', 'orange'];

// Destructuring assignment
const [firstFruit, secondFruit, thirdFruit] = fruits;

console.log(firstFruit);  // Output: 'apple'
console.log(secondFruit); // Output: 'banana'
console.log(thirdFruit);  // Output: 'orange'
```

You can also skip elements by leaving an empty space:

```javascript
const [, , thirdFruit] = fruits;
console.log(thirdFruit);  // Output: 'orange'
```

Array destructuring is often used in functions to extract values from the returned array:

```javascript
function getFruits() {
  return ['apple', 'banana', 'orange'];
}

const [first, second, third] = getFruits();

console.log(first);  // Output: 'apple'
console.log(second); // Output: 'banana'
console.log(third);  // Output: 'orange'
```

You can also use the rest parameter (`...`) to collect the remaining elements into a new array:

```javascript
const [first, ...restOfFruits] = fruits;

console.log(first);          // Output: 'apple'
console.log(restOfFruits);   // Output: ['banana', 'orange']
```

Array destructuring can make your code more concise and readable, especially when dealing with functions that return arrays or when working with complex data structures.

# `Object.assign`

`Object.assign` is a method in JavaScript that is used for copying the values of all enumerable properties from one or more source objects to a target object. It has the following syntax:

```javascript
Object.assign(target, source1, source2, ...);
```

- `target`: The target object to which the properties will be copied. This object will be modified and returned.
- `source1`, `source2`, ...: One or more source objects whose properties will be copied to the target object.

Here's a detailed explanation of how `Object.assign` works:

1. **Property Assignment:**
   - For each source object, `Object.assign` iterates over all enumerable own properties (including those that are non-enumerable).
   - It copies the property values to the target object.

2. **Overwriting Properties:**
   - If a property with the same name exists in both the target and source objects, the property in the target object will be overwritten with the value from the source object.

3. **Enumerable Properties Only:**
   - `Object.assign` only copies enumerable properties. Non-enumerable properties and properties on the prototype chain are ignored.

4. **Primitive Values:**
   - If a source object has a primitive value (e.g., a string, number, boolean), `Object.assign` treats it as if it were an object with a single property of the same primitive value. This property is then copied to the target object.

5. **Returns the Target Object:**
   - The modified target object is returned as the result of the `Object.assign` operation.

6. **Mutability:**
   - `Object.assign` modifies the target object in place. If you want to create a new object without modifying any existing objects, you can use an empty object as the target.

```javascript
const target = {};
const source = { foo: 1, bar: 2 };

const result = Object.assign(target, source);

console.log(target); // { foo: 1, bar: 2 }
console.log(result); // { foo: 1, bar: 2 }
console.log(target === result); // true
```

7. **Use Cases:**
   - `Object.assign` is often used for object cloning, merging objects, and updating objects with new properties.

```javascript
// Object cloning
const clone = Object.assign({}, source);

// Merging objects
const merged = Object.assign({}, obj1, obj2);

// Updating object with new properties
const original = { a: 1, b: 2 };
const updated = Object.assign({}, original, { b: 3, c: 4 });
```

8. **Immutability with Object Spread:**
   - If you want to achieve immutability without modifying any objects, you can use the object spread syntax introduced in ECMAScript 2018.

```javascript
const target = { a: 1 };
const source = { b: 2 };

const result = { ...target, ...source };

console.log(target); // { a: 1 }
console.log(source); // { b: 2 }
console.log(result); // { a: 1, b: 2 }
```

Keep in mind that `Object.assign` does not perform a deep copy. Nested objects are still referenced, and modifying them will affect both the source and target objects. If deep copying is required, additional techniques are needed, such as recursion or using libraries like `lodash` or the spread syntax with nested objects.

