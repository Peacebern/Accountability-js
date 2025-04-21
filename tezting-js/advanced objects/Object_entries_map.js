let men = {
    women : 5,
    girls: 4,
    boys: 3,
    dad: 7,
};

//Here we are turning an object to map using the Object.entries map function
let users = new Map(Object.entries(men));
console.log(users.get('women')); //5