const menuBtn = document.getElementById('menuBtn');
const menuContainer = document.getElementById('menuContainer');
const menuBG = document.getElementById('menuBG');
const menuCloseBtn = document.getElementById('menuCloseBtn');

menuBtn.addEventListener("click", () => {
   menuBG.style.left = "0";
   setTimeout(function() {
      menuContainer.style.left = "0";
      document.body.classList.add("noscroll");
   }, 500);
});

menuCloseBtn.addEventListener("click", () => {
   menuContainer.style.left = "-100%";
   setTimeout(function() {
      menuBG.style.left = "-100%";
      document.body.classList.remove("noscroll");
   }, 500);
});



const menuItem = document.querySelectorAll(".menuItem");
menuItem.forEach(item => {
   item.addEventListener("click", () => {
      item.parentElement.classList.toggle("open");
   });
});



let slideIndex = 0;
let slideTimer;

function showSlides(n) {
   let slides = document.getElementsByClassName("recruitersCard");
   
   if (n !== undefined) {
      slideIndex = n;
   } else {
      slideIndex++;
   }
   
   if (slideIndex > slides.length) { slideIndex = 1; }
   if (slideIndex < 1) { slideIndex = slides.length; }
   
   for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
   }
   
   slides[slideIndex - 1].style.display = "block";
   
   clearTimeout(slideTimer);
   slideTimer = setTimeout(showSlides, 3000);
}

function plusSlides(n) {
   showSlides(slideIndex + n);
}

showSlides();



window.addEventListener("load", function () {
  setTimeout(() => {
    document.getElementById("popupContainer").style.display = "flex";
    document.body.classList.add("noscroll");
  }, 3000);

  document.getElementById("popupClose").addEventListener("click", function () {
    document.getElementById("popupContainer").style.display = "none";
    document.body.classList.remove("noscroll");
  });
});