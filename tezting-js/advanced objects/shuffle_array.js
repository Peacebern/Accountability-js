function shuffle(array) {
    array.sort(() => Math.random() - 0.5); //Note: 0.5 in this instance makes the random shuffle not be a NAN.
}

let arr = [1, 2, 3];

shuffle(arr);
console.log(arr)

