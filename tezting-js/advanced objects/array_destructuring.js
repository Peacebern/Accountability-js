let arr = ["john", "oluchi"];

//so now we are to destructure the above array into variables 

//set firstName to arr[0]
//set lastName to arr[1]

let firstName = arr[0];
let lastName = arr[1];

//OR
// let[firstName, lastName] = arr;

//so now the initial array which is arr has now been destructured into two variables firstName and lastName

console.log(firstName); // john
console.log(lastName); // oluchi



//Ignore elements using commas; Unwanted elements of the array can also be thrown away via an extra comma as seen below
//Second element is not needed as seen in the example below the , represented it eligibility to be made visible 
let [ status, , title] = ["julius", "ceasar", "consul", "of the roman republic"];

console.log(title); // Consul