// while loop --> loop will continue untill the condition is not get false
let myArr=["kishan", "yash", "swapnil","vishal"];
let i=0;
while(i<myArr.length){
    console.log(myArr[i]);
    i++
}

//do-while loop --> loop will iteral once if the condition is getting false at initial level
let score =11;            //condition will false directly at starting
do{
    console.log("score is "+ score)        //output will be : 11
    score++;
}
while(score<=10);