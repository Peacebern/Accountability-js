let arr = [ 1, 2, 15 ];

function compareNumbers(a, b) {
    if(a > b) return 1;
    if(a == b) return 0;
    if(a < b) return -1;
}

console.log(arr.sort(compareNumbers));