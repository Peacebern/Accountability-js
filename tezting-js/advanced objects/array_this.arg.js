//thisArg is used in different array methods ranging from filter, map , find , sort etc. here is the syntax when we use it for thr filter method below;
// array.filter(func, thisArg)

let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};

let users = [
    {age: 16},
    {age: 20},
    {age: 23},
    {age: 30}
];

let soldiers = users.filter(army.canJoin, army);

console.log(soldiers.length);
console.log(soldiers[0].age);
console.log(soldiers[1].age);



