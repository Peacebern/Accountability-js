// console.log("style dom js is working");

const title = document.querySelector('#fav-mv');

title.style.color = 'red'; //This only works on a single element

//if we want to style more than one element at the same time we do below
const listItems = document.querySelectorAll('.list-item'); // the reason for "." in front of list-item is because we are using query selector to select a classname

// listItems.style.fontSize = '2rem'; this wouldn't work because list-items is more than one element

for(i = 0; i < listItems.length; i++) {
    listItems[i].style.fontSize = '10rem';
}

console.log(title);
