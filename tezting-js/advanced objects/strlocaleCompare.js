//Here is a mordern way of comparing alphabetical characters 

let str1 = "ment";
let str2 = "Mentor";

console.log(str1.localeCompare(str2)); // -1 so str1 is less tahn str2

// Returns a negative number if str1 is less than str2.
// Returns a positive number if str1 is greater than str2.
// Returns 0 if they are equivalent.