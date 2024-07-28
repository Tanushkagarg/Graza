document.addEventListener('DOMContentLoaded', () => {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('mainImage');
    const oneTimePurchaseRadio = document.getElementById('one-time');
    const subscribeRadio = document.getElementById('subscribe');
    const addToCartButton = document.getElementById('addToCartButton');
    const subscribeButton = document.getElementById('subscribeButton');
    const quantityOptions = document.querySelectorAll('.quantity-option');
    const oneTimePriceSpan = document.getElementById('oneTimePrice');
    const subscriptionPriceSpan = document.getElementById('subscriptionPrice');
    const originalPriceSpan = document.getElementById('originalPrice');
    const cartCountSpan = document.getElementById('cartCount');
    const cart = document.querySelector('cart');
    let cartCount = 0;

    // Change main image on thumbnail click
    thumbnails.forEach((thumbnail) => {
        thumbnail.addEventListener('click', function () {
            const largeImageSrc = this.getAttribute('data-large');
            mainImage.src = largeImageSrc;

            // Highlight the selected thumbnail
            thumbnails.forEach((thumb) => thumb.classList.remove('selected'));
            this.classList.add('selected');
        });
    });

    // Toggle between Add to Cart and Subscribe buttons
    function togglePurchaseButtons() {
        if (oneTimePurchaseRadio.checked) {
            addToCartButton.style.display = 'block';
            subscribeButton.style.display = 'none';
        } else if (subscribeRadio.checked) {
            addToCartButton.style.display = 'none';
            subscribeButton.style.display = 'block';
        }
    }

    // Initial state
    togglePurchaseButtons();

    // Event listener for purchase options
    document.querySelectorAll('input[name="purchase"]').forEach((radio) => {
        radio.addEventListener('change', togglePurchaseButtons);
    });

    // Update price based on quantity selection
    quantityOptions.forEach((option) => {
        option.addEventListener('click', function () {
            // Remove active class from all options
            quantityOptions.forEach((opt) => opt.classList.remove('active'));

            // Add active class to the selected option
            this.classList.add('active');

            // Update prices
            const oneTimePrice = this.getAttribute('data-price');
            const subscriptionPrice = this.getAttribute('data-subscription-price');
            const originalPrice = this.getAttribute('data-price');

            oneTimePriceSpan.textContent = `$${oneTimePrice}`;
            subscriptionPriceSpan.textContent = `$${subscriptionPrice}`;
            originalPriceSpan.textContent = `$${originalPrice}`;
        });
    });

    // Add to Cart functionality
    addToCartButton.addEventListener('click', function () {
        if (oneTimePurchaseRadio.checked) {
            cartCount += 1; // Increment cart count
            cartCountSpan.textContent = cartCount; // Update cart count display
            alert('Item added to cart!');
        }
    });

    // Subscribe functionality
    subscribeButton.addEventListener('click', function () {
        if (subscribeRadio.checked) {
            alert('Subscribed successfully!');
        }
    });
});