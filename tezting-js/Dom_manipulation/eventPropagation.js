//DOM Manipulation
//Exactly! By default, event listeners in JavaScript follow the bubbling phase, meaning the event starts from the clicked element and moves up toward the window.
//However, when you pass false as the third argument in addEventListener, it switches to the capturing phase, meaning the event starts from the top (window) down to the clicked element.

//Event Propagation

window.addEventListener("click", function(){
    console.log('window');
}, false);

document.addEventListener("click", function(){
    console.log("document");
}, false);

document.querySelector(".div2").addEventListener("click", function(e) {
    console.log("div 2"); 
    e.stopPropagation() // This causes the event bubbling  to stop at div2 so the events of 'window' and 'document' above won't show this is of course when the addeventListener is set to false, if it's set to true event target catch makes sure div1 and button event dosen't show that means the event propagation will stop as commanded at div2
}, false);

document.querySelector(".div1").addEventListener("click", function(){
    console.log("DIV1");
}, false);

document.querySelector("button").addEventListener("click", function(e){
	// console.log((e.target.innerText = "clicked")); // This shows the element which the event is on using ".target" and uses ".innerText" to change the original text when clicked on
	console.log(e); //The event object (e) contains details about the click (like mouse position, target element, etc.).
}, false);