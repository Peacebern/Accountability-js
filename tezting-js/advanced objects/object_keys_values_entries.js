let user = {
    name: "john",
    age: 30
};

console.log(Object.keys(user)); // name, age
console.log(Object.values(user)); // john, 30
console.log(Object.entries(user)); // [name, john], [age, 30]

//using Object.values to loop over property values

let peace = {
    name: "oluchi",
    age: 27
};

for(let value of Object.values(peace)){
    console.log(value); // oluchi, 27
}