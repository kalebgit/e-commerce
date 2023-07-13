import * as variables from './global/variables.js';
import * as menus from './components/menus.js';
import * as accountforms from './components/account-forms.js';
import * as functions from './global/functions.js';

// drop menus
menus.dropMenu.addEventListener('click', (e)=>{
    e.stopPropagation();
    menus.navigation.classList.remove("sub-menu");
    menus.userMenu.classList.remove("appear");
    menus.dropMenu.classList.toggle("rotate");
    menus.navigation.classList.toggle("expand");
    menus.navList.classList.toggle("appear");
}, false);

menus.userButton.addEventListener('click', (e)=>{
    menus.dropMenu.classList.remove("rotate");
    menus.navigation.classList.remove("expand");
    menus.navList.classList.remove("appear");
    menus.navigation.classList.toggle("sub-menu")
    menus.userMenu.classList.toggle("appear");
});


//account forms
accountforms.close.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        item.parentElement.parentElement.classList.remove("popup");
        accountforms.pageContent.forEach((element)=>{
            element.classList.remove("blur");
        });
    })
});

accountforms.openRegister.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        accountforms.loginForm.classList.remove("popup");
        accountforms.registerForm.classList.add("popup");

        accountforms.pageContent.forEach((element)=>{
            element.classList.add("blur");
        });
    })
});

accountforms.openLogin.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        accountforms.registerForm.classList.remove("popup");
        accountforms.loginForm.classList.add("popup");   
        
        accountforms.pageContent.forEach((element)=>{
            element.classList.add("blur");
        });
    })
});




//page events
window.addEventListener('beforeunload', ()=>{
    functions.saveSale(variables.sale);
});

window.addEventListener('load', ()=>{
    functions.fetchProducts();
    variables.sale.productsAdded = functions.getSale();
    functions.displayCartCount();
    console.log(variables.sale);
    
})


