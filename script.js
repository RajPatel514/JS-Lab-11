
//Part 1 - Setting up classes
class ProductProperties {
    constructor(name, price, quantity) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }

    getTotalValue() {
        return this.price * this.quantity;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}`
    }

    //Part 3 - Static Methods & Properties
    //Static method to loop through index and apple discount rate to each index item
    static applyDiscount(products, discount) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            product.price = product.price - (product.price * discount);
        }
        return products;
    }

}

//Part 2 - Adding inheritance
class PerishableProductProperties extends ProductProperties {
    constructor(name, price, quantity, expirationDate) {
        super(name, price, quantity);
        this.expirationDate = expirationDate;
    }

    toString() {
        return `Product: ${this.name}, Price: ${this.price}, Quantity: ${this.quantity}, Expiration Date: ${this.expirationDate}`;
    }

}

let myChicken = new PerishableProductProperties("Chicken", 10, 5, "Jan-14");
let myPeppers = new PerishableProductProperties("Hot Pepper", 5, 15, "Jan-30");
let myBanana = new PerishableProductProperties("Banana", 7, 20, "Jan-15");
let myOrange = new PerishableProductProperties("Orange", 3, 7, "Jan-3");
let myBattery = new ProductProperties("Battery", 8, 12);
let myOil = new ProductProperties("Oil", 11, 2);


//Part 3 Array of products + Output
let products = [myChicken, myPeppers, myBanana, myOrange, myBattery, myOil];
console.log(PerishableProductProperties.applyDiscount(products, 0.15));


//Part 4 - Store Management
class Store {
    constructor(inventory) {
        this.inventory = inventory;
    }

    addProduct(product) {
        this.inventory.push(product);
        console.log("Product was added to inventory");
    }

    getInventoryValue() {
        //method to loop through the array and add up all the price values
        let totalValue = 0;
        for (let i = 0; i < this.inventory.length; i++) {
            totalValue = this.inventory[i].price * this.inventory[i].quantity;
        }
        return totalValue
    }

    findProductByName(name) {
        //Method to loop through array and look for matching names, else null
        for (let i = 0; i < this.inventory.length; i++) {
            if (this.inventory[i].name === name) {
                return this.inventory[i];
            } else {
                return null;
            }
        }
    }

}

//Part 5 - Testing the System
//let myStore = new Store(products);

let myStore = new Store;
myStore.addProduct(myChicken);
myStore.addProduct(myBanana);
myStore.addProduct(myBattery);
myStore.addProduct(myOil);
myStore.addProduct(myPeppers);