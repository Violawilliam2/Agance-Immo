let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
let loginForm = document.querySelector('.login-form');
let sidebar = document.querySelector(".sidebar");
let siderBton = document.querySelector(".sider-buton");





menu.onclick =() =>{
    navbar.classList.toggle('active');
    menu.classList.toggle('fa-times');
 
    
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
   
   
}


document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
  
   
}









