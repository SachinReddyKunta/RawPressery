const loadData = () => {
    fetch("http://localhost:3000/juices")
    .then(res => res.json())
    .then(data => {
        let output = "";

        for(let i=0;i<data.length;i++){
            var d = +("100" + i);

            output += `
            <div class="card">
            <div><img src="${data[i].image}"></div>
            <h3 class="productName">${data[i].name}</h3>
            <div class="price">
            <span class="strikePrice"><i class="fas fa-rupee-sign"></i>${data[i].CP}</span>
            <span class="actualPrice"><i class="fas fa-rupee-sign"></i>${data[i].SP}</span>
            </div>
            <p class="capacity">${data[i].capacity}</p>
            <button id="${data[i].id}" class="addToCart" onclick="addToCart(${d})">ADD TO CART</button>
            <div id="${d}" class="addToCartButton">
            <button id="minus" class="minus" onclick="decrement(${d})"> - </button>
            <span id="count" class="count">1</span>
            <button id="plus" class="plus" onclick="increment(${d})"> + </button>
            </div>
            </div>
            `
        }
        document.getElementById("juicesCont").innerHTML = output
    })
}
window.addEventListener("load",loadData);

let cart = JSON.parse(localStorage.getItem("cart")) || []

function addToCart(d){

    let id = event.target.id;
    fetch("http://localhost:3000/juices")
    .then(res => res.json())
    .then(data => {
    let [current] =  data.filter((el) => id==el.id);

    let obj = {
     id : current.id,
     qty : 1
    }
  
    cart = [...cart,obj]
   

    saveToLocalStorage("cart",cart)

    document.getElementById(`${id}`).style.display = "none";
    document.getElementById(`${d}`).style.display = "block"    
    })
}

function increment(d) {
    let parent = event.target.parentNode
    let grandparent = parent.previousSibling
    let id = grandparent.id

    let span = parent.querySelector(".count")


    if(id==null){
        parent = event.target.parentNode
        grandparent = parent.parentNode
        id = grandparent.querySelector(".addToCart").id;

    }
    if(id){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id==id){
                ++cart[i].qty
                span.innerHTML = cart[i].qty
            }
            
        }
        saveToLocalStorage("cart",cart)
    }
}

function decrement(d) {
    let parent = event.target.parentElement
    let grandparent = parent.parentElement
    let id = grandparent.querySelector(".addToCart").id

    let span = parent.querySelector(".count")

    if(id){
        for(let i=0;i<cart.length;i++){
            if(cart[i].id==id){
                if(cart[i].qty>1){
                    --cart[i].qty
                    span.innerHTML = cart[i].qty
                }
                else if(cart[i].qty==1){
                    document.getElementById(`${id}`).style.display = "block";
                    document.getElementById(`${d}`).style.display = "none";
                    --cart[i].qty
                }
            }
        }
        saveToLocalStorage("cart",cart)
    }
}

function saveToLocalStorage(name,value){
    if(typeof value !== 'string'){
        localStorage.setItem(name,JSON.stringify(value))
    }
    else {
        localStorage.setItem(name,value)
    }
}

document.getElementById("emptyCart").addEventListener("click",function(){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
    if(cart.length===0){
      location.href = "emptyCart.html"
    }
    else if(cart.length>0){
      location.href = "cart_2.html"
    }
  })