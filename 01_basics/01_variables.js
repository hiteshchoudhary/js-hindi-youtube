"use strict";

/*
====================================================
 JavaScript Variable Declarations – Complete Guide
====================================================

This file demonstrates:
- const
- let
- var
- Scope (block vs function)
- Reassignment behavior
- Hoisting differences
- Temporal Dead Zone
- Object mutation with const
*/

console.log("===== BASIC DECLARATIONS =====");

// const → Block scoped, cannot be reassigned
const accountId = 144553;

// let → Block scoped, can be reassigned
let accountEmail = "hitesh@google.com";
let accountPassword = "12345";
let accountCity = "Jaipur";

// Declared but not initialized
let accountState; // undefined

// Reassigning let variables
accountEmail = "hc@hc.com";
accountPassword = "21212121";
accountCity = "Bengaluru";

// accountId = 2; ❌ TypeError (cannot reassign const)

console.table({
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState
});

console.log("\n===== BLOCK SCOPE (let & const) =====");

if (true) {
  let blockLet = "I am block scoped (let)";
  const blockConst = "I am block scoped (const)";
  var functionVar = "I ignore block scope (var)";

  console.log(blockLet);
  console.log(blockConst);
}

// console.log(blockLet); ❌ ReferenceError
// console.log(blockConst); ❌ ReferenceError
console.log(functionVar); // Accessible (var is function scoped)

console.log("\n===== FUNCTION SCOPE (var) =====");

function scopeTest() {
  var insideFunction = "I exist inside function";
  let insideBlock = "Also inside function";

  console.log(insideFunction);
  console.log(insideBlock);
}

scopeTest();
// console.log(insideFunction); ❌ Not accessible outside function

console.log("\n===== HOISTING BEHAVIOR =====");

// var is hoisted and initialized with undefined
console.log(hoistedVar); // undefined
var hoistedVar = "I was hoisted";

// let and const are hoisted but not initialized (TDZ)
// console.log(hoistedLet); ❌ ReferenceError
let hoistedLet = "Temporal Dead Zone example";

console.log("\n===== CONST WITH OBJECTS =====");

const user = {
  name: "Hitesh",
  age: 25
};

// Object properties can be modified
user.age = 26;

// But the object reference cannot be reassigned
// user = {}; ❌ TypeError

console.log(user);

console.log("\n===== BEST PRACTICES =====");

/*
1. Use const by default.
2. Use let only when reassignment is required.
3. Avoid var due to scope and hoisting confusion.
4. Always use 'use strict' in production.
*/

console.log("Variable demonstration completed successfully.");