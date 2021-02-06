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

let loginBtn = document.querySelector(".login_Btn");
loginBtn.addEventListener("click", loginpage);

function loginpage() {
  location = "mailLogin.html";
}

let logocl = document.querySelector("#logocl");
logocl.addEventListener("click", () => {
  location = "landingPage.html";
});

function redirectToJuices(){
  location.href = "juices.html"
}
