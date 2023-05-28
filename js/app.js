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
    constructor(description, price, stars){
        this.description = description;
        this.price = price;
        this.stars = stars;
    }
}

/*
    ==========================================
        CART
    ==========================================
*/

let cart = new Array();


