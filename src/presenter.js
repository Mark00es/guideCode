const btn = document.querySelector('#menu-btn');
const menu = document.querySelector('#sidemenu');
btn.addEventListener('click', selector =>{
    menu.classList.toggle("menu-expanded");
    menu.classList.toggle("menu-collapsed");

    document.querySelector('body').classList.toggle('body-expanded')
});