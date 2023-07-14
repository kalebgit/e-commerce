/*
    ==========================================
        CLASSES
    ==========================================
*/
import * as variables from '../global/variables.js';

export class Product{
    constructor({id, model, description, brand,  price, stars, image}){
        this.id = id;
        this.model = model;
        this.description = description;
        this.brand = brand;
        this.price = price;
        this.stars = stars;
        this.image = image;
    }
}

export class Sale{
    constructor(array){
        this.productsAdded = array;
    }

    addProduct(productID){
        let alreadyAdded = this.productsAdded.find((product)=>product.id == productID);
        if(alreadyAdded && true){
            if(alreadyAdded.quantity < 15){
                console.log("se incrementa la cantidad");
                alreadyAdded.quantity++;
                console.log(this.productsAdded);
            }
        }else{
            console.log("se agrego un nuveo producto");
            this.productsAdded.push({id: productID, quantity: 1});
            
            console.log(this.productsAdded);
        }
    }

    removeQuantity(productID){
        let productToRemove = this.productsAdded.find((product)=>product.id == productID);
        if(productToRemove.quantity > 1){
            --productToRemove.quantity;
            console.log("se disminuye la cantidad");
            console.log(this.productsAdded);
        }
    }

    deleteProduct(productToRemoveID){
        for(let i = 0; i < this.productsAdded.length; i++){
            if(productToRemoveID == this.productsAdded[i].id){
                this.productsAdded.splice(i, 1);
                break;
            }
        }
    }

    getTotalPrice(){
        return this.productsAdded.reduce((sum, element)=> element && true ? 
            sum +=  variables.products.find((item)=>item.id == element.id).price * element.quantity : 
            sum += 0, 0);
    }
}