
console.log("MENU\n1. Pizza - 200\n2. Burger - 300\n3. Chicken Biryani - 250\n4. Apple Juice - 100\n5. Brownie - 80");

let s = prompt("Enter a choice (1-5):");
let q = prompt("Enter your quantity:");
let quantity = parseInt(q); 
let price = 0;

switch (s) {
    case '1':
        price = 200 * quantity;
        break;
    case '2':
        price = 300 * quantity;
        break;
    case '3':
        price = 250 * quantity;
        break;
    case '4':
        price = 100 * quantity;
        break;
    case '5':
        price = 80 * quantity; 
        break;
    default:
        console.log("Invalid choice");
        return; 
}

let dis = 0; 
if (price > 500) {
    dis = price * 10 / 100; 
    price -= dis; 
}

console.log("The total price is: " + price);
if (dis > 0) {
    console.log("The discount is: " + dis);
}
