/*
    ==========================================
        SORT SYSTEM
    ==========================================
*/
let storeProductsContainer = document.querySelector(".store__products");

let options = { 
    all: true,
    // brand: false,
    descendant: false,
    ascendant: false,
    kids: false,
    women: false,
    men: false
}

let optionButtons = [...document.querySelectorAll(".store__options__item")];

let filteredProducts = new Array();

let button;

resetProducts(storeProductsContainer);
filterStoreProducts();
printStoreProducts();

optionButtons.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.classList.toggle("store__options__item-pressed");
        if(item.className.includes("store__options__item-pressed")){
            switch(item.getAttribute("id")){
                case "all":
                    options.all = true;
                    break;
                // case "brand":
                //     options.brand = true;
                //     break;
                case "descendant":
                    options.descendant = true;
                    options.ascendant = false;
                    button = document.getElementById("ascendant");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "ascendant":
                    options.ascendant = true;
                    options.descendant = false;

                    button = document.getElementById("descendant");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "kids":
                    options.kids = true;
                    options.women = false;
                    button = document.getElementById("women");
                    button.classList.remove("store__options__item-pressed");
                    options.men = false;
                    button = document.getElementById("men");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "women":
                    options.women = true;
                    options.kids = false;
                    button = document.getElementById("kids");
                    button.classList.remove("store__options__item-pressed");
                    options.men = false;
                    button = document.getElementById("men");
                    button.classList.remove("store__options__item-pressed");
                    break;
                case "men":
                    options.men = true;
                    options.kids = false;
                    button = document.getElementById("kids");
                    button.classList.remove("store__options__item-pressed");
                    options.women = false;
                    button = document.getElementById("women");
                    button.classList.remove("store__options__item-pressed");
                    break;
                default:
                    break;
            }
        }else{
                switch(item.getAttribute("id")){
                    case "all":
                        options.all = false;
                        break;
                    case "descendant":
                        options.descendant = false;
                        break;
                    case "ascendant":
                        options.ascendant = false;
                        break;
                    case "kids":
                        options.kids = false;
                        break;
                    case "women":
                        options.women = false;
                        break;
                    case "men":
                        options.men = false;
                        break;
                    default:
                        break;
            }
        }

        resetProducts(storeProductsContainer);
        filterStoreProducts();
        printStoreProducts();
    });
});



function filterStoreProducts(){
    if(options.all){
        console.log("se ingresa a all");
        filteredProducts = products;
    }

    
    if(options.kids){
        console.log("se ingresa a kids");
        filteredProducts = products.map((item)=>{
            if(item.description == "NIÑOS"){
                return item;
            }
        });
    }else if(options.women){
        console.log("se ingresa a women");
        filteredProducts = products.map((item)=>{
            if(item.description == "DAMAS"){
                return item;
            }
        })
    }else if(options.men){
        console.log("se ingresa a men");
        filteredProducts = products.map((item)=>{
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

function printStoreProducts(){
    lastProducts = new Array();
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
        let product = products.find((element)=>{
            if(parseInt(item.getAttribute("id")) === element.id){
                return element;
            }
        });

        console.log(product);

        if(product.quantity > 0){
            product.quantity++;
        }else{
            product.quantity++;
            cart.unshift(product);
        }
        
        let quantityCart = document.querySelector(".navi__count");
        quantityCart.classList.add("pop");
        if(cart.length > 0){
            quantityCart.textContent = "" + cart.reduce((sum, element)=>{
                return sum += element.quantity;
            }, 0);
        }
    });
});
