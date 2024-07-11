const header = document.getElementById('header');
const menuMobile = document.getElementById('menu-mobile');
const navClose = document.getElementById('nav-close');
const btnOpen = document.getElementById('btn-open');
const btnClose = document.getElementById('btn-close');
const overlay = document.getElementById('overlay');
const preLoad = document.querySelector(".loader");

window.addEventListener("load", () => {
    preLoad.classList.add("loader-hidden");

    preLoad.addEventListener("transitioned", () => {
        document.body.removeChild("loader");
    })
})

window.addEventListener("scroll", () => {
    header.classList.toggle("scrolling", window.scrollY > 0);
})

btnOpen.addEventListener("click", () => {
    menuMobile.classList.add('open-menu');
    overlay.classList.add('overlay');
})

btnClose.addEventListener("click", () => {
    menuMobile.classList.remove('open-menu');
})

navClose.addEventListener("click", () => {
    menuMobile.classList.remove('open-menu');
})

overlay.addEventListener("click", () => {
    menuMobile.classList.remove('open-menu');
})