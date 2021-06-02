'use strict'

// const scroll = window.scrollY; // 0 ~ 
// const navbar = document.getElementById('navbar').getBoundingClientRect().height; // 139


// Make navbar tranparent when it is on the top
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener('scroll', () => {
  if(window.scrollY > navbar){
    navbar.classList.add('navbar--dark');
  } else {
    document.getElementById('navbar').style.backgroundColor = "purple";
    navbar.classList.remove('navbar--dark');
  }
});


// handle scroll when click navbar menu
const navbarMenu = document.querySelector('.navbar__menu').querySelector();

document.addEventListener('click', () => {
  console.log(navbarMenu);
})
