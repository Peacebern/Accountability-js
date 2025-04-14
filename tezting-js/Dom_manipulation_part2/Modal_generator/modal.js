let openBtn = document.getElementById("open-btn");
let modalCtn = document.getElementById("modal-container");
let closeBtn = document.getElementById("close-btn");

//Event listeners
openBtn.addEventListener("click", function(){
    modalCtn.style.display = "block";
})


closeBtn.addEventListener("click", function(){
    modalCtn.style.display = "none";
})

// Now if you want it so that any where you click in the document closes the modal, you can do the following below, so in essence you can eitheir use the closeBtn to close the modal or click on anyother place on the document
window.addEventListener("click", function(e){
    if(e.target === modalCtn){
        modalCtn.style.display = "none";
    }

})
