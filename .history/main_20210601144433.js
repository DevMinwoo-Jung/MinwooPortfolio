const scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  if(window.scrollY){
    document.getElementById('navbar').style.position = "fixed";
    console.log(1);  
    
  } else if(window.scrollY < navbar){
    console.log(2);
  }

};

changeNav();