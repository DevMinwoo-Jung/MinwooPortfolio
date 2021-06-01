let scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  if(scroll > navbar){
    return console.log(scroll);  
  }

};

changeNav();