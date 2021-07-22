let searchBtn = document.querySelector("#btn-search")
    searchBar = document.querySelector(".search-bar-container")
    formBtn = document.querySelector("#btn-login")
    loginForm = document.querySelector(".login-form-container")
    formClose = document.querySelector("#form-close")
    formContent = document.querySelector(".login-form-container form")
    menuBtn = document.querySelector("#menu-bar")
    navbarContain = document.querySelector("header .navbar")
    videoBtn = document.querySelectorAll(".vid-btn");
console.log(videoBtn);
window.scroll = () =>{
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
    navbarContain.classList.remove('active');
    menuBtn.classList.remove('fa-times');
}
searchBtn.addEventListener('click', () =>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
})
formBtn.addEventListener('click',  function(){
    loginForm.classList.add('active');
})
formClose.addEventListener('click',  function(){
    loginForm.classList.remove('active');
})
loginForm.addEventListener('click',  function(){
    loginForm.classList.remove('active');
})
formContent.onclick = (e) =>{
    e.stopPropagation();
}
menuBtn.addEventListener('click',  function(){
    navbarContain.classList.toggle('active');
    menuBtn.classList.toggle('fa-times');
})
videoBtn.forEach(btn =>{
    btn.addEventListener('click', function(){
        document.querySelector(".controls .active").classList.remove("active");
        this.classList.add("active");
        let src = this.getAttribute('data-src');
        document.querySelector("#video-slider").src = src;
    })
})
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        640:{
            slidesPerView: 1,
        },
        768:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }

})
var swiper = new Swiper(".brand-slider", {
    spaceBetween: 20,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    breakpoints: {
        450:{
            slidesPerView: 2
        },
        640:{
            slidesPerView: 3
        },
        768:{
            slidesPerView: 4
        },
        1024:{
            slidesPerView: 5
        }
    }

})