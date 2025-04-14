let guestList = ["tochi", "jack", "oluchi", "peace", "gloria"];

let approved = prompt("enter guest name").toLowerCase();

if(guestList.includes(approved)) {
    console.log(`Welcome to the birthday event ${approved} !`);
} else {
    console.log("access Denied");
}