const menuButton = document.querySelector('.menu');
const nav = document.querySelector('.nav-ul');



menuButton.addEventListener('click', () => {
    nav.classList.toggle('oluchi');
});