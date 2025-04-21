console.log("this js app is working")

//Here are various methods of selecting and manipulating the dom

//GetElementById()

const title = document.getElementById('fav-mv');

title.textContent = "this is me";



//getElementByClassName()
const listItem = document.getElementsByClassName('list-item');
console.log(listItem);


//getElementByTagName() this selector has to do with selectiong all elements with the same tag name e.g <li> in our html file
const tagItems = document.getElementsByTagName('li');
console.log(tagItems);


//querySelector()
const contain = document.querySelector('div'); //This selects the first div it can find
console.log(contain)

//querySelectorAll()
const container = document.querySelectorAll('div'); //this selects more than one div as long as it is on the html document
console.log(container)