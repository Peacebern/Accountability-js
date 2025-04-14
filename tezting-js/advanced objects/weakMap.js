//Here we use object as key so that even if we assign the key to null it doesn't delete the value of the set, check below

let weakMap = new WeakMap();

let obj = {};

weakMap.set(obj, "ok"); //the object "obj" is the key to the string value "ok"





// let man = {name: "john"};

// // console.log(man.name);
// man = null;

// console.log(man.name);

