//Note: This works with the beginning of an array, shifts takes out the beginning item and unshift puts it back

let fruits = ["appple", "melon", "cinnamon", "pear", "plum", "cocomelon"];

fruits.shift();

console.log(fruits);

fruits.unshift("apple");

console.log(fruits);