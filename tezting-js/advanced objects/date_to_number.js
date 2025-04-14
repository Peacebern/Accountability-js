let date = new Date();

console.log(+date); // Number of milliseconds, same as date.getTime(). The important side effect: dates can be subtracted, the result is their difference in ms.That can be used for time measurements:


//The below code shows how long(time) it takes to run a loop that performs a simple mathematical operation 100,000 times
let start = new Date(); // When the loop starts

for(let i = 0; i < 100000; i++){
    let doSomething;
        doSomething = i * i * i;
}

let end = new Date(); // When the loop finishes

console.log(`The loop took ${end - start} ms`);// 5

