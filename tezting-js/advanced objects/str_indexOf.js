let str = "Widget with id";

console.log(str.indexOf("id", 2)); //12

console.log(str.indexOf("wi", 2)); //7 

console.log(str.indexOf("th", 2)); //9 

console.log(str.indexOf("id", 1)); //1

console.log(str.indexOf("t", 2)); // 5

console.log(str.indexOf("e", 2)); // 4

console.log(str.indexOf("w", 2)); // 7

console.log(str.indexOf("h", 2)); // 10


//Note: "str.indexOf(substr, pos)" e.g in the example above where we are asked to str.indexOf("id", 2). note "2" is the index position we should start looking from
//that imples that we should look for "id" the substring starting from the second index of the first word of the sentence which is  "Widget", index 2 here being "d" in widget so we look for the second occurence of "id" after taht index. now when counting index of words or in sentences a "space" is also counted and remember the function is case sensitive.
//Below is the full index of "Widget with id" for better understanding
// "Widget with id"
//  0123456789..since we are in tens it might not align well so lets align the rest with ther respective index below;
// h is 10, space after h is 11, i is 12, d is 13.
