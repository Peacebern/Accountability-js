let salaries = {
	John: 100,
	Pete: 300,
	Mary: 250,
};

let maxSalary = [" ", 0]; //Note: we needed to create an array to represent the max salary when we loop through salaries object

function topSalary(salaries){
    for(let [name, value] of Object.entries(salaries)){ //Note: Value here represents the first salary and that changes to other salary as the loop runs
        if (value > maxSalary[1]){ //Note: Here maxSalary[1] represents the second value of the array of the maxSalary array previously declared
            maxSalary = [name, value];
        }
    
    }
    return maxSalary;
}

console.log(topSalary(salaries));

//The below function also works
// function topSalary(salaries) {
// 	return Object.values(salaries).length
// 		? Object.entries(salaries)
// 				.sort((a, b) => a[1] - b[1]) 
// 				.at(-1)[0]  // .at(-1) gets the last (highest salary) entry in the sorted array, [0] extracts only the name: "Pete".
// 		: null;
// }

// let salaries = {
// 	John: 100,
// 	Pete: 300,
// 	Mary: 250,
// };

// console.log(topSalary(salaries));

// or

// function topSalary(salaries) {
// 	if (!Object.keys(salaries).length) return null;

// 	return Object.entries(salaries)
// 		.sort((a, b) => a[1] - b[1])
// 		.at(-1)[0];
// }
