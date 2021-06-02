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
// navbar가 메뉴 가림 추후 해결 해야함 2021.06.02
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link === null){
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
});


// handle scroll when click contact
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link === null){
    return;
  }
  scollIntoView('.home__contact');
});

function scollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
}