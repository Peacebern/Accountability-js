let str = "As sly as a fox, as strong as an ox";

let target = "as";

let pos = 0;

while(true) {
    let foundpos = str.indexOf(target, pos);

    if(foundpos == -1) {
        break;
    }

    console.log(`found at ${foundpos}`);

    pos = foundpos + 1;
}

//can also be written as the short code commented out below

// let str = "As sly as a fox, as strong as an ox";
// let target = "as";

// let pos = -1;
// while ((pos = str.indexOf(target, pos + 1)) != -1) {
//     alert( pos );
// }