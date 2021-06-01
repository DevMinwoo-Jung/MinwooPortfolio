const scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  while(scroll > navbar){
    navbar = document.getElementById('scrollNav');
    return console.log(scroll);  
    
  }

};

changeNav();