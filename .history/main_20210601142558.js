let scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  while(scroll > navbar){
    console.log(scroll);
  }
};

changeNav();