//Accordion lets you squeeze in alot of content into a small space or webpage

const accord = document.getElementsByClassName("accordion-faq");

for(i = 0; i <= accord.length; i++){
    accord[i].addEventListener("click", function(){
			this.classList.toggle("active"); //so this makes it possible for the styling of the question and answer class when it's active that has already been stated in the css file to be activated..toggle('active') flips the class on and off like a light switch:
		})
}