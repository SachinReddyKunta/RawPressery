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

let data = [
  {
    id: "1",
    username: "Rinish",
    email: "rinish@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "2",
    username: "Sachin",
    email: "sachin@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "3",
    username: "Shubham",
    email: "shubham@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "4",
    username: "Abhishek",
    email: "abhishek@gmail.com",
    password: "masai",
    type: "user",
  },
  {
    id: "5",
    username: "Raja",
    email: "raja@gmail.com",
    password: "masai",
    type: "user",
  },
];
let loginData = JSON.parse(localStorage.getItem("loginData")) || [];

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", handleSubmit);
});

function handleSubmit() {
  event.preventDefault();

  let form = new FormData(event.target);
  let email = form.get("email");
  let username = form.get("username");
  let password = form.get("password");
  let userDetails = {
    email,
    username,
    password,
  };
  if (authCheck(userDetails)) {
    const { email, username, type } = authCheck(userDetails);
    const time = new Date().toLocaleTimeString();

    const payload = {
      email,
      username,
      type,
      time,
    };
    loginData = [...loginData, payload];
    saveToLocalStorage("loginData", loginData);
    redirect(payload);
  } else {
    myAlert();
  }
}
function authCheck(input) {
  return data.find(
    (user) => user.email === input.email && user.password === input.password
  );
}
function saveToLocalStorage(name, value) {
  if (typeof value !== "string") {
    localStorage.setItem(name, JSON.stringify(value));
  } else {
    localStorage.setItem(name, value);
  }
}

function redirect(currentUser) {
  if (currentUser.type === "user") {
    location = "myAccount.html";
  }
}

function myAlert() {
  alert("Invalid Credentials!");
}

let emptycart = document.getElementById("emptyCart");
emptycart.addEventListener("click", logoutCart);

function logoutCart() {
  location = "emptyCart.html";
}

let logocl = document.querySelector("#logocl");
logocl.addEventListener("click", () => {
  location = "landingPage.html";
});

// let emptycart = document.querySelector('.emptyCart')
// emptycart.addEventListener('click',()=>{

//   location="emptyCart.html"
// })
