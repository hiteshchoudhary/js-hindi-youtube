// let num=null ?? 10;
//Nullish operator (??)
let num = undefined ?? 5 ?? 10;
console.log(num);

// for loop

for (let i = 1; i <= 10; i++) {
  // printing i for outer loop
  console.log(i);
  for (let j = 0; j <= 10; j++) {
    // printing j for innner loop
    console.log(j + "for loop " + i);
  }
}

/* break and continue
break --> use for breaking the loop from a perticular iteration
continue --> use for skip the perticular iteration and carry forward the loop
 */

/* 
loop for break condition
for (let i = 1; i <= 10; i++) {
  console.log("numbers are " + i);
  if (i == 5) {
    console.log("number detetcted");
    break;
  }
} 
*/

// loop for continue condition
for (let i = 0; i < 10; i++) {
  if (i == 5) {
    console.log("number is detected");
    continue;
  }
  console.log("numbers are " + i);
}
