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
        this.quantity = 0;
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
new Product(109, "Tenis Adidas Nizza Platform Mid x Hello Kitty", "DAMAS", "ADIDAS", 2199, "por definir", 
    "../media/img/store/products/tenis-adidas-nizza-platform-hello-kitty.webp"),
new Product(110, "Gorra New Era Yankees Sakura gFifty", "CABALLEROS", "NEW ERA", 1049, "por definir",
    "../media/img/store/products/gorra-new-era-yankees-sakura.jpg"),
new Product(111, "Sudadera Puma Classics Gen", "NIÑOS", "PUMA", 1149, "por definir", 
    "../media/img/store/products/sudadera-puma-classics-gen.jpg"), 
new Product(112, "Sudadera Puma X The Ragged Priest", "DAMAS", "PUMA", 1799, "por definir", 
    "../media/img/store/products/sudadera-puma-ragged-priest.jpg"),]


// Arreglo de wishlist
let wishList = new Array();


// Arreglo del cart
let cart = new Array();



function resetProducts(parentContainer){
    let containerChildren = [...parentContainer.children]
    containerChildren.forEach((item)=>{
        item.remove();
    });
}