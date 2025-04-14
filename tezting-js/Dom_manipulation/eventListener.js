//DOM Manipulation


//Event Listeners

//element.addEventListener("click", function);


const buttonTwo = document.querySelector('.btn-2'); 

function alertBtn() {
    alert("I also love javascript");
};

//So below we add out event listener using the above commented event listener syntax

buttonTwo.addEventListener("click", alertBtn);


//Mouse over event, this means when i move the mouse i want the effect to show

const newBackgroundColor = document.querySelector('.box3');

function changeBgColor() {
    newBackgroundColor.style.backgroundColor = 'red';
}

//Now we include the mouse over event to the function for box-3
newBackgroundColor.addEventListener("mouseover", changeBgColor);

//We use event listener to reveal hidden text at the click of a button below

const revealBtn = document.querySelector('.btn-4');

const hiddenDiv = document.querySelector('.hidden-content'); //Note: Here we grab the previously hidden content in html and css file that we want to make display with js we do this with a call back function as seen below

function revealContent() {
    if(hiddenDiv.classList.contains('revealBtn')) {
        hiddenDiv.classList.remove('revealBtn');
    } else {
        hiddenDiv.classList.add('revealBtn');
    }
}

revealBtn.addEventListener('click', revealContent);

