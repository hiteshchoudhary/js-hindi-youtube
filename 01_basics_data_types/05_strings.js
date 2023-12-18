const name = "hitesh"
const repoCount = 50

console.log(name + repoCount + " Value");//hitesh50 Value

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //Hello my name is hitesh and my repo count is 50
// name is reserved word in global context hence warning is showing - 'name' is deprecated.ts(6385) 

const gameName = new String('hitesh-hc-com')

console.log(gameName[0]);//h

// This code prints the prototype of the variable gameName, which is a string. The prototype contains all the functions available for strings in JavaScript.
console.log(gameName.__proto__);

console.log(gameName.length);//13
console.log(gameName.toUpperCase());//HITESH-HC-COM
console.log(gameName.charAt(2));//t
console.log(gameName.indexOf('t'));//2

const newString = gameName.substring(0, 4)
console.log(newString);//hite

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // blank line

const newStringOne = "   hitesh    "
console.log(newStringOne);//   hitesh    
console.log(newStringOne.trim());//hitest

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//https://hitesh.com/hitesh-choudhary

console.log(url.includes('sundar'))//false

console.log(gameName.split('-'));//[ 'hitesh', 'hc', 'com' ]

