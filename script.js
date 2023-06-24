let menu = document.querySelector('.menu-icon');
let navbar = document.querySelector('.header__nav');

menu.addEventListener('click', function () {
    navbar.classList.toggle('active');
})

window.onscroll = () => {
    navbar.classList.remove('active')
}