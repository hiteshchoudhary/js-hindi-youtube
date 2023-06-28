// reduce is a function which is used for some operation

const myArr = [1, 2, 3, 4];

// reduce with arrow function
let total = myArr.reduce((acc, currVal) => acc + currVal);
console.log(total);

//reduce with normal function

let totals = myArr.reduce(function (acc, currVal) {
  return acc + currVal;
}, 0);
// console.log(totals);

//Shopping cart

const ShoppingCart = [
  {
    itemName: "javascript",
    price: 999,
  },
  {
    itemName: "Data Science",
    price: 12999,
  },
  {
    itemName: "MongoDB",
    price: 299,
  },
  {
    itemName: "nodejs",
    price: 399,
  },
];

let courseBill=ShoppingCart.reduce((acc,item)=>acc+item.price,0);
console.log(courseBill);
