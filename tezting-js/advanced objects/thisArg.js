

let army = {
    minAge: 16,
    maxAge: 27,
    
    canJoin(user) {
        return user.age >= this.minAge && user.age < this.maxAge;
    }
};


let users = [
    {id:1, age: 16},
    {id:2, age: 20},
    {id:3, age: 18},
    {id:4, age: 19},
    {id:5, age: 23},
    {id:6, age: 30}
];
// find users, for who army.canJoin returns true
let soldiers = users.filter(army.canJoin, army);

// console.log(soldiers.length); // 2
// console.log(`${soldiers[0].age} with id ${soldiers[0].id} ` ); // 20
// console.log(soldiers[1].age); 
// console.log(soldiers[2].age);
// console.log(soldiers[3].age);

let soldiersIds = soldiers.map(soldier => soldier.id);

soldiersIds.forEach(id => console.log(`soldier id is ${id}`))
