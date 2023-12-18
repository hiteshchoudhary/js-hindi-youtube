// singleton - if we used constructor or Object.create method
// Object.create 

// object literals - if we direct create objects using { }

const mySym = Symbol("key1") // this is how we create property of type Symbol


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // Syntax for property of type Symbol 
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

// JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // freezing so cannot modify object further
// JsUser.email = "hitesh@microsoft.com" // value not updated 
// console.log(JsUser);
/*
{
  name: 'Hitesh',
  'full name': 'Hitesh Choudhary',
  age: 18,
  location: 'Jaipur',
  email: 'hitesh@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'mykey1'
}
*/

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`); // this refering current object
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
/*
Hello JS user
undefined - because function returns nothing [undefined]
Hello JS user, Hitesh
undefined
*/
