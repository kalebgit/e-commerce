/*
    ==========================================
        STORE
    ==========================================
*/
import * as store from './layout/print-products.js';

//eventos page
window.addEventListener('load', (e)=>{
    store.resetProducts(store.storeProductsContainer);
    store.filterStoreProducts();
    setTimeout(store.printStoreProducts, 200);
    setTimeout(store.activeButtons, 202);
});

let button;

store.optionButtons.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.classList.toggle("store__options__item-pressed");
        if(item.className.includes("store__options__item-pressed")){
            switch(item.getAttribute("id")){
                case "all":
                    store.options.all = true;
                    break;
                // case "brand":
                //     options.brand = true;
                //     break;
                case "descendant":
                    store.options.descendant = true;
                    store.options.ascendant = false;
                    button = document.getElementById("ascendant");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "ascendant":
                    store.options.ascendant = true;
                    store.options.descendant = false;

                    button = document.getElementById("descendant");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "kids":
                    store.options.kids = true;
                    store.options.women = false;
                    button = document.getElementById("women");
                    button.classList.remove("store__options__item-pressed");
                    store.options.men = false;
                    button = document.getElementById("men");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "women":
                    store.options.women = true;
                    store.options.kids = false;
                    button = document.getElementById("kids");
                    button.classList.remove("store__options__item-pressed");
                    store.options.men = false;
                    button = document.getElementById("men");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "men":
                    store.options.men = true;
                    store.options.kids = false;
                    button = document.getElementById("kids");
                    button.classList.remove("store__options__item-pressed");
                    store.options.women = false;
                    button = document.getElementById("women");
                    button.classList.remove("store__options__item-pressed");
                    break;
                default:
                    break;
            }
        }else{
                switch(item.getAttribute("id")){
                    case "all":
                        store.options.all = false;
                        break;
                    case "descendant":
                        store.options.descendant = false;
                        break;
                    case "ascendant":
                        store.options.ascendant = false;
                        break;
                    case "kids":
                        store.options.kids = false;
                        break;
                    case "women":
                        store.options.women = false;
                        break;
                    case "men":
                        store.options.men = false;
                        break;
                    default:
                        break;
            }
        }

        store.resetProducts(store.storeProductsContainer);
        store.filterStoreProducts();
        store.printStoreProducts();
        store.activeButtons();
    });
});