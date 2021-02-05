let addCustomer = document.querySelector("#searchBar");
let modalBg = document.querySelector(".modal-bg");
let modalClose = document.querySelector(".modal-close");

addCustomer.addEventListener("click", function () {
  modalBg.classList.add("bg-active");
});
modalClose.addEventListener("click", function () {
  modalBg.classList.remove("bg-active");
});

function talk() {
  let know = {
    Hi:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    hi:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    HELLO:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    hello:
      "Hi Scientific Person😊, Welcome back! Please select an option from the below menu.",
    "How are you": "Good 😊",
    "how are you": "Good 😊",
    "how old are you": "My age is Infinity!!! ",
    juice: "Which flavour you want to buy?",
    Mango: "We have a pulp mango juice with natural extracts, Shop Now !!! ",
    mango: "We have a pulp mango juice with natural extracts, Shop Now !!! ",
    orange:
      "We have a Valencia orange juice with natural extracts, Shop Now !!! ",
    Orange:
      "We have a Valencia orange juice with natural extracts, Shop Now !!! ",
    apple: "We have a Rich Apple juice with natural extracts, Shop Now !!! ",
    Apple: "We have a Rich Apple juice with natural extracts, Shop Now !!! ",
    ok: "Thank You So Much 😊",
    Bye: "Okay! Will meet soon. TC..",
  };
  let user = document.getElementById("userBox").value;
  document.getElementById("chatLog").innerHTML = user + "<br>";
  if (user in know) {
    document.getElementById("chatLog").innerHTML = know[user] + "<br>";
  } else {
    document.getElementById("chatLog").innerHTML =
      "Oops! I think you entered a wrong option. Please select an option from below <br>";
  }
}

let addBot = document.querySelector(".bot");
let modalBox = document.querySelector(".modal-box");
let modalCloseIcon = document.querySelector(".modal-close_icon");

addBot.addEventListener("click", function () {
  modalBox.classList.add("bg-on");
});
modalCloseIcon.addEventListener("click", function () {
  modalBox.classList.remove("bg-on");
});

//   carousel//
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

//carousel2//
var slideIndex2 = 1;
showSlides2(slideIndex2);

function plusSlides2(n) {
  showSlides2((slideIndex2 += n));
}

function currentSlide2(n) {
  showSlides2((slideIndex2 = n));
}

function showSlides2(n) {
  var i;
  var slides2 = document.getElementsByClassName("mySlidess");
  var dots = document.getElementsByClassName("dot11");
  if (n > slides2.length) {
    slideIndex2 = 1;
  }
  if (n < 1) {
    slideIndex2 = slides2.length;
  }
  for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides2[slideIndex2 - 1].style.display = "block";
  dots[slideIndex2 - 1].className += " active";
}

// let video = document.getElementById("video");
// // console.log("object")
// let overlay = document.querySelector(".overlay");

// video.addEventListener("click", () => {
//   overlay.style.display = "none";
//   video.style.opacity = "1";
// });

// login_Btn = document.querySelector('.login_Btn')
// login_Btn.addEventListener('click',()=>{

//   window.location = "mailLogin.html"
// })