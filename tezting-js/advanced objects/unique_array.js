let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log( unique(strings) );

function unique(arr) {
    let result = [];

    for(str of arr) {
        if(!result.includes(str)) {
            result.push(str);
        }


    }

    return result;

}