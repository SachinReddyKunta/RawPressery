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

let logoutBtn = document.getElementById("logout");
logoutBtn.addEventListener("click", logout);

function logout() {
  localStorage.removeItem("loginData");
  location = "mailLogin.html";
}

let dashContent = document.querySelector(".dash-content");
let personalContent = document.querySelector(".personal-content");
let addressContent = document.querySelector(".address-content");
let ordersContent = document.querySelector(".orders-content");

let dashboard = document.querySelector(".dashBtn");
dashboard.addEventListener("click", Dashboard);

let Personal = document.querySelector(".personalBtn");
Personal.addEventListener("click", PersonalData);

let address = document.querySelector(".addressBtn");
address.addEventListener("click", Address);

let ordering = document.querySelector(".orderBtn");
ordering.addEventListener("click", Orderingdata);

function Dashboard() {
  dashboard.style.color = "black";
  Personal.style.color = "grey";
  address.style.color = "grey";
  ordering.style.color = "grey";
  dashContent.style.display = "flex";
  personalContent.style.display = "none";
  addressContent.style.display = "none";
  ordersContent.style.display = "none";
}
function PersonalData() {
  dashboard.style.color = "grey";
  Personal.style.color = "black";
  address.style.color = "grey";
  ordering.style.color = "grey";
  dashContent.style.display = "none";
  personalContent.style.display = "block";
  addressContent.style.display = "none";
  ordersContent.style.display = "none";
}
function Address() {
  dashboard.style.color = "grey";
  Personal.style.color = "grey";
  address.style.color = "black";
  ordering.style.color = "grey";
  dashContent.style.display = "none";
  personalContent.style.display = "none";
  addressContent.style.display = "block";
  ordersContent.style.display = "none";
}
function Orderingdata() {
  dashboard.style.color = "grey";
  Personal.style.color = "grey";
  address.style.color = "grey";
  ordering.style.color = "black";
  dashContent.style.display = "none";
  personalContent.style.display = "none";
  addressContent.style.display = "none";
  ordersContent.style.display = "block";
}

// let display = document.querySelector('.dashCard1')
let mailDisplay = document.querySelector("#emailing");
let userdisplay = document.querySelector("#usernaming");
let usedisplay = document.querySelector("#useres");
let mailed = document.querySelector("#mailed");

let loginData = JSON.parse(localStorage.getItem("loginData")) || [];
window.addEventListener("load", function () {
  const [{ email, username }] = loginData;

  // if (username, email){
  //   location = "myAccount.html"
  // }
  mailed.textContent = email;
  mailDisplay.textContent = email;
  userdisplay.textContent = username;
  usedisplay.textContent = username;
});
console.log("object");

// function displayData(loginData){
//   let holder = document.querySelector('.dashCard1')
//   let html=""
//    html =`
//   <h3>${loginData[0].email}</h3>
//   <h3>${loginData[0].username}</h3>`
//   holder.innerHTML = html
// }

let emptycart = document.getElementById("emptyCart");
emptycart.addEventListener("click", logoutCart);

function logoutCart() {
  location = "emptyCart.html";
}

let emptycart2 = document.getElementById("emptyCart2");
emptycart2.addEventListener("click", logoutCart2);

function logoutCart2() {
  location = "emptyCart.html";
}
let logocl = document.querySelector("#logocl");
logocl.addEventListener("click", () => {
  location = "landingPage.html";
});
