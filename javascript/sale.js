/*
    ==========================================
        CART, SALE
    ==========================================
*/
import * as variables from './global/variables.js';
import * as sale from './layout/print-sale.js';

sale.cartProductsContainer.className = "d-flex flex-column flex-nowrap justify-content-start align-items-center";

window.addEventListener('load', ()=>{
    sale.page.classList.add("full-screen");
    if(variables.sale.productsAdded.length > 0){
        sale.print();
    }else{
        sale.printNoProductsInCart();
    }
})