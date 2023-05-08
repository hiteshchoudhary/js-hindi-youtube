const user={
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`hello ${this.username}`)
        console.log(this)
    }

}

//calling function from user object

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()
// console.log(this)

// function chai(){
//     let username="hitesh"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="hitsh"
//     console.log(this.username)
// }
// chai()

// const chai=()=>{
//     let username="hitesh"
//     console.log(this);
// }
// chai()

// if you use curly brace you have to write 'return' 
// const addTwo=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addTwo(2,4))

// const addTwo=(num1,num2)=>num1+num2;

// //if you use round brace, you don't want to write 'return'
// const addTwo=(num1,num2)=>(num1+num2)
// console.log(addTwo(2,3))

const addTwo=(num1,num2)=>({username:"hitesh"})

console.log(addTwo(2,3))

const myArray=[2,4,5,6,7]

myArray.forEach((ele)=>{
    console.log(ele)
})