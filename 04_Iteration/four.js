// for in loop --> for in loop mostly used for accessing and objects, it's only return keys(index)

let myArr=["kishan","yash","swapnil","vishal"];
for(const name in myArr){
    console.log(name);    //output will be : 0,1,2,3   , for in loop return index 
}

for(const name of myArr){
    console.log(name)      //output will be : kishan, yash, swapnil, vishal     , for of loop return values
}

//map 
let map =new Map();
map.set("IN","India");
map.set("US", "United state");
map.set("fr","france");

for(const key in map){
    console.log(key)        //it will not print anything, cnnot iterate map using for in loop
}