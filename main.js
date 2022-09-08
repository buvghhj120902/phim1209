









const navOpenBtn =  document.querySelector('[data-menu-open-btn]');
const navCloseBtn = document.querySelector('[data-menu-close-btn]');
const navbar = document.querySelector('[data-navbar]');
const overlay = document.querySelector('[data-overlay]');

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

for(let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function(){
        navbar.classList.toggle("active");
         overlay.classList.toggle("active");
        document.body.classList.toggle("active");
    });
}

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){

       window.scrollY >= 10 ? header.classList.add("active") :header.classList.remove("active");

});










const goToBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function(){
    
    this.window.scrollY >= 500 ? goToBtn.classList.add("active") : goToBtn.classList.remove("active");

});



function xemngay() {
    alert('Quý vị xin thông cảm xem ở web này nhé, nhấn OK để qua đó <3');
}