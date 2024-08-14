// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var address = document.getElementById("address").value;
//     var country = document.getElementById("country").value;
//     var zipCode = document.getElementById("zipCode").value;
//     var cardName = document.getElementById("cardName").value;
//     var cardNumber = document.getElementById("cardNumber").value;
//     var expMonth = document.getElementById("expMonth").value;
//     var expYear = document.getElementById("expYear").value;
//     var cvv = document.getElementById("cvv").value;
// }


/**
 * Retrieves the total price from the URL parameter.
 * Parses the URL parameters and returns the value associated with the 'total' parameter.
 * @returns {string|null} The total price extracted from the URL parameter, or null if not found.
 */
function getTotalPriceFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('total');
}

/**
 * Displays the total price on the form.
 * Calls getTotalPriceFromURL to retrieve the total price from the URL parameter.
 * Updates the price input field with the total price, or sets it to 0 if not found.
 */
function displayTotalPrice() {
    const totalPrice = getTotalPriceFromURL();
    const priceInput = document.getElementById('price');

    if (totalPrice) {
        priceInput.value = totalPrice;
    } else {
        priceInput.value = 0;
    }
    priceInput.disabled = true;
}

// Calls displayTotalPrice when the window loads to display the total price on the form.
window.onload = displayTotalPrice;