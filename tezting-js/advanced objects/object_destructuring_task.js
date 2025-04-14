let user = {
    firstName : "peace",
    years : 30
};

let {
    firstName,
    years : age ,
    isAdmin = false,
} = user;

console.log(firstName);
console.log(age);
console.log(isAdmin);