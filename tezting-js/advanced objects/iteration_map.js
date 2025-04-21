let recipeMap = new Map([
    ['cucumber', 500],
    ['tomatoes', 350],
    ['onion',    50]
]);

//iterate over keys

for(let veg of recipeMap.keys()) {
    console.log(veg);
}


//iterate over values
for(let amount of recipeMap.values()){
    console.log(amount);
}

//iterate over entries
for(let entry of recipeMap){
    console.log(entry);
}

//map has a  built in forEach function
recipeMap.forEach((value, key, map) => {
    console.log(`${key}: ${value}`);

})

