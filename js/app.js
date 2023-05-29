/*
    ==========================================
        DROP MENUS
    ==========================================
*/

//dropmenu
let dropMenu = document.querySelector(".navi__dropdown");
let navigation = document.querySelector(".navi");
let navList = document.querySelector(".navi__bar");

dropMenu.addEventListener('click', (e)=>{
    e.stopPropagation();
    navigation.classList.remove("sub-menu")
    userMenu.classList.remove("appear");
    dropMenu.classList.toggle("rotate");
    navigation.classList.toggle("expand");
    navList.classList.toggle("appear");
}, false);

//drop user menu
let userButton = document.querySelector(".navi__user");
let userMenu = document.querySelector(".navi__account");

userButton.addEventListener('click', (e)=>{
    dropMenu.classList.remove("rotate");
    navigation.classList.remove("expand");
    navList.classList.remove("appear");
    navigation.classList.toggle("sub-menu")
    userMenu.classList.toggle("appear");
});


/*
    ==========================================
        ACCOUNT FORMS
    ==========================================
*/
let close = [...document.querySelectorAll(".home__form__icon-close")];
let registerForm = document.querySelector(".register");
let loginForm = document.querySelector(".login");

close.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.parentElement.parentElement.classList.remove("popup");
    })
});

let openRegister = [...document.querySelectorAll(".openRegister")];

openRegister.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        loginForm.classList.remove("popup");
        registerForm.classList.add("popup");
    })
});

let openLogin = [...document.querySelectorAll(".openLogin")];

openLogin.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        registerForm.classList.remove("popup");
        loginForm.classList.add("popup");   
    })
});


/*
    ==========================================
        CLASSES
    ==========================================
*/
class Product{
    constructor(id, model, description, brand,  price, stars, image){
        this.id = id;
        this.model = model;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.stars = stars;
        this.image = image;
    }
}

let products = [new Product(101, "Air Jordan 1 Mid SE", "CABALLEROS", "AIR ORDAN", 3299, "por definir", 
    "../media/img/store/products/jordan-1-hombre.webp"),
new Product(102, "Air Jordan 1 Mid SE", "DAMAS", "AIR JORDAN", 3299, "por definir", 
    "../media/img/store/products/jordan-1-mujer.jpeg"),
new Product(103, "Nike Air Force 1 Shadow", "DAMAS", "AIR JORDAN", 3199, "por definir", 
    "../media/img/store/products/nike-air-froce-shadow.webp"),
new Product(104, "Sudadera Jordan Air Garden", "NIÑOS", "AIR JORDAN", 1499, "por definir", 
    "../media/img/store/products/sudadera-jordan-garden.jpg"),
new Product(105, "Sudadera Puma Semana Santa", "DAMAS", "PUMA", 1499, "por definir", 
    "../media/img/store/products/sudadera-puma-semana-santa.jpg"),
new Product(106, "Sudadera Adidas Crew", "DAMAS", "ADIDAS", 1699, "por definir", 
    "../media/img/store/products/sudadera-adidas-crew.jpg"),
new Product(107, "Sudadera Puma Easter", "CABALLEROS", "PUMA", 1799, "por definir", 
    "../media/img/store/products/sudadera-puma-easter.jpg"),
new Product(108, "Pantalón Puma X The Ragged Priest", "DAMAS", "PUMA", 1799, "por definir", 
    "../media/img/store/products/pantalon-puma-ragged-priest.jpg"),
new Product(109, "Tenis Adidas Nizza Platform Mid x Hello Kitty", "DAMAS", "", 2199, "por definir", 
    "../media/img/store/products/tenis-adidas-nizza-platform-hello-kitty.webp"),
new Product(110, "Gorra New Era Yankees Sakura gFifty", "CABALLEROS", "NEW ERA", 1049, "por definir",
    "../media/img/store/products/gorra-new-era-yankees-sakura.jpg"),
new Product(111, "Sudadera Puma Classics Gen", "NIÑOS", "PUMA", 1149, "por definir", 
    "../media/img/store/products/sudadera-puma-classics-gen.jpg"), 
new Product(112, "Sudadera Puma X The Ragged Priest", "DAMAS", "PUMA", 1799, "por definir", 
    "../media/img/store/products/sudadera-puma-ragged-priest.jpg"),]


let productsContainer = document.querySelector(".store__products");



/*
    ==========================================
        SORT SYSTEM
    ==========================================
*/

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

        resetProducts();
        filterProducts();
        printProducts();
    });
});

window.addEventListener('load', (e)=>{
    resetProducts();
    filterProducts();
    printProducts();
});

function filterProducts(){
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

function resetProducts(){
    let containerChildren = [...productsContainer.children]
    containerChildren.forEach((item)=>{
        item.remove();
    });
}

function printProducts(){
    lastProducts = new Array();
    filteredProducts.forEach((item)=>{
        if(item != undefined){
            lastProducts.push(item);
        }
    })

    lastProducts.forEach((item)=>{
        let element = document.createElement("article");
        element.className = "store__products__product d-flex flex-column flex-nowrap justify-content-start" +
            "align-items-start gap-0 ";
    
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
                                <p class="store__products__product__description m-0">
                                    ${item.stars}</p>
                                
                            </div>`
    
        productsContainer.insertAdjacentElement('beforeend', element);
    })
}



/*
    ==========================================
        CART
    ==========================================
*/

let cart = new Array();


/*
    ==========================================
        WISHLIST
    ==========================================
*/

let wishList = new Array();

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



