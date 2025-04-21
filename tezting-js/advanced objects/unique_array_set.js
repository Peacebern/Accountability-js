function unique(arr) {
    /* your code */
    return arr.set();

    //Below we used Array.from function because we might want to be able to use array methods on the array after returning it as a set. so in a way we are trying to maintain the data type even after converting it to a set
    // return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); 