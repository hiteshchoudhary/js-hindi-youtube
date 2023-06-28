
// filters are used for filter the values and return it 
// foreach loop does not return the values diectly

const values=[1,2,3,4,5,6,7,8,9,10];

//forEach function with callback
values.forEach( (value)=>{
// console.log(value);
});
 
// filter function without return keyword
let num= values.filter( (value) =>value>4); //--> if we had not used curly bracket then there is no need to write return keyword 
// console.log(num);

const numbers=values.filter( (value)=> {
    return value>4;                        // return statement is needed
});
console.log(numbers);



const myBooks=[
    {}
]