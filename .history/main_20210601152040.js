const scroll = window.scrollY; // 0 ~ 
let navbar = document.getElementById('navbar').offsetHeight; // 139

console.log(navbar);
console.log(scroll);

function changeNav(){
  if(window.scrollY){
    document.getElementById('navbar').style.transition = "all var(--animation-duration) ease";
    console.log(1);
  } else if(window.scrollY < navbar){
    console.log(2);
  }

};

changeNav();