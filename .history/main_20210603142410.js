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
    document.getElementById('navbar').style.backgroundColor = 'purple'
    navbar.classList.remove('navbar--dark');
  }
});


// handle scroll when click navbar menu
// navbar가 메뉴 가림 추후 해결 해야함 2021.06.02
const navbarMenu = document.querySelector('.navbar__menu');
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if(link == null){
    return;
  }
  console.log(link);
  scollIntoView(link);
});


// handle scroll when click contact
const contactMe = document.querySelector('.home__contact');
contactMe.addEventListener('click', () => {
  scollIntoView('#contact');
});


// home contents is faded out when scroll down
const homeContents = document.querySelector('.home__container');
const homeHeight = homeContents.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
  homeContents.style.opacity = 1 - window.scrollY / homeHeight;
});


// appears arrow button after scrolling down
const arrowBtn = document.querySelector('.home__btn');
document.addEventListener('scroll', () => {
  if(window.scrollY > homeHeight){
    arrowBtn.classList.add('home__btn--visible');
  } else {
    arrowBtn.classList.remove('home__btn--visible');
  }
});

// go to home when click arrow button
arrowBtn.addEventListener('click', () => {
  scollIntoView('#home');
});

// show project 
const projects = document.querySelector('.work__categories');
projects.addEventListener('click', (project) => {
  const kind = project.target;
  const x = kind.dataset.link;
  // link는 html에서 data-link 부분에서 link
  console.log(kind);
  console.log(x);
  if(kind == x){
    alert("같음!");
  }
});

// functions
function scollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
}