/*
    ==========================================
        CART
    ==========================================
*/

let cartProductsContainer = document.querySelector(".cart__products")
cartProductsContainer.className = "d-flex flex-column flex-nowrap justify-content-start align-items-center";

let removeButtons;
let removeQuantity;
let addQuantity;

let page = document.querySelector(".cart");
window.addEventListener('load', ()=>{
    
    
        page.classList.add("full-screen");
    if(cart.length > 0){
        printCartProducts();
    }else{
        
        printNoProductsInCart();
        
    }
})


function filterCartProducts(node){
    cart = cart.filter((product)=>product.id != parseInt(node.getAttribute("id")))

    console.log(cart);  
}

function printCartProducts(){
    if(cart.length > 0){
        cart.forEach((cartProduct)=>{
            let element = document.createElement("article");
            element.className = "cart__products__product d-flex flex-row flex-nowrap justify-content-start align-items-start position-relative p-4 gap-4";
        
            element.innerHTML = `
            <img src="${cartProduct.image}"
            alt="${cartProduct.model}"
            class="cart__products__product__image img-thumbnail">
            <div class="cart__products__product__content d-flex flex-column flex-nowrap 
                justify-content-between align-items-start">
                    <h2 class="cart__products__product__content__title fw-bolder m-0">${cartProduct.model}</h2>
                    <p class="cart__products__product__content__text m-0">${cartProduct.brand} - ${cartProduct.description}</p>
                    <p class="cart__products__product__content__price m-0">$${cartProduct.price}</p>
            </div>
            <div class="cart__products__product__options align-self-end d-flex flex-row
                flex-nowrap justify-content-center gap-3">
                    <button id="${cartProduct.id}" class="cart__products__product__options__button 
                        cart__products__product__options__button--white fw-bolder
                        d-flex justify-content-center align-items-center remove-quantity">–</button>
                    <p class="cart__products__product__options__text">${cartProduct.quantity}</p>
                    <button id="${cartProduct.id}" class="cart__products__product__options__button fw-bolder
                        d-flex justify-content-center align-items-center add-quantity">
                        +</button>
            </div>
        
            <ion-icon name="close-outline" id="${cartProduct.id}" class="position-absolute 
                cart__products__product__remove p-4 remove-cart"></ion-icon>`
        
            cartProductsContainer.insertAdjacentElement('beforeend', element);
        });

        activeCartButtons();
    
    }else{
        printNoProductsInCart();
    }   
}

function activeCartButtons(){
        removeButtons = document.querySelectorAll(".remove-cart");

        removeQuantity = document.querySelectorAll(".remove-quantity");

        addQuantity = document.querySelectorAll(".add-quantity");

        removeButtons.forEach((item)=>{
            item.addEventListener('click', (e)=>{
        
                filterCartProducts(item);
                
                displayCartCount();

                resetProducts(cartProductsContainer);
        
                printCartProducts();
            });
        });

        console.log(removeQuantity);
        removeQuantity.forEach((item)=>{
            console.log(item.getAttribute("id"));
            item.addEventListener('click', (e)=>{
                let cartPorductChanging = cart.find((element)=>{
                    return element.id == item.getAttribute("id");
                })

                console.log(cartPorductChanging);

                if(cartPorductChanging.quantity > 1){
                    cartPorductChanging.quantity--;
                }
                

                let quantityText = item.nextElementSibling;
                quantityText.textContent = `${cartPorductChanging.quantity}`;
            
                displayCartCount();
            })
        })

        console.log(addQuantity);
        addQuantity.forEach((item)=>{
            console.log(item.getAttribute("id"));
            item.addEventListener('click', (e)=>{
                let cartPorductChanging = cart.find((element)=>{
                    return element.id == item.getAttribute("id");
                })

                console.log(cartPorductChanging);

                if(cartPorductChanging.quantity < 15){
                    cartPorductChanging.quantity++;
                }

                let quantityText = item.previousElementSibling;
                quantityText.textContent = `${cartPorductChanging.quantity}`;
            
                displayCartCount();
            })
        })
}

function printNoProductsInCart(){
    let message = document.createElement("p");
        message.className = "cart__products__message fw-bolder p-5";
        message.textContent = "No tienes productos en el carrito ♦️♦️♦️ 🤔";
        
        page.insertAdjacentElement('afterbegin', message);
}