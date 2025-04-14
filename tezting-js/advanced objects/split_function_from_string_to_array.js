let users = "name, oluchi, peace"
;

let someUsers = users.split(', '); //This turns the string into an array, which you can see if you console.log(someUsers)

for(let user of someUsers) {
    alert(`${user} is a facebook enthusiats`);
}

console.log(someUsers);