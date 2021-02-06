const loadData = () => {
    let output = "";
    let total = 0;

    let cart = JSON.parse(localStorage.getItem("cart")) || []

    for(let i=0;i<cart.length;i++){
        if(cart[i].id<19 && cart[i].id>0){
            fetch(`http://localhost:3000/juices/${cart[i].id}`)
            .then(res => res.json())
            .then(data => {
                let qty = cart[i].qty
                total = total + (Number(data.SP) * qty)
                console.log(data)
                output += `
                <div class="inner">
                <div class="image">
                <img src="${data.image}">
                </div>
                <div class="data">
                <div>
                <div class="name">${data.name}</div>
                </div>
                <div class="flex">
                <div class="foot">
                <div class="capacity">${data.capacity}</div>
                <div class="small"><label>Qty :</label><span id="qty">${qty}</span></div>
                </div>
                <div class="sp"><i class="fas fa-rupee-sign"></i>${data.SP}</div>
                </div>
                </div>
                </div>
                `

                document.getElementById("cartCard").innerHTML = output;
                document.getElementById("subTotal").innerHTML = total + ".00"
                document.getElementById("grandTotal").innerHTML = total + ".00"
            })
        }
        else if(cart[i].id<25 && cart[i].id>18){
            fetch(`  http://localhost:3000/almondmilk/${cart[i].id}`)
            .then(res => res.json())
            .then(data => {
                let qty = cart[i].qty
                total = total + (Number(data.SP) * qty)
                console.log(data)
                output += `
                <div class="inner">
                <div class="image">
                <img src="${data.image}">
                </div>
                <div class="data">
                <div>
                <div class="name">${data.name}</div>
                </div>
                <div class="flex">
                <div class="foot">
                <div class="capacity">${data.capacity}</div>
                <div class="small"><label>Qty :</label><span id="qty">${qty}</span></div>
                </div>
                <div class="sp"><i class="fas fa-rupee-sign"></i>${data.SP}</div>
                </div>
                </div>
                </div>
                `

                document.getElementById("cartCard").innerHTML = output;
                document.getElementById("subTotal").innerHTML = total + ".00"
                document.getElementById("grandTotal").innerHTML = total + ".00"
            })
        }

        else if(cart[i].id<28 && cart[i].id>24){
            fetch(`  http://localhost:3000/proteinmilkshake/${cart[i].id}`)
            .then(res => res.json())
            .then(data => {
                let qty = cart[i].qty
                total = total + (Number(data.SP) * qty)
                console.log(data)
                output += `
                <div class="inner">
                <div class="image">
                <img src="${data.image}">
                </div>
                <div class="data">
                <div>
                <div class="name">${data.name}</div>
                </div>
                <div class="flex">
                <div class="foot">
                <div class="capacity">${data.capacity}</div>
                <div class="small"><label>Qty :</label><span id="qty">${qty}</span></div>
                </div>
                <div class="sp"><i class="fas fa-rupee-sign"></i>${data.SP}</div>
                </div>
                </div>
                </div>
                `

                document.getElementById("cartCard").innerHTML = output;
                document.getElementById("subTotal").innerHTML = total + ".00"
                document.getElementById("grandTotal").innerHTML = total + ".00"
            })
        }

        else if(cart[i].id<57 && cart[i].id>27){
            fetch(`    http://localhost:3000/valuepacks/${cart[i].id}`)
            .then(res => res.json())
            .then(data => {
                let qty = cart[i].qty
                total = total + (Number(data.SP) * qty)
                console.log(data)
                output += `
                <div class="inner">
                <div class="image">
                <img src="${data.image}">
                </div>
                <div class="data">
                <div>
                <div class="name">${data.name}</div>
                </div>
                <div class="flex">
                <div class="foot">
                <div class="capacity">${data.capacity}</div>
                <div class="small"><label>Qty :</label><span id="qty">${qty}</span></div>
                </div>
                <div class="sp"><i class="fas fa-rupee-sign"></i>${data.SP}</div>
                </div>
                </div>
                </div>
                `

                document.getElementById("cartCard").innerHTML = output;
                document.getElementById("subTotal").innerHTML = total + ".00"
                document.getElementById("grandTotal").innerHTML = total + ".00"
            })
        }
       
       
    }
    
}
window.addEventListener("load",loadData);


document.getElementById("placeOrder").addEventListener("click",function(){
    alert("Order Placed")
    localStorage.removeItem("cart")
    location.href = "juices.html"
})

function redirectToCart(){
    location.href = "cart_2.html"
}