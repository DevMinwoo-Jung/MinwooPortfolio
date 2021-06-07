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
  console.log(target);
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
  };
  navbarMenu.classList.remove('show');
  navbarMenu.childNodes[1].classList.remove('show');
});

// go to home when click arrow button
arrowBtn.addEventListener('click', () => {
  scollIntoView('#home');
});

// show projects
const projectsCategories = document.querySelector('.work__categories');
const project = document.querySelector('.work__projects');
const projects = document.querySelectorAll('.project');

projectsCategories.addEventListener('click', (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  };

// Remove selection from the previous item and select the new
const active = document.querySelector('.category__btn.selected');
active.classList.remove('selected');
const target = e.target.nodeName === 'BUTTON' ? e.target : e.target.parentNode;
target.classList.add('selected');

project.classList.add('anim-out');
setTimeout(() => {
  projects.forEach((project) => {
    if(filter === '*' || filter === project.dataset.type){
      project.classList.remove('invisible');
    } else {
      project.classList.add('invisible');
    }
  });
  project.classList.remove('anim-out');
  }, 300);
});


// show menu when click navbar menu
const navbarBtn = document.querySelector('.navbar__toggle-btn');
navbarBtn.addEventListener('click', () => {
  console.log(navbarMenu.childNodes[1]);
  navbarMenu.classList.toggle('show');
  navbarMenu.childNodes[1].classList.toggle('show');
});


// functions
function scollIntoView(selector){
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: 'smooth'});
}

// 1. 모든 섹션 요소들을 가지고 온다
// 2. IntersectionObserver를 이용해서 모든 섹션들을 관찰한다
// 3. 보여지는 섹션에 해당하는 메뉴 아이템을 활성화 시킨다

const sectionIds = ['#home', '#about', '#skills', '#work', '#testimonials', '#contact'];

const sections = sectionIds.map(id => document.querySelector(id));
console.log(sections);