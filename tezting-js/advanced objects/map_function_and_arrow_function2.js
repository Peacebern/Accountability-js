let users = ["name", "oluchi", "peace"
];

// let someUsers = users.map(event => event.toUpperCase()); //Here we used arrow function

let someUsers = users.map(function(item) {
    return item.toUpperCase();
})

console.log(someUsers);