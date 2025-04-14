//Dom Manipulation

//Get the necessary events

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

//Create a data sets containing quotes and their authors
const quotes = [
	{
		quote:"The only limit to our realization of tomorrow is our doubts of today.",
		person: "Franklin D. Roosevelt",
	},
	{
		quote: "Do what you can, with what you have, where you are.",
		person: "Theodore Roosevelt",
	},
	{
		quote: "It does not matter how slowly you go as long as you do not stop.",
		person: "Confucius",
	},
	{
		quote:
			"Success is not final, failure is not fatal: It is the courage to continue that counts.",
		person: "Winston Churchill",
	},
	{
		quote: "Believe you can and you're halfway there.",
		person: "Theodore Roosevelt",
	},
	{ quote: "Happiness depends upon ourselves.", person: "Aristotle" },
	{
		quote: "The greatest wealth is to live content with little.",
		person: "Plato",
	},
	{
		quote: "You must be the change you wish to see in the world.",
		person: "Mahatma Gandhi",
	},
	{
		quote:
			"We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
		person: "Aristotle",
	},
	{
		quote:
			"Do what you feel in your heart to be right – for you’ll be criticized anyway.",
		person: "Eleanor Roosevelt",
	},
	{
		quote: "Life is what happens when you’re busy making other plans.",
		person: "John Lennon",
	},
	{
		quote: "The best way to predict the future is to create it.",
		person: "Peter Drucker",
	},
	{
		quote: "If you want to lift yourself up, lift up someone else.",
		person: "Booker T. Washington",
	},
	{
		quote: "Opportunities don't happen. You create them.",
		person: "Chris Grosser",
	},
	{
		quote: "Don’t let yesterday take up too much of today.",
		person: "Will Rogers",
	},
	{
		quote: "It always seems impossible until it’s done.",
		person: "Nelson Mandela",
	},
	{
		quote:
			"Perfection is not attainable, but if we chase perfection we can catch excellence.",
		person: "Vince Lombardi",
	},
	{   quote: "The purpose of our lives is to be happy.", 
        person: "Dalai Lama" 
    },
	{
		quote: "Strive not to be a success, but rather to be of value.",
		person: "Albert Einstein",
	},
	{
		quote: "Doubt kills more dreams than failure ever will.",
		person: "Suzy Kassem",
	},
	{
		quote: "Everything you’ve ever wanted is on the other side of fear.",
		person: "George Addair",
	},
	{
		quote: "Do one thing every day that scares you.",
		person: "Eleanor Roosevelt",
	},
	{
		quote: "A journey of a thousand miles begins with a single step.",
		person: "Lao Tzu",
	},
	{   quote: "An unexamined life is not worth living.",
        person: "Socrates" 
    },
	{
		quote:
			"Not everything that is faced can be changed, but nothing can be changed until it is faced.",
		person: "James Baldwin",
	},
	{
		quote: "I have not failed. I've just found 10,000 ways that won't work.",
		person: "Thomas Edison",
	},
	{   quote: "Dream big and dare to fail.", 
        person: "Norman Vaughan" 
    },
	{
		quote: "The secret of getting ahead is getting started.",
		person: "Mark Twain",
	},
	{   quote: "Turn your wounds into wisdom.",   
        person: "Oprah Winfrey" 
    },
	{
		quote: "Act as if what you do makes a difference. It does.",
		person: "William James",
	},
];


btn.addEventListener("click", function(){
	let random = Math.floor(Math.random() * quotes.length);

	quote.innerText = quotes[random].quote; //Here "quotes[random].quote" is because random deals with interger so quotes.[random] refers to the random number of the quotes that Math.random picks then it putes it in using ".quote"
	person.innerText = quotes[random].person;

	//Adding pressed effect for the button
	btn.classList.add("pressed"); //Here we add the "pressed" class dynamically so we can access it in the css file and style it the way we want to. This is because unlike in js file we cannot dynamically add class to the css file

	setTimeout(() => {
		btn.classList.remove("pressed");
	}, 200); //setTimeout waits 200 milliseconds (0.2 seconds). After that time, it removes the "pressed" class from the button. This makes the button pop back to its normal 3D look.

});

