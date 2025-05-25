// Shopping Cart Array
let cart = [];

// Function to add a product to the cart
function addToCart(product) {
  cart.push(product);
  console.log(`${product.name} added to cart.`);
}

// Function to calculate subtotal of items in the cart
function calculateSubtotal(cart) {
  let total = 0;
  for (let item of cart) {
    total += item.price;
  }
  return total;
}

// Function to apply discount
function applyDiscount(total, discountPercent) {
  return total - (total * discountPercent / 100);
}

// Function to display the final bill
function displayBill(cart) {
  let subtotal = calculateSubtotal(cart);
  let finalTotal = applyDiscount(subtotal, 10); // 10% discount
  console.log("🛒 Items in Cart:");
  for (let item of cart) {
    console.log(`- ${item.name}: ₹${item.price}`);
  }
  console.log(`💰 Total after 10% discount: ₹${finalTotal}`);
}

// Adding products
addToCart({ name: "Shoes", price: 2000 });
addToCart({ name: "T-shirt", price: 500 });

// Display final bill
displayBill(cart);