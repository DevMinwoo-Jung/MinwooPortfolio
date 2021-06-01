const scroll = window.scrollY;
let navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  while(scroll > navbar){
    document.getElementById('navbar').className = scrollNav;
    return console.log(scroll);  
    
  }

};

changeNav();