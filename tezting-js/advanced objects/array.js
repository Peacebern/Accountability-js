let men = ["micheal", "luke", "paul", "peter"];

console.log(men[2]); //paul

men[2] = "ifeanyi";

console.log(men[2]); //ifeanyi

console.log(men.slice(1)); //["luke", "paul", "peter"]

console.log(men.length -1); // 3

console.log(men[-1]); // undefined

console.log(men[men.length -1]); // peter , this is because for arrays we need to access each index explicitly from within the array unlike strings, we can do this or use the .at()methos as shown below

console.log(men.at(-1)); // peter