const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItemsList = document.querySelector('.cart-items');
const emptyMessage = document.querySelector('.empty-message');
const checkoutButton = document.querySelector('.btn');
const clearCartButton = document.querySelector('.clear-cart');

let cart = [];

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.closest('.product');
        const title = product.querySelector('h3').textContent;
        const price = product.querySelector('.price').textContent.split('/')[0];  // Get standard price
        const size = product.querySelector('select').value;

        const cartItem = { title, price, size };
        cart.push(cartItem);

        updateCartList();
        updateCheckoutButton();
    });
});

function updateCartList() {
    cartItemsList.innerHTML = '';  // Clear previous list items

    if (cart.length === 0) {
        emptyMessage.style.display = 'block';
        return;
    }

    emptyMessage.style.display = 'none';

    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.title} - ${item.size} - ${item.price}`;
        cartItemsList.appendChild(listItem);
    });
}

function updateCheckoutButton() {
    checkoutButton.disabled = cart.length === 0;
}
clearCartButton.addEventListener('click', () => {
    cart = [];
    updateCartList();
    updateCheckoutButton();
});
