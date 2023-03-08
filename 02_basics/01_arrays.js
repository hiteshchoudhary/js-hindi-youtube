const myArr = [0, 1, 2, 3, 4, 5]
const myHeros = ["shaktiman", "naagraj"]
const myArr2 = new Array(1, 2, 3, 4, 5)

// access the array value
// console.log(myArr[1] + myArr2[3]);

console.log(myArr.length);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(0)
// myArr.shift()
// console.log(myArr.reverse());

// console.log(myArr.includes("3"));
// console.log(myArr.indexOf(3));
const newArr = myArr.join()
console.log(typeof newArr);

// slice splice

console.log("A", myArr);

const myn1 = myArr.slice(1, 3)
console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
console.log(myn2);

console.log("C", myArr);
