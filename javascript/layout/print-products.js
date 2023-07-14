/*
    ==========================================
        PRINTINT PRODUCTS
    ==========================================
*/

import * as variables from '../global/variables.js';
import * as functions from '../global/functions.js';

export let storeProductsContainer = document.querySelector(".store__products");

export let options = { 
    all: true,
    // brand: false,
    descendant: false,
    ascendant: false,
    kids: false,
    women: false,
    men: false
}

export let optionButtons = [...document.querySelectorAll(".store__options__item")];

export let filteredProducts = new Array();

export function resetProducts(parentContainer){
    let containerChildren = [...parentContainer.children]
    containerChildren.forEach((item)=>{
        item.remove();
    });
}

export function filterStoreProducts(){
    if(options.all){
        console.log("se ingresa a all");
        filteredProducts = variables.products;
    }

    
    if(options.kids){
        console.log("se ingresa a kids");
        filteredProducts = variables.products.map((item)=>{
            if(item.description == "NIÑOS"){
                return item;
            }
        });
    }else if(options.women){
        console.log("se ingresa a women");
        filteredProducts = variables.products.map((item)=>{
            if(item.description == "DAMAS"){
                return item;
            }
        })
    }else if(options.men){
        console.log("se ingresa a men");
        filteredProducts = variables.products.map((item)=>{
            if(item.description == "CABALLEROS"){
                return item;
            }
        })
    }

    if(options.descendant){
        console.log("se ingresa a descendant");
        filteredProducts.sort((a, b)=>{
            if(a.price > b.price){
                return -1;
            }
            else if(a.price < b.price){
                return 1;
            }
            else{
                return 0;
            }
        });
    }
    
    if(options.ascendant){
        console.log("se ingresa a ascendant");
        filteredProducts.sort((a, b)=>{
            if(a.price < b.price){
                return -1;
            }
            else if(a.price > b.price){
                return 1;
            }
            else{
                return 0;
            }
        });
    }
}

export function printStoreProducts(){
    let lastProducts = new Array();
    filteredProducts.forEach((item)=>{
        if(item != undefined){
            lastProducts.push(item);
        }
    })

    lastProducts.forEach((item)=>{
        let element = document.createElement("article");
        element.className = "store__products__product d-flex flex-column flex-nowrap justify-content-start" +
            "align-items-start gap-2 ";
    
        element.innerHTML = `<div class="position-relative">
                                <img src="${item.image}" 
                                    alt="${item.model}"
                                    class="store__products__product__image">
                                <span class="store__products__product__price position-absolute py-1 px-2 rounded-3">
                                    $${item.price}</span>
                                <span class="store__products__product__like position-absolute">
                                    <ion-icon name="heart-outline"></ion-icon>
                                </span>
                            </div>
    
                            <div class="store__products__product__content d-flex flex-column flex-nowrap 
                                justify-content-start align-items-start py-1 px-3 gap-0">
                                <h3 class="store__products__product__title text-cente mb-3">${item.model}</h3>
                                <p class="store__products__product__description mb-2 fw-bold">
                                    <em>${item.brand}</em></p>
                                <p class="store__products__product__description m-0">
                                    ${item.description}</p>
                                <p class="store__products__product__description mb-4">
                                    ${item.stars}</p>
                                <span class="store__products__product__button add-cart d-inline-block rounded-pill fw-bolder px-3 py-2 mx-auto" 
                                    id="${item.id}">
                                    🛒 Comprar</span>
                            </div>`
    
        storeProductsContainer.insertAdjacentElement('beforeend', element);
    })
}


export function activeButtons(){
    /*
        ==============================
            WISHLIST
        ==============================
    */
    let likeButton = [...document.querySelectorAll(".store__products__product__like")];

    likeButton.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            console.log("hiciste click");

            if(item.children[0].getAttribute("name") === "heart" &&
                item.children[0].className.includes("opacity-50")){
                
                item.children[0].classList.remove("opacity-50");
                item.children[0].classList.add("opacity-100");
            }else{
                item.children[0].setAttribute("name", "heart-outline");
                item.children[0].classList.remove("opacity-100");
                item.children[0].classList.remove("opacity-50");
            }
        });
        
        item.addEventListener('mouseenter', (e)=>{
            console.log("entraste al elemento");

            console.log("mouseenter");
            if(item.children[0].getAttribute("name") === "heart-outline"){

                item.children[0].setAttribute("name", "heart");
                item.children[0].classList.add("opacity-50");

            }else if(item.children[0].getAttribute("name") === "heart" &&
                item.children[0].className.includes("opacity-100")){

                item.children[0].setAttribute("name", "heart-dislike");
            }
        });

        item.addEventListener('mouseleave', (e)=>{
            console.log("saliste del elemento");
            console.log("mouseleave");
            if(item.children[0].getAttribute("name") === "heart" && 
                item.children[0].className.includes("opacity-50")){
                
                item.children[0].setAttribute("name", "heart-outline");
            }else if(item.children[0].getAttribute("name") === "heart-dislike"){
                
                item.children[0].setAttribute("name", "heart")
            }
        });
    });

    /*
        ==========================================
            CART
        ==========================================
    */

    let addCart = [...document.querySelectorAll(".add-cart")]; 

    addCart.forEach((item)=>{
        item.addEventListener('click', (e)=>{
            variables.sale.addProduct(variables.products.find((element)=>element.id == item.getAttribute("id")).id);
            functions.displayCartCount();
        });
    });
}