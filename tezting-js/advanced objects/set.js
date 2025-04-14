let settle = new Set();

let john = {name: "john"};
let mary = {name: "mary"};
let guinea = {name: "guinea"};

settle.add(john);
settle.add(mary);
settle.add(guinea);
settle.add(john);
settle.add(mary);
settle.add(guinea);
//Note: regardless of 


for(let sett of settle){
    console.log(sett.name);
}