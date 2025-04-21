// Variables for task box

// const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
const addTask = document.getElementById("add-task");
const displayTask = document.getElementById("task-li"); // "Lim" here represents the container for the list of task in the html document


// const lim = document.getElementById("task-li"); // for my thought processs


//Event listner for add task button

addTask.addEventListener("click", function(){
	let task = document.createElement("div");
	task.classList.add("task"); // "classList.add" add a css class to the dynamic html element we created with js so that we can style the element in the css file using the css classname added here

	let li = document.createElement("li");
	li.innerText = `${inputTask.value}`;
	// li.classList.add("ment");
	// console.log(li); // This was to test if the node was printing or it was null
	task.appendChild(li); // "appendChild" is used to append the list element created to the task element created previously which represents the container which the inputed task is housed in

	let checkButton = document.createElement("button");
	checkButton.innerHTML = `<i class="fa-solid fa-check"></i>`;
	checkButton.classList.add("checkTask");
	task.appendChild(checkButton);

	let deleteButton = document.createElement("button");
	deleteButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
	deleteButton.classList.add("deleteTask");
	task.appendChild(deleteButton);

	if (inputTask.value === "") {
		alert("Please Enter a valid task...");
	} else {
		displayTask.appendChild(task);
	}

	checkButton.addEventListener("click", function(){
		task.classList.toggle("strike");
	})

	deleteButton.addEventListener("click", function(){
		task.remove();
	})

	inputTask.value = ""; //This is so that when a task is added the contents of the task disappears from the input box

	

	//Note the below code was my personal thought process before i checked the video and guess what i was kinda on the right track

	//We create a div that is going to house the task and the buttons for deleter and check
	// let task = document.createElement("div");

	// const li = document.createElement("li"); // Now this was added inside the click event so that when we click to add a new task the old task doesn't disappear
	// li.innerText = `${inputTask.value}`;
	// lim.appendChild(li);
	// inputTask.value = ""; //This is so that when a task is added the contents of the task disappears from the input box
})



