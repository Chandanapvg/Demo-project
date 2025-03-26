document.addEventListener("DOMContentLoaded", function load() {



    const products = [
        { id: 1, title: "Wireless Headphones", quantity: 1, price: 99.99, imageUrl: "./assests/Group 120.png" },
        { id: 2, title: "Gaming Mouse", quantity: 1, price: 49.99, imageUrl: "./assests/Group 121.png" },
        { id: 3, title: "Mechanical Keyboard", quantity: 1, price: 129.99, imageUrl: "./assests/Group 122.png" },
        { id: 4, title: "4K Monitor", quantity: 1, price: 299.99, imageUrl: "./assests/Group 122.png" },
        { id: 5, title: "Bluetooth Speaker", quantity: 1, price: 79.99, imageUrl: "./assests/Group 116.png" }
    ];

    let cart = [
    ];


    //Cart button click

    let addToCartBtn = document.querySelectorAll(".add-to-cart-btn")
    addToCartBtn.forEach(button => {
        button.addEventListener("click", addToCart)
    })
   
    

    function addToCart(event) {
        let productId = event.target.getAttribute("product-id")
        let updateCartArray = true;
        

        // checks product already exit in cart
        cart.filter(cartItem => {
            if (cartItem.id == productId) {
                cartItem.quantity += 1;
                updateCartArray = false;
                
            }
        })


        if (updateCartArray) {
            products.filter(product => {
                if (product.id == productId) {
                    cart.push(product)
                }

            })

        }
        activeCartDrawer();
    }

    function activeCartDrawer() {
        let cartDrawer = document.querySelector(".card-drawer")
        cartDrawer.classList.add("open")
        let cartBody = cartDrawer.querySelector(".card-drawer__body")
        cartBody.replaceChildren();
        cart=[1,2,3,4,5]
        cart.forEach(cartItem => {
            cartBody.insertAdjacentHTML("beforeend", `
                      <div class="card-drawer__body-content cart-item" product-id="${cartItem.id}" >
    
                            <div class="card-drawer__item">
                                <img src="${cartItem.imageUrl}" alt="">
    
                            </div>
                            <div class="card-drawer__item-body">
                                <div class="card-drawer__item-desc">
    
                                    <div class="card-drawer__item-content">
                                        <h3 class="h4">${cartItem.title}</h3>
                                        <p class="h5">ONE-TIME PURCHASE</p>
                                    </div>
                                    <div class="card-drawer__item-delete">
    
                                        <button class="btn-delete"><img src="./assests/image 145.png" alt=""></button>
                                    </div>
                                </div>
    
                                <div class="card-drawer__quantity" >
                                    <div class="card-drawer__quantity-wrapper" >
                                        <button action-type="decrement" class="card-drawer__quantity-decriment">-</button>
                                        <input class="card-drawer__quantity-value" type="number" value="${cartItem.quantity}" readonly>
                                        <button action-type="increment" class="card-drawer__quantity-incriment">+</button>
    
    
    
                                    </div>
                                    <div class="card-drawer__quantity-price">
                                        <span>$ ${(cartItem.price * cartItem.quantity).toFixed(2)}</span>
                                    </div>
                                </div>
    
                            </div>
    
                        </div>`)
           
        })

        updateTotal();
    
        let plusButtons = document.querySelectorAll(".card-drawer__quantity-incriment")


        plusButtons.forEach(button => {
            button.addEventListener("click", cardQuantityIncrimentDecrement)
        })

        let minusButtons = document.querySelectorAll(".card-drawer__quantity-decriment")
        minusButtons.forEach(button => {
            console.log(button)
            button.addEventListener("click", cardQuantityIncrimentDecrement)
        })

        let deleteButtons = document.querySelectorAll(".btn-delete")
        deleteButtons.forEach(button => {
            button.addEventListener("click", deleteCartItem)
        })
    }

    function updateTotal(){
        let total = 0;
        cart.forEach(item => {
           total += item.quantity * item.price
        })
        document.querySelector(".cart-drawer-total").innerHTML = "$" + total.toFixed(2)
    }
    function deleteCartItem(e) {
        
       let parentElement = e.target.closest(".cart-item")
       let deleteItemId = parseInt(parentElement.getAttribute("product-id"))
        let indexValue = cart.findIndex(item => item.id == deleteItemId) 
        cart.splice(indexValue,1)
        activeCartDrawer();
    }


    let cardBtn = document.querySelector(".header__cart-btn")
    cardBtn.addEventListener("click", activeCartDrawer)

    function closeCartDrawer() {

        let closeBcloseDrawer = document.querySelector(".card-drawer")
        closeBcloseDrawer.classList.remove("open")
    }

    let clsBtn = document.querySelector(".cart-close-button")


    clsBtn.addEventListener("click", closeCartDrawer)

    let clsoverlay = document.querySelector(".card-drawer__overlay")
    clsoverlay.addEventListener("click", closeCartDrawer)


    function cardQuantityIncrimentDecrement(e) {
        let actionType = e.target.getAttribute("action-type");  
        let parentElement = e.target.closest(".cart-item");
        let inputEle = parentElement.querySelector(".card-drawer__quantity-value")


        let incrementDecrementValue = 1
        if (actionType != "increment") {
            incrementDecrementValue = -1
        }

        
        let updatedValue = parseInt(inputEle.value) + incrementDecrementValue

        let priceElement = parentElement.querySelector(".card-drawer__quantity-price span")
        let productId = parseInt(parentElement.getAttribute("product-id"))

        let productObj = cart.filter(product => {
            if (product.id == productId) {
                product.quantity = updatedValue
                return product
            }
        })

        if (updatedValue >= 1) {
            inputEle.value = updatedValue
            let value = productObj[0].price * updatedValue
            priceElement.innerHTML = "$ " + parseFloat(value).toFixed(2)
            updateTotal();

        }

    }

})


