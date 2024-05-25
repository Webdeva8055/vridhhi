// burgerbtn=document.getElementsByClassName("hamburger-btn");
// navbar=document.querySelector('.navbar');
// burgerbtn.addEventListener('click', ()=>{
//     navbar.classList.toggle('.v-class');
// })



const mob_nav=document.querySelector('.mobile-navbar');
const headerElm=document.querySelector('.header');

mob_nav.addEventListener('click',()=>{
    headerElm.classList.toggle("active")
})