'use strict'

const scroll = window.scrollY; // 0 ~ 
let navbar = document.getElementById('navbar').getBoundingClientRect().height; // 139



function changeNav(){
  if(window.scrollY){
    document.getElementById('navbar').style.backgroundColor = "black";
    console.log(navbar);
console.log(scroll);
  } else {
    document.getElementById('navbar').style.backgroundColor = "purple";
    console.log(navbar);
    console.log(scroll);
  }
};





document.addEventListener('scroll', () => {
  changeNav();
});