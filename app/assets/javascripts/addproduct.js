let ProductSelectedToAddToCart = (event) => {

    if (valueSelectedFromQuantity == null){
        valueSelectedFromQuantity = 1
    }

    fetch(`http://localhost:3000/lineitems`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            cart_id: currentCart.id,
            product_id: currentProduct.id,
            quantity: valueSelectedFromQuantity
        })
    })

    .then(res => res.json())
    .then((addedProduct) => {
    })
}