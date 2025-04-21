//This is used when we want to measure time and we don't need the date object

let start = Date.now();

for(let i = 0; i < 100000; i++){
    let doSomething;
        doSomething = i * i * i;
}

let end = Date.now();

console.log(`The loop took ${end - start} ms`);   

//In essence the loop is supposed to take less time as Date.now() is used here compared to when new Date() is used.