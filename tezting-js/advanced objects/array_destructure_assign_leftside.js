//We can use any assignable for the left side for instance the object property as seen below

let user = {};

[user.name, user.surname] = "john smith".split(" ");

console.log(user.name);
console.log(user.surname);

//Note: Even though destructuring syntax looks like an array "user" remains an object in this context
//Destructuring is applied on an array, but the values are stored as object properties.