const numbers = [1, 2, 3, 4, 5];


const num  = numbers.map(number => number *  2);

console.log(num);



const nu = numbers.map(function(number) {
   return number * 2;
})

console.log(nu);

//Note, both normal function and arrow function of using the map function are correct and does the same thing , they just do it in different ways