const scroll = window.scrollY;
const navbar = document.getElementById('navbar').offsetHeight;

function changeNav(){
  while(scroll > navbar){
    return console.log(scroll);  
  }

};

changeNav();