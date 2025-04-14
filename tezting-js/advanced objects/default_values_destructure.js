//Note: normally if values are not given when ran it prints "undifined" by default, for instance below
let [firstName, surname] = [];

// Now we can also assign default  value, undefined manually as seen below;

let [firstNames = "Guest", surnames = "Anonymous"] = ["julius"];

console.log(firstNames); // "Julius"
console.log(surnames); //"Anonymous" is printed which is the default used for surnames