const menu = document.querySelector('#mobile__menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
    
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});