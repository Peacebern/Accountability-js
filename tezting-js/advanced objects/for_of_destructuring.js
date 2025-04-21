let user = {
    name: "john",
    age: 30
}

//Note: we use Object.entries because we want to use for..of to loop over the object like an array
for(let [key, value] of Object.entries(user)){
    console.log(`${key}: ${value}`);
}