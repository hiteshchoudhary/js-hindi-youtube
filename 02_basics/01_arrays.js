// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]); 

// Array methods 

// myArr.push(6) to add value 
// myArr.push(7)
// myArr.pop()  remove last value 

// myArr.unshift(9) insert value at 0 index and shift all the value by 1 
// myArr.shift() remove firs5t value 

// console.log(myArr.includes(9));  tell true and false the value exist in array or not 
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() convert into string 

// console.log(myArr);
// console.log( newArr);


// slice, splice  

console.log("A ", myArr);  // 

const myn1 = myArr.slice(1, 3)  //not print last own and not change in orginal array 

console.log(myn1);
console.log("B ", myArr); 


const myn2 = myArr.splice(1, 3)  // print also last own and change in orginal array means erase the range 1 to 3 
console.log("C ", myArr);
console.log(myn2);
