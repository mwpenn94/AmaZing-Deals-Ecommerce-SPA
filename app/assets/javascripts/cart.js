class Cart {
    constructor(id, subTotal, lineitems, products) {
      this.id = id;
      this.subTotal = subTotal;
      this.lineitems = lineitems;
      this.products = products;
    }
}

  let currentCart = new Cart;
  let currentTotal = [];
  
  let checkIfCartExists = (user) => {
  
      let userLoggingIn = user
  
      fetch(`http://localhost:3000/carts/${currentUser.id}`, {
          method: "GET",
          headers: {
              "content-type": "application/json"
          },
      })
          .then(res => res.json())
          .then(cart => {
              if(cart.id){
                  console.log(cart, "cart already exists!")
                  currentCart = cart;
              } else {
                  createCartForUser(userLoggingIn)
              }
          })
  }
  
  
  let createCartForUser = (user) => {
  
      let userLoggingIn = user
  
      fetch(`http://localhost:3000/carts/${currentUser.id}`,  {
          method: "GET",
          headers: { 
              "content-type": "application/json" 
          },
      })
          .then(res => res.json())
          .then((cart) => {
              console.log(cart, "cart created!")
              currentCart = cart;
              //redirect user to homepage
          })
  
  }
  
  
  // ------------------------------------ DOM elements
  mainBody.innerText = ''
  mainBody.className = 'none'
  
  let cartTitle = document.createElement('h1')
      cartTitle.className = 'cart-title'
      cartTitle.innerText = 'Cart'
  
  let horizonLine = document.createElement('div')
      horizonLine.id = 'horizontal-line'
  
  let cardDeck = document.createElement('div')
      cardDeck.className = 'card-deck-2'
  
  let productList = document.createElement('div')
      productList.className = 'product-list'
  
  let singularProduct = document.createElement('div')
      singularProduct.className = 'singular-product'
  
  let totalInfo = document.createElement('div')
      totalInfo.className = 'total-info'
  
  let subtotal = document.createElement('p')
      subtotal.id = 'subtotal'
      // subtotal.innerText = `Merchandise Subtotal $${currentTotal}.00`
  
  
  let estimatedTotal = document.createElement('p')
      estimatedTotal.id = 'estimated-total'
      // estimatedTotal.innerText = `Estimated Total $${currentTotal}.00`
  
  let checkOut = document.createElement('button')
      checkOut.className =  'btn btn-danger btn-lg'
      checkOut.id = 'check-out'
      checkOut.innerText = 'CHECK OUT'
  
  productList.append(cartTitle)
  totalInfo.append(subtotal, estimatedTotal, checkOut)
  
  
      checkOut.addEventListener('click', (evt)=>{
          showOrderForm()
      })
  
  
  let renderCartPage = () => {

      categoryNameh1.innerText = ''
      mainBody.className = ''
  
  
      while (singularProduct.hasChildNodes()) {
          singularProduct.removeChild(singularProduct.lastChild);
      }
  
      if (!currentUser){
          alert("Please Log in First.")
          showLoginForm()
          currentTotal = [0];
      }
      else{
      fetch(`http://localhost:3000/carts/${currentUser.id}`)
          .then(res => res.json())
          .then(cart => {
              currentTotal = [0];
              currentCart = cart;
              
              console.log(currentCart)
              console.log(currentCart.lineitems.product)
              console.log(JSON.stringify(currentCart.lineitems))
              
              currentCart.lineitems.forEach((itemInCart)=>{
                  displayItemsInCart(itemInCart)
  
              let totalPriceOfItem = (itemInCart.quantity * itemInCart.product.price)
              currentTotal.push(totalPriceOfItem)
  
              let sum = currentTotal.reduce((a, b) => {
                  return a + b;
                });
              subtotal.innerText = `Merchandise Subtotal $${sum}`
              estimatedTotal.innerText = `Estimated Total $${sum}`
              })
          })   
      }   
  }
  
  
  
  //----------------------------- display current items in cart
  
  let displayItemsInCart = (item) => {
      let cardGroup = document.createElement('div')
          cardGroup.className = 'card-group'
          cardGroup.id = 'product-info'
  
      let cardImg = document.createElement('div')
          cardImg.className = 'card'
  
      let imgTag = document.createElement('img')
          imgTag.src = item.product.image
          imgTag.alt = item.product.name
  
      let cardProdNameQuantity = document.createElement('div')
          cardProdNameQuantity.className = 'card'
      
      let productName = document.createElement('p')
          productName.id = 'product-name'
          productName.innerText = item.product.name
  
  
      let productQuantity = document.createElement('p')
          productQuantity.id = 'product-quantity'
          productQuantity.innerText = `Qty: ${item.quantity}`
  
      let cardProductPriceRemove = document.createElement('div')
          cardProductPriceRemove.className = 'card'
  
      let productPrice = document.createElement('p')
          productPrice.id = 'product-price'
          productPrice.innerText = `Unit Price: $${item.product.price}`
  
      let buttonRemove = document.createElement('button')
          buttonRemove.id = 'product-remove'
          buttonRemove.className = 'btn btn-secondary'
          buttonRemove.innerText = 'Remove'
      
  
  
      cardProductPriceRemove.append(productPrice, buttonRemove)
      cardProdNameQuantity.append(productName, productQuantity)
      cardImg.append(imgTag)
      cardGroup.append(cardImg, cardProdNameQuantity, cardProductPriceRemove)
      singularProduct.append(cardGroup)
      productList.append(singularProduct)
      cardDeck.append(productList, totalInfo)
      mainBody.append(cardDeck)
  
      
      
      buttonRemove.addEventListener('click', (event)=>{
  
          fetch(`http://localhost:3000/lineitems/${item.id}`, {
              method: "DELETE",
              headers: {
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  id: item.id
              })
          })
          .then(resp => {renderCartPage()});
          currentTotal = 0
      })
  }