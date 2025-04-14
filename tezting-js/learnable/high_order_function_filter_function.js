//The filter high order function is one that takes in three argumments; items, index, and array. it uses a call back function to tell the current function what to do. Also a high order function can be passed to a variable as the example below will indicate

const grades = [20, 50, 40, 90, 80, 70, 10];

//Beow the array "grades" is being treated as an object

const distinction = grades.filter((items) => items >= 50);

console.log(distinction);