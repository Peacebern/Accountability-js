//Dom manipulation

//Event Delegation
//Now if i wanted to target each list conventionally for event handling we would have to target each of them individually as seen below

// document.querySelector("#football").addEventListener("click", function(e){
//     console.log("football was clicked");

//     const target = e.target;

//     if(target.matches("li")){
//         target.style.backgroundColor = "lightgrey"
//     }

// })

// document.querySelector("#basketball").addEventListener("click", function(e){
//     console.log("basketball was clicked");

//     const target = e.target;

//     if(target.matches("li")){
//         target.style.backgroundColor = "lightgrey"
//     }

// })

// document.querySelector("#boxing").addEventListener("click", function (e) {
// 	console.log("boxing was clicked");

// 	const target = e.target;

// 	if (target.matches("li")) {
// 		target.style.backgroundColor = "lightgrey";
// 	}
// });

// document.querySelector("#tennis").addEventListener("click", function (e) {
// 	console.log("tennis was clicked");

// 	const target = e.target;

// 	if (target.matches("li")) {
// 		target.style.backgroundColor = "lightgrey";
// 	}
// });

// document.querySelector("#golf").addEventListener("click", function (e) {
// 	console.log("golf was clicked");

// 	const target = e.target;

// 	if (target.matches("li")) {
// 		target.style.backgroundColor = "lightgrey";
// 	}
// });

//Now we can skip all this by making the parent container "ul" take on the event listener and then delegate it to the rest of it's children there by eliminating repetitive code as seen belo

document.querySelector("#sports").addEventListener("click", function(e){
    console.log(e.target.getAttribute("id") + " is clicked");

    const target = e.target; //This helps to target the particular event 

    if(target.matches("li")){
        target.style.backgroundColor = "lightgrey";
    }

})

//Now below we are using our previous knowledge on createElement to create another list "li" item that will have all the attributes of the #sports id

const sports = document.querySelector("#sports");
const newSport = document.createElement("li");

newSport.innerText = "Rugby";
newSport.setAttribute("id", "rugby");

sports.appendChild(newSport); //Now when you load the page a new li "rugby" has been added to the list of sports

