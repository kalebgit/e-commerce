/*
    ==========================================
        CART
    ==========================================
*/


let cartProductsContainer = document.querySelector(".cart__products")
cartProductsContainer.className = "d-flex flex-column flex-nowrap justify-content-start align-items-center";

let removeButtons = document.querySelector(".remove-cart");

if(cart.length > 0){
    resetProducts(cartProductsContainer);
    filterCartProducts();
    printCartProducts();

    removeButtons.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            resetProducts(cartProducts);
    
            filterCartProducts();
    
            printCartProducts();
        });
    });
}else{
    let page = document.querySelector(".cart");

    page.classList.add("full-screen");

    let message = document.createElement("p");
    message.className = "cart__products__message fw-bolder p-5";
    message.textContent = "No tienes productos en el carrito ♦️♦️♦️ 🤔";
    
    page.insertAdjacentElement('afterbegin', message);
}








function filterCartProducts(){
    cart.map((element)=>{
        if(element.id === parseInt(item.getAttribute("id"))){
            element.quantity--;
            if(element.quantity > 0){
                return element;
            }
        }
    });
}

function printCartProducts(){
    lastProducts = new Array();
    cart.forEach((item)=>{
        if(item != undefined){
            lastProducts.push(item);
        }
    })

    lastProducts.forEach((item)=>{
        let element = document.createElement("article");
        element.className = "cart__products__product d-flex flex-row flex-nowrap justify-content-start align-items-start position-relative p-4 gap-4";
    
        element.innerHTML = `
        <img src="${cartProduct.image}"
    alt="${cartProduct.model}"
    class="cart__products__product__image img-thumbnail">
    <div class="cart__products__product__content d-flex flex-column flex-nowrap 
        justify-content-start align-items-start">
            <h2 class="cart__products__product__content__title fw-bolder">${cartPorduct.model}</h2>
            <p class="cart__products__product__content__text">${cartProduct.brand} - ${cartProduct.description}</p>
            <p class="cart__products__product__content__price ">$${cartProduct.price}</p>
    </div>
    <div class="cart__products__product__options align-self-end d-flex flex-row
        flex-nowrap justify-content-center gap-3">
            <button id="" class="cart__products__product__options__button 
                cart__products__product__options__button--white fw-bolder
                d-flex justify-content-center align-items-center add-quantity">–</button>
            <p class="cart__products__product__options__text">${cartProduct.quantity}</p>
            <button id="remove" class="cart__products__product__options__button fw-bolder
                d-flex justify-content-center align-items-center remove-quantity">
                +</button>
    </div>

    <ion-icon name="close-outline" id="${cartProduct.id}" class="position-absolute 
        cart__products__product__remove p-4 remove-cart"></ion-icon>`
    
        cartProductsContainer.insertAdjacentElement('beforeend', element);
    })
}
