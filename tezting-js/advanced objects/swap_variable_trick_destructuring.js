let guest = "jamie";
let admin = "paul";

[guest, admin] = [admin, guest]; //Here we change the previus values of each variable by using destructuring to re-assign the value of one to another temporarilly, we can swap more than two variables this way 

console.log(guest);
console.log(admin);
