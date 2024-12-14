let shoppingCart = [];

function addItem(name,price, quantity){

    const existingItem = shoppingCart.find(item => item.name === name);

    if (existingItem ){
        existingItem.quantity += quantity;
    } else {
        shoppingCart.push({name, price, quantity });

    } 
    console.log('${quantity} of ${name} added to the Cart.' )

}

function removeItem(name){
    shoppingCart = shoppingCart.filter(item => item.name !== name);
    console.log('${name} removed from the cart.');
}

function calculateTotal(){
    let total = 0;
    shoppingCart.forEach(item => {
        total += item.price*item.quantity;
    });
    return total;
}

addItem("bag", 200.00, 2);
addItem("pen", 5.00, 5);
addItem("books", 50.00, 3);
addItem("pencil", 10.00, 2);

console.log("Current Cart:", shoppingCart);
console.log("Total Price: $" + calculateTotal().toFixed(2));

removeItem("books");
console.log("Current Cart after removing ", shoppingCart);
console.log("total price after removing books: $" +calculateTotal().toFixed(2));
