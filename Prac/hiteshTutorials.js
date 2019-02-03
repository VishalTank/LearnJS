var Vishal = {
  age: 10,
  isActive: true,
}

var Vishal1 = {
  age: 11,
  isActive: true,
}

var Vishal2 = {
  age: 12,
  isActive: false,
}


let users = new Map();

users.set('v', Vishal);
users.set('v1', Vishal1);
users.set('v2', Vishal2);

console.log(users);
