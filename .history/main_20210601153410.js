'use strict'

const scroll = window.scrollY; // 0 ~ 
let navbar = document.getElementById('navbar').getBoundingClientRect().height; // 139

console.log(navbar);
console.log(scroll);

function changeNav(){
  if(window.scrollY){
    document.getElementById('navbar').style.backgroundColor = "black";
    console.log(1);
  } else {
    document.getElementById('navbar').style.backgroundColor = "purple";
  }
};





document.addEventListener('scroll', () => {
  changeNav();
});