// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

/*
benefit of this loop that you don't have worry about the starting and ending point of this this loop will take care of it, itself
for example:-
output for this is 
1
2
3
4
5
*/

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}
/*
Each char is H
Each char is e
Each char is l
Each char is l
Each char is o
Each char is     (space).
Each char is w
Each char is o
Each char is r
Each char is l
Each char is d
Each char is !
*/



// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

/* 
Map(3) {'IN' => 'India', 'USA' => 'United States of America', 'Fr' => 'France'}
*/



for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

/* 
IN :- India
USA :- United States of America
Fr :- France
*/



const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for (const [key, value] of myObject) {
    console.log(key, ':-', value);
    
}

/*
VM1234:1 Uncaught TypeError: myObject is not iterable.   
object are not iterable from for of loop.
*/
