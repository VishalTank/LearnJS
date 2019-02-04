var magic = function() {
  return "Hi";
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



//quick assignment from objects
//before
var values = {x: 3, y: 4, z: 5};

var x = values.x;
var y = values.y;
var z = values.z;

//after
const {x: a, y: b, z: c} = values; // takes each field(x, y, z)'s value and assigns it to (a, b, c).



//types of strings
var s1 = 'sample "string"'; //dont need to escape chars
var s2 = "sample \'string\'"; //need to escape chars to print them

var ex = { value: 10 };
var s3 = `sample 'string' to "check" ${ex.value}
yaaayyyyy!!`; // multiline strings are allowed, no need to escape chars, print var values.

console.log(s1 + "\n" + s2 + "\n" + s3);



//concise way to write object literal declarations
//before
var createPerson = (name, age, gender) => {
  return {
    name: name,
    age: age,
    gender: gender,
  };
};
console.log(createPerson("wiz", 21, "M"));

//after
var createPerson1 = (name, age, gender) => ({ name, age, gender });
console.log(createPerson1("wiz", 21, "M"));



//classes and constructors in JS
class SpaceShuttle {
  constructor(target) {
    this.target = target;
  }
}

var z = new SpaceShuttle("earth");
console.log(z.target);



//getters and setters
class Book {
  constructor(author) {
    this._author = author;
  }

  //getter
  get authorOfBoook() {
    return this._author;
  }

  //setter
  set authorOfBook(newAuthor) {
    this._author = newAuthor;
  }
}

//coding solution
function createClass() {
  class Temp {
    constructor(temperature) {
      this._temperature = (0.55) * (temperature-32);
    }

    get TinC() {
      return this._temperature;
    }

    set TinC(temperature) {
      this._temperature = (0.55) * (temperature-32);
    }
  }

  return Temp;
}

const Temp = createClass();
const obj = new Temp(76);
let t1 = obj.TinC;
console.log(t1);
obj.TinC = 26;
t1 = obj.TinC;
console.log(t1);
