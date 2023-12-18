// const tinderUser = new Object() - singleton
const tinderUser = {} 

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// Accessing nested object's properties
// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}


//const obj3 = { obj1, obj2 } 
/*
{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
*/

// Object.assign(target, source) - it modifies target object and returns it
// Always good practice that target be {} empty object 
// const obj3 = Object.assign({}, obj1, obj2, obj4)
/*
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }
*/

//const obj3 = {...obj1, ...obj2}
/*
{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
*/
//console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
console.log(tinderUser);
/*
{ id: '123abc', name: 'Sammy', isLoggedIn: false }
*/

console.log(Object.keys(tinderUser));
// [ 'id', 'name', 'isLoggedIn' ]

console.log(Object.values(tinderUser));
// [ '123abc', 'Sammy', false ]

console.log(Object.entries(tinderUser));
//  [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// true

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

//const {courseInstructor} = course
// console.log(courseInstructor); // hitesh

const {courseInstructor: instructor} = course
console.log(instructor);// hitesh

// JSON Object - keys are also strings
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// JSON Objects array
/*
[
    {},
    {},
    {}
]
*/

