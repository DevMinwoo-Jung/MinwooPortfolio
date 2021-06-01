let scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  if(scroll > navbar){
    console.log(scroll);
  }
};

changeNav();