menu = document.querySelector(".menu");
navbar = document.querySelector(".navbar");
navList = document.querySelector(".navList");
logo = document.querySelector(".logo");
navList = document.querySelector(".navList");
cross = document.querySelector(".cross");
navgo = document.querySelector(".navgo");

menu.addEventListener("click", function(){
    // logo.classList.toggle("v-class")
    // navList.classList.toggle("v-class")
    
    navbar.classList.toggle("navgo")

})
cross.addEventListener("click", function(){
    navbar.classList.toggle("navgo")
})

