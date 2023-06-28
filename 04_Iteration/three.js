// for of loop --> this is a high order loop, mostly used for arrays(similar to foreach loop), it return vales diirectly

const arr = [1, 2, 3, 4, 5];
for (const num of arr) {
//   console.log(num);
}

//loop iterate on each character, there is a drawback like we cannto get index of that value
const greetings="hello Kishan";
for(const char of greetings){
    // console.log("Each char of greet "+char);
}

// Maps --> maps hold key value pair and also holds unique values
const map=new Map();

map.set("IN","india");
map.set("USA","United state of america");
map.set("FR", "france");

for(const [key,value] of map){
    console.log(key," :- ",value);
}

