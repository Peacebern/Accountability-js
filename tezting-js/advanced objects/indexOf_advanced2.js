let peace = "As long as me and my family is alive me and them will live to praise the lord";

let substr = "me";

let where = 1;

while(true){
    let foundwhere = peace.indexOf(substr, where);

    if(foundwhere == -1) {
        break;
    } //note: there has to be a condition to break out of the loop if not it keeps printing even after exhausting all indexes of the given string while looking for the substr.
    console.log(`found  ${substr} at position ${foundwhere}`);

    where = foundwhere + 1; //this is to ensure that after it is found the position is increased so it starts looking from the next index after the found position
}