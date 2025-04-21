//syntax arr.find(fn) i.e arr.find(function(item, index, array){ });

let users = [
    {id: 1, name: "john"},
    {id: 2, name: "wealth"},
    {id: 3, name: "gloria"},
];

let user = users.find(item => item.id == 1);

let men = users.find(index => index.id == 2);

console.log(user.name);

console.log(men.name);
