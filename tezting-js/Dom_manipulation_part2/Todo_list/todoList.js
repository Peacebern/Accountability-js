// Variables for task box

const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");


const lim = document.getElementById("task-li");


//Event listner for add task button

addTask.addEventListener("click", function(){


    //Note the below code was my personal thought process before i checked the video and guess what i was kinda on the right track 

    //We create a div that is going to house the task and the buttons for deleter and check
    // let task = document.createElement("div");

    // const li = document.createElement("li"); // Now this was added inside the click event so that when we click to add a new task the old task doesn't disappear
    // li.innerText = `${inputTask.value}`;
    // lim.appendChild(li);
    // inputTask.value = ""; //This is so that when a task is added the contents of the task disappears from the input box
})