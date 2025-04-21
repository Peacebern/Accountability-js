// console.log("this is create element js");

const ul = document.querySelector("ul");

const li = document.createElement("li");

ul.append(li);

li.innerText = "X-Men";

//Below we modify html elements attributes and classes
const h1Element = document.getElementById("fav-mv");

for (let attr of h1Element.attributes) {
	li.setAttribute(attr.name, attr.value);
	// li.removeAttribute(attr.name, attr.value);
}



//Below we are using classlist to modify elements, here i used classList to add the css for the list-item class to x-men just ass how i did the attribute thing above with fav-mv
li.classList.add('list-item');
li.classList.remove('list-item'); //this removes the list-item css from the li x-men that was previously addded above
