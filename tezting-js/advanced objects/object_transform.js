let prices = {
    banana : 1,
    orange : 2,
    meat : 4
};

let doublePrices = Object.fromEntries(
    //Note: Object.fromEntries above helps to return/transform back the object after it was transformed into an array inorder to be mapped through, this is because Object.entries can transform an object to array but inorder to transform from array back to object we use Object.fromEntries
    // convert prices to array, map each key/value pair into another pair
    // and then fromEntries gives back the object

    Object.entries(prices).map(item => [item[0], item[1] * 2]) //Note: Here it's in an array so item[0] represents the key which is a string and item[1] represent the value which is an interger(i.e price to be multiplied)

);

console.log(doublePrices.meat);