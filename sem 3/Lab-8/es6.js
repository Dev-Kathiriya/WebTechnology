//let demo
let a = 10;

function letdemo() {
  let a = 5;
  console.log("value in function(block) " + a);
}
letdemo();
console.log("value globally " + a);

//const demo

const b = 56;
console.log("value of const variable " + b);

//function using es5
function arrowdemo(x, y) {
  return x * y;
}
console.log(arrowdemo(8, 9));

//arrow function using es6
const h = (x, y) => {
  return x * y;
};
console.log(h(8,10));

//classes demo
class car{
    constructor(speed,model){
        this.speed = speed;
        this.model = model;
    }
}
const cart = new car(20,'tesla')
console.log(cart.model);
console.log(cart.speed);

//destruicting demo
const arr = [1,2,3,4,5,6];
[p,q,r,s,t,u] = arr;
console.log(p+q+r+s+t+u);

//map method demo
let arr1 = [1,2,3,4,5,6,7,8,9];
let arr2 = arr1.map((num)=>{
  return num*2
});
console.log(arr2);

//spread demo

const numbersOne = [1, 2, 3];
const numbersTwo = [4, 5, 6];
const numbersCombined = [...numbersOne, ...numbersTwo];

document.write(numbersCombined);






