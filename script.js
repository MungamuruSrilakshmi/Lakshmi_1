let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    let item = cart.find(i => i.name === name);

    if(item){
        item.qty += 1;
    } else {
        cart.push({name, price, qty:1});
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(name + " added to cart!");
}

function loadCart() {
    let container = document.getElementById("cartItems");
    let total = 0;
    container.innerHTML = "";

    cart.forEach((item, index) => {
        let itemTotal = item.price * item.qty;
        total += itemTotal;

        container.innerHTML += `
        <div class="cart-item">
            <div>
                <h4>${item.name}</h4>
                <p>₹${item.price} x ${item.qty}</p>
            </div>
            <div>
                <p>₹${itemTotal}</p>
                <button onclick="removeItem(${index})">❌</button>
            </div>
        </div>`;
    });

    document.getElementById("total").innerText = "Total: ₹" + total;
}

function removeItem(index){
    cart.splice(index,1);
    localStorage.setItem("cart", JSON.stringify(cart));
    loadCart();
}

function checkout() {
    alert("🎉 Order placed successfully!");
    localStorage.removeItem("cart");
    location.reload();
}
