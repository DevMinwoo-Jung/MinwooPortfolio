const scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  while(scroll > navbar){
    document.getElementById('navbar').style.position = "fixed";
    return console.log(scroll);  
    
  }

};

changeNav();