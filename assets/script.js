// Example JavaScript for adding products to the cart
const addToCartButtons = document.querySelectorAll('button');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h2').innerText;
        const productPrice = button.parentElement.querySelector('p:nth-child(3)').innerText;

        // You can customize this part to suit your needs, like adding items to a shopping cart object
        alert(`Added to Cart: ${productName} - ${productPrice}`);
    });
});
