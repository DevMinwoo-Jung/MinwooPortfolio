const scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  if(window.scrollY){
    document.getElementById('navbar').style.position = "fixed";
    return console.log(1);  
    
  }

};

changeNav();