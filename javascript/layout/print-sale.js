/*
    ==========================================
        PRINT SALE CART
    ==========================================
*/
import * as variables from '../global/variables.js';
import * as functions from '../global/functions.js';
import {resetProducts} from '../layout/print-products.js';

export let cartProductsContainer = document.querySelector(".cart__products");

export let removeButtons;
export let removeQuantity;
export let addQuantity;

export let page = document.querySelector(".cart");

export function printCartProducts(){
    if(variables.sale.productsAdded.length > 0){
        variables.sale.productsAdded.forEach((cartProduct)=>{
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
        printTotalPrice();
    }else{
        printNoProductsInCart();
    }   
}

export function activeCartButtons(){
        removeButtons = document.querySelectorAll(".remove-cart");

        removeQuantity = document.querySelectorAll(".remove-quantity");

        addQuantity = document.querySelectorAll(".add-quantity");

        removeButtons.forEach((item)=>{
            item.addEventListener('click', (e)=>{
        
                variables.sale.deleteProduct(parseInt(item.getAttribute("id")));
                
                functions.displayCartCount();

                resetProducts(cartProductsContainer);
        
                printCartProducts();
            });
        });

        console.log(removeQuantity);
        removeQuantity.forEach((item)=>{
            console.log(item.getAttribute("id"));
            item.addEventListener('click', (e)=>{
                variables.sale.removeQuantity(parseInt(item.getAttribute("id")));
                let quantityText = item.nextElementSibling;
                quantityText.textContent = `${variables.sale.find((product)=>product.id ==
                    parseInt(item.getAttribute("id"))).quantity}`;
            
                functions.displayCartCount();
                updateTotalPrice();
            })
        })

        console.log(addQuantity);
        addQuantity.forEach((item)=>{
            console.log(item.getAttribute("id"));
            item.addEventListener('click', (e)=>{
                variables.sale.addQuantity(parseInt(item.getAttribute("id")));

                let quantityText = item.previousElementSibling;
                quantityText.textContent = `${variables.sale.find((product)=>product.id ==
                    parseInt(item.getAttribute("id"))).quantity}`;
            
                functions.displayCartCount();
                updateTotalPrice();
            })
        })
}

export function printNoProductsInCart(){
    let message = document.createElement("p");
        message.className = "cart__products__message fw-bolder p-5";
        message.textContent = "No tienes productos en el carrito ♦️♦️♦️ 🤔";
        
        page.insertAdjacentElement('afterbegin', message);
}

export function printTotalPrice(){
    let buy = document.createElement("article");
    buy.className = "d-flex justify-content-center align-items-center py-5";

    buy.innerHTML = `<span class="cart__products__buy rounded-pill fw-bolder px-3 py-2">Pagar $${variables.sale.getTotalPrice()}</span>`

    cartProductsContainer.insertAdjacentElement('beforeend', buy);
}

export function updateTotalPrice(){
    let buy = document.querySelector(".cart__products__buy");

    buy.textContent = `Pagar $${variables.sale.getTotalPrice()}`
}