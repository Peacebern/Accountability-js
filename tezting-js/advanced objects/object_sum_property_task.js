let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};


function sumSalaries(obj){
let sum = 0;

    for(let value of Object.values(obj)){
        sum += value; //This loops and add all values till there is no more value to add then it breaks out and returns sum
    }
        return sum; //650 

}; // Note: This function is a universal one, it was purposely built like this so that it can be used for any object regardless of the name of the object

console.log(sumSalaries(salaries));

//we can also use the below function to get desired results
function sumSalaries(salaries){
    return Object.values(salaries).reduce((a, b) => a + b, 0) //650
}
