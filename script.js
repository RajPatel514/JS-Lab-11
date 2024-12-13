
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
    static applyDiscount(products, discount) {
        for (let i = 0; i < products.length; i++) {
            let product = products[i];
            product.price = product.price - (product.price * discount);
        }
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


//Part 3 Array of products + Output

let products = [myChicken, myPeppers, myBanana, myOrange];

