//The reduce function takes into consideration all elements of an array all the while  noting the operation using the accumulator. This function returns a sinle value that is the accumulator history as a single value it doesn't return an array unlike the other two high order functions map and filter
const arr = [10, 20, 30, 40];

const arrReduce = arr.reduce((currentItem, accumulator) =>
    currentItem + accumulator);

console.log(arrReduce);