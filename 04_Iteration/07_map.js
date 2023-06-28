
// map is funtion which return the values after some operations.
const values=[1,2,3,4,5,6,7,8,9];

let value=values.map( (ele)=> ele*2 );
// console.log(value);

let num=values.map( (ele)=>{
    return ele+10;
} );
// console.log(num);


//chaning of funcions
let newValues=values.map((ele)=>ele*10).map((ele)=>ele+1).filter((ele)=> ele>30);
console.log(newValues);