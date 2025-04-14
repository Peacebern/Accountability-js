// DOM manipulation

// Traverse the Dom

// Parent Node traversal to find out the parent node in the html document tree using ul as case study 
// let ul = document.querySelector("ul");
// console.log(ul.parentNode); 
// console.log(ul.parentElement);

// We can find the parent of a parentNode which is the grandParent by chaining two parentNode or two parentElement together
// console.log(ul.parentNode.parentNode);


// Child Node traversal
// Note: indentations are known as text in the console.
// let ul = document.querySelector("ul");
// console.log(ul.childNodes);
// //We can traverse the firstchild node and lastchild node
// console.log(ul.firstChild);
// console.log(ul.lastChild);

// Now to style the firstChild we can't out rightly use ul.firstChild.style.backgroundColor = 'blue' in this case, this is  because if you console.log the nodes the firstChild is an indention so a text therefore that won't work unless you go to the html doc and backspace the li element to remove indentation making the li element the firstChild.Although using the scenerio we have now we do the following;
// ul.childNodes[1].style.backgroundColor = 'blue'; //Note: childNode[1] where index 1 is refering to the index of the node we want to style in the childNode list

// We can also traverse through children html collections rather than Node List
// console.log(ul.children);
// console.log(ul.firstElementChild);
// console.log(ul.lastElementChild);
// ul.firstElementChild.style.backgroundColor = "blue";


// Siblings Node traversal
// let ul = document.querySelector("ul");

// const div = document.querySelector("div");
// console.log(div.childNodes); //Now this is the parent element of child ul we are displaying it to see what sibling relationship ul has in the dom tree

// Below are the sibling node of ul 
// console.log(ul.previousSibling);
// console.log(ul.nextSibling);

// for html collection list of siblings we can do
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


