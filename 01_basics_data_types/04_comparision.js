// Compares different data types using comparison operators
// Logs results of comparing numbers, strings, null and undefined to console
console.log(2 > 1);//true
console.log(2 >= 1);//true
console.log(2 < 1);//false
console.log(2 == 1);//false
console.log(2 != 1);//true

console.log("2" > 1);//true
console.log("02" > 1);//true

/**
 * Compares null value to numbers using comparison operators.
 * Logs results of comparing null to 0 to console.
 * Null is treated as 0 in comparisons.
 * 
 * 
> null === 0
false
> null == 0
false
> null >=0
true
> null <=0
true
> 
 */
console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true

console.log(undefined == 0);//false
console.log(undefined > 0);//false
console.log(undefined < 0);//false

// ===

console.log("2" === 2);//false
