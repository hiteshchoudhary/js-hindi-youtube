
function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

sayMyName()
/*
H
I
T
E
S
H
*/

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);
}

function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}


const result = addTwoNumbers(3, 5)
console.log("Result: ", result);
// Result:  8

function loginUserMessage(username = "sam"){
    if(!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage(""))
// Please enter a username
// undefined - as function returns nothing

console.log(loginUserMessage("hitesh"))
// hitesh just logged in




function calculateCartPrice(val1, val2, ...num1){
    return num1
}

console.log(calculateCartPrice(200, 400, 500, 2000))
// [ 500, 2000 ]


const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)
// Username is hitesh and price is undefined - prices and price are different keys

handleObject({
    username: "sam",
    price: 399
})
// Username is sam and price is 399

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
// 400
console.log(returnSecondValue([200, 400, 500, 1000]));
// 400