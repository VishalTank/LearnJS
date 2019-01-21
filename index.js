var magic = function (){
  return "hi";
};

var magic = () => "hi";



const squareList = function(arr) {
  {
    const squaredIntegers = arr;
    return squaredIntegers;
  }
};


//function as an argument
const increment = function() {
  return function increment(number, value = 1) {
    return number + value;
  };
}();


//'rest'(...) operator
const sum = (function() {
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();

console.log(sum(1, 2, 3));


//'spread'(...) operator
const arr = ['jan', 'feb', 'mar'];
let arr1;

/*
function temp() {
  //arr1 = arr; change this so that by using spread operator we can copy whatever content of arr is to arr1
  arr1 = [...arr]; //changed
  arr1[0] = 'wiz';
  console.log(arr1);
}

temp();
*/

(function() {
  arr1 = [...arr];
  arr[0]  = 'wiz';
})();

console.log(arr1);
