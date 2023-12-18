// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(myArr[1]); //1

// Array methods

myArr.push(6) // add Last
myArr.push(7) 
myArr.pop() // delete last

myArr.unshift(9) // add First
myArr.shift() // delete first

console.log(myArr.includes(9)); // false
console.log(myArr.indexOf(3)); // 3

const newArr = myArr.join() // returns string

console.log(myArr); 
// [
// 0, 1, 2, 3,
// 4, 5, 6
// ]
console.log( newArr);
//0,1,2,3,4,5,6 - this is string


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);

/*
myArr -
A  [
  0, 1, 2, 3,
  4, 5, 6
]

myn1 - slice
[ 1, 2 ]

myArr - after slice no change
B  [
  0, 1, 2, 3,
  4, 5, 6
]

myArr - after splice changed
C  [ 0, 4, 5, 6 ]

myn2 - splice
[ 1, 2, 3 ]
*/