const mob_nav=document.querySelector('.mobile-navbar');
const headerElm=document.querySelector('.header');

mob_nav.addEventListener('click',()=>{
    headerElm.classList.toggle("active")
})