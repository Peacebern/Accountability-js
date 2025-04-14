let [user, age, ...rest] = ["ceasar", "30", "consul", "mental need to always", "feel it"];

console.log(user, age, ...rest);

//Note: Here "...rest" represents all other members of the array we are destructuring after user and age . it can be represented by any string as long as it is pre-followed by the three elipses "..." so it could be "...mental"
//Note: If "...rest" was not put in the destructure braces then only two members of the array which is value for user and age would have been printed out. i.e "ceasar 30"