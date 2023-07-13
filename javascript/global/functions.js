/*
    ==========================================
        GENERAL FUNCTIONS
    ==========================================
*/
import * as variables from '../global/variables.js'

export async function fetchProducts(){
    const response = await fetch("../datos/products.json");
    if(!(response.ok === true)){
        throw new Error("Error al recuperar la informacion");
    }else{
        let data = await response.json();

        for(const object of data){
            variables.products.push(object);
        }
        console.log(variables.products);
    }
}


export function displayCartCount(){
    let quantityCart = document.querySelector(".navi__count");
    if(variables.sale.productsAdded.length > 0){
        quantityCart.classList.add("pop");    
        quantityCart.textContent = "" + variables.sale.productsAdded.reduce((sum, product)=>{
            if(product && true){
                return sum += product.quantity;
            }else{
                return sum += 0;
            }
        }, 0);
    }
    else{
        quantityCart.classList.remove("pop");
    }
}


//cart functions

export function savaSale(updatedSale){
    console.log(updatedSale);
    sessionStorage.setItem("cart", JSON.stringify(updatedSale));
}

export function getSale(){
    return JSON.parse(sessionStorage.getItem("cart"))?.productsAdded || new Array();
}