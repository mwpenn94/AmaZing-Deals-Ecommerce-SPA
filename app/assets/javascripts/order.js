class Order {
    constructor(id, card_number, card_expiration_date, card_verification, bill_firstname, bill_lastname, bill_address1, bill_address2, bill_city, bill_state, bill_zipcode, ship_firstname, ship_lastname, ship_address1, ship_address2, ship_city, ship_state, ship_zipcode, phone, total, customer, lineitems, products) {
      this.id = id;
      this.card_number = card_number;
      this.card_expiration_date = card_expiration_date;
      this.card_verification = card_verification;
      this.bill_firstname = bill_firstname;
      this.bill_lastname = bill_lastname;
      this.bill_address1 = bill_address1;
      this.bill_address2 = bill_address2;
      this.bill_city = bill_city;
      this.bill_state = bill_state;
      this.bill_zipcode = bill_zipcode;
      this.ship_firstname = ship_firstname;
      this.ship_lastname = ship_lastname;
      this.ship_address1 = ship_address1;
      this.ship_address2 = ship_address2;
      this.ship_city = ship_city;
      this.ship_state = ship_state;
      this.ship_zipcode = ship_zipcode;
      this.phone = phone;
      this.total = total;
      this.customer = customer;
      this.lineitems = lineitems;
      this.products = products;
    }
}

// user selects all -- array of hashes returned
let fetchAllOrders = () => {

    if (!currentUser){
        alert("Please Log in First.")
        showLoginForm()
        currentTotal = [0];
    }
  fetch(`/users/${currentUser.id}/orders`)
      .then(res => res.json())
      .then(orders => {
        orders.forEach((order)=>{
              showAllOrders(order)   
      })
  })
}

let showOrderForm = () => {
  categoryNameh1.innerText = ''

  let OrderForm = document.createElement('form'); // Create New Element Form
  formContainer.appendChild(OrderForm);
  
  let heading = document.createElement('h1'); // Heading of Form
      heading.id = 'headerOrder'
      heading.innerText = "Order Information";
      OrderForm.appendChild(heading);
  
  let linebreak = document.createElement('br'); // space
      OrderForm.appendChild(linebreak);

  let shipFirstNameLabel = document.createElement("label")
      shipFirstNameLabel.innerText = "First Name: "
      OrderForm.appendChild(shipFirstNameLabel);

  let shipFirstNameInput = document.createElement("input")
      shipFirstNameInput.type = "text"
      shipFirstNameInput.id = "shipFirstName"
      shipFirstNameInput.placeholder = " Enter First Name"
      shipFirstNameInput.autocomplete = "off"
      OrderForm.appendChild(shipFirstNameInput);

  let linebreak1 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak1);

  let shipLastNameLabel = document.createElement("label")
      shipLastNameLabel.innerText = "Last Name: "
      OrderForm.appendChild(shipLastNameLabel);

  let shipLastNameInput = document.createElement("input")
      shipLastNameInput.type = "text"
      shipLastNameInput.id = "shipLastName"
      shipLastNameInput.placeholder = " Enter Last Name"
      shipLastNameInput.autocomplete = "off"
      OrderForm.appendChild(shipLastNameInput);        
  
  let linebreak2 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak2);    

  let shipAddress1Label = document.createElement("label")
      shipAddress1Label.innerText = "Address 1: "
      OrderForm.appendChild(shipAddress1Label);

  let shipAddress1Input = document.createElement("input")
      shipAddress1Input.type = "text"
      shipAddress1Input.id = "shipAddress1"
      shipAddress1Input.placeholder = " Enter Address 1"
      shipAddress1Input.autocomplete = "off"
      OrderForm.appendChild(shipAddress1Input);

  let linebreak3 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak3);

  let shipAddress2Label = document.createElement("label")
      shipAddress2Label.innerText = "Address 2: "
      OrderForm.appendChild(shipAddress2Label);

  let shipAddress2Input = document.createElement("input")
      shipAddress2Input.type = "text"
      shipAddress2Input.id = "shipAddress2"
      shipAddress2Input.placeholder = " Enter Address 2"
      shipAddress2Input.autocomplete = "off"
      OrderForm.appendChild(shipAddress2Input);        
  
  let linebreak4 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak4);    

  let shipCityLabel = document.createElement("label")
      shipCityLabel.innerText = "City: "
      OrderForm.appendChild(shipCityLabel);

  let shipCityInput = document.createElement("input")
      shipCityInput.type = "text"
      shipCityInput.id = "shipCity"
      shipCityInput.placeholder = " Enter City"
      shipCityInput.autocomplete = "off"
      OrderForm.appendChild(shipCityInput);

  let linebreak5 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak5);

  let shipStateLabel = document.createElement("label")
      shipStateLabel.innerText = "State: "
      OrderForm.appendChild(shipStateLabel);

  let shipStateInput = document.createElement("input")
      shipStateInput.type = "text"
      shipStateInput.id = "shipState"
      shipStateInput.placeholder = " Enter State"
      shipStateInput.autocomplete = "off"
      OrderForm.appendChild(shipStateInput);        
  
  let linebreak6 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak6);    
  
  let shipZipLabel = document.createElement("label")
      shipZipLabel.innerText = "Zip Code: "
      OrderForm.appendChild(shipZipLabel);

  let shipZipInput = document.createElement("input")
      shipZipInput.type = "text"
      shipZipInput.id = "shipZip"
      shipZipInput.placeholder = " Enter Zip Code"
      shipZipInput.autocomplete = "off"
      OrderForm.appendChild(shipZipInput);
 
  let linebreak7 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak7);

  let phoneLabel = document.createElement("label")
      phoneLabel.innerText = "Phone Number: "
      OrderForm.appendChild(phoneLabel);

  let phoneInput = document.createElement("input")
      phoneInput.type = "text"
      phoneInput.id = "phone"
      phoneInput.placeholder = " Enter Phone Number"
      phoneInput.autocomplete = "off"
      OrderForm.appendChild(phoneInput);
 
  let linebreak8 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak8);

  let cardNumberLabel = document.createElement("label")
      cardNumberLabel.innerText = "Card Number: "
      OrderForm.appendChild(cardNumberLabel);

  let cardNumberInput = document.createElement("input")
      cardNumberInput.type = "text"
      cardNumberInput.id = "cardNumber"
      cardNumberInput.placeholder = " Enter Card Number"
      cardNumberInput.autocomplete = "off"
      OrderForm.appendChild(cardNumberInput);

  let linebreak9 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak9);

  let cardExpirationDateLabel = document.createElement("label")
      cardExpirationDateLabel.innerText = "Card Expiration Date: "
      OrderForm.appendChild(cardExpirationDateLabel);

  let cardExpirationDateInput = document.createElement("input")
      cardExpirationDateInput.type = "text"
      cardExpirationDateInput.id = "cardExpirationDate"
      cardExpirationDateInput.placeholder = " Enter Card Expiration Date"
      cardExpirationDateInput.autocomplete = "off"
      OrderForm.appendChild(cardExpirationDateInput);        
  
  let linebreak10 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak10);    

  let cardVerificationLabel = document.createElement("label")
      cardVerificationLabel.innerText = "CCV: "
      OrderForm.appendChild(cardVerificationLabel);

  let cardVerificationInput = document.createElement("input")
      cardVerificationInput.type = "text"
      cardVerificationInput.id = "cardVerification"
      cardVerificationInput.placeholder = " Enter CCV"
      cardVerificationInput.autocomplete = "off"
      OrderForm.appendChild(cardVerificationInput);

  let linebreak11 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak11);

  let billFirstNameLabel = document.createElement("label")
      billFirstNameLabel.innerText = "First Name: "
      OrderForm.appendChild(billFirstNameLabel);

  let billFirstNameInput = document.createElement("input")
      billFirstNameInput.type = "text"
      billFirstNameInput.id = "billFirstName"
      billFirstNameInput.placeholder = " Enter First Name"
      billFirstNameInput.autocomplete = "off"
      OrderForm.appendChild(billFirstNameInput);

  let linebreak12 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak12);

  let billLastNameLabel = document.createElement("label")
      billLastNameLabel.innerText = "Last Name: "
      OrderForm.appendChild(billLastNameLabel);

  let billLastNameInput = document.createElement("input")
      billLastNameInput.type = "text"
      billLastNameInput.id = "billLastName"
      billLastNameInput.placeholder = " Enter Last Name"
      billLastNameInput.autocomplete = "off"
      OrderForm.appendChild(billLastNameInput);        
  
  let linebreak13 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak13);    

  let billAddress1Label = document.createElement("label")
      billAddress1Label.innerText = "Address 1: "
      OrderForm.appendChild(billAddress1Label);

  let billAddress1Input = document.createElement("input")
      billAddress1Input.type = "text"
      billAddress1Input.id = "billAddress1"
      billAddress1Input.placeholder = " Enter Address 1"
      billAddress1Input.autocomplete = "off"
      OrderForm.appendChild(billAddress1Input);

  let linebreak14 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak14);

  let billAddress2Label = document.createElement("label")
      billAddress2Label.innerText = "Address 2: "
      OrderForm.appendChild(billAddress2Label);

  let billAddress2Input = document.createElement("input")
      billAddress2Input.type = "text"
      billAddress2Input.id = "billAddress2"
      billAddress2Input.placeholder = " Enter Address 2"
      billAddress2Input.autocomplete = "off"
      OrderForm.appendChild(billAddress2Input);        
  
  let linebreak15 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak15);    

  let billCityLabel = document.createElement("label")
      billCityLabel.innerText = "City: "
      OrderForm.appendChild(billCityLabel);

  let billCityInput = document.createElement("input")
      billCityInput.type = "text"
      billCityInput.id = "billCity"
      billCityInput.placeholder = " Enter City"
      billCityInput.autocomplete = "off"
      OrderForm.appendChild(billCityInput);

  let linebreak16 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak16);

  let billStateLabel = document.createElement("label")
      billStateLabel.innerText = "State: "
      OrderForm.appendChild(billStateLabel);

  let billStateInput = document.createElement("input")
      billStateInput.type = "text"
      billStateInput.id = "billState"
      billStateInput.placeholder = " Enter State"
      billStateInput.autocomplete = "off"
      OrderForm.appendChild(billStateInput);        
  
  let linebreak17 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak17);    
  
  let billZipLabel = document.createElement("label")
      billZipLabel.innerText = "Zip Code: "
      OrderForm.appendChild(billZipLabel);

  let billZipInput = document.createElement("input")
      billZipInput.type = "text"
      billZipInput.id = "billZip"
      billZipInput.placeholder = " Enter Zip Code"
      billZipInput.autocomplete = "off"
      OrderForm.appendChild(billZipInput);
 
  let linebreak18 = document.createElement('br'); // space
      OrderForm.appendChild(linebreak18);

  let submitButton = document.createElement('button')
      submitButton.type = "submit"
      submitButton.className = "btn btn-primary btn-lg"
      submitButton.id = 'Order-button'
      submitButton.innerText = "Check Out"
      OrderForm.append(submitButton)

  mainBody.append(formContainer)
  OrderForm.addEventListener("submit", handleOrderForm)

}   


let handleOrderForm = (evt) => {
  evt.preventDefault()
  let shipFirstNameCheckingOut = evt.target["shipFirstName"].value
  let shipLastNameCheckingOut = evt.target["shipLastName"].value
  let shipAddress1CheckingOut = evt.target["shipAddress1"].value
  let shipAddress2CheckingOut = evt.target["shipAddress2"].value
  let shipCityCheckingOut = evt.target["shipCity"].value
  let shipStateCheckingOut = evt.target["shipState"].value
  let shipZipcodeCheckingOut = evt.target["shipZip"].value
  let phoneCheckingOut = evt.target["phone"].value
  let cardNumberCheckingOut = evt.target["cardNumber"].value
  let cardExpirationDateCheckingOut = evt.target["cardExpirationDate"].value
  let cardVerificationCheckingOut = evt.target["cardVerification"].value
  let billFirstNameCheckingOut = evt.target["billFirstName"].value
  let billLastNameCheckingOut = evt.target["billLastName"].value
  let billAddress1CheckingOut = evt.target["billAddress1"].value
  let billAddress2CheckingOut = evt.target["billAddress2"].value
  let billCityCheckingOut = evt.target["billCity"].value
  let billStateCheckingOut = evt.target["billState"].value
  let billZipCheckingOut = evt.target["billZip"].value

  fetch(`http://localhost:3000/orders`, {
      method: "POST",
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          card_number: cardNumberCheckingOut,
          card_expiration_date: cardExpirationDateCheckingOut,
          card_verification: cardVerificationCheckingOut,
          bill_firstname: billFirstNameCheckingOut,
          bill_lastname: billLastNameCheckingOut,
          bill_address1: billAddress1CheckingOut,
          bill_address2: billAddress2CheckingOut,
          bill_city: billCityCheckingOut,
          bill_state: billStateCheckingOut,
          bill_zipcode: billZipCheckingOut,
          ship_firstname: shipFirstNameCheckingOut,
          ship_lastname: shipLastNameCheckingOut,
          ship_address1: shipAddress1CheckingOut,
          ship_address2: shipAddress2CheckingOut,
          ship_city: shipCityCheckingOut,
          ship_state: shipStateCheckingOut,
          ship_zipcode: shipZipcodeCheckingOut,
          phone: phoneCheckingOut,
          total: estimatedTotal,
          customer_id: currentUser.id,
      })
  })

  .then(res => res.json())
  .then((orderInfo) => {
    console.log(orderInfo)
    alert("Thank you for shopping! Come back soon.")
    
    screen.className = "hide"
    mainBody.innerText = ''
    formContainer.innerText = ''
    renderLogoPage()
  })
}

// ----------------------  display all orders
let showAllOrders = (order) => {

 
    mainBody.className = 'row row-cols-1 row-cols-md-2 row-cols-lg-3'
  
    categoryNameh1.innerText = CategoryName
  
    let orderDiv = document.createElement('div')
        orderDiv.className = "col mb-4"
        mainBody.append(orderDiv)
  
    let cardHolder = document.createElement("div")
        cardHolder.className = 'card'
  
    let orderProName = document.createElement("h5")
        orderProName.className = 'card-title'
        orderProName.innerText = order.products[0].name
  
  
    let orderProImage = document.createElement('img')
        orderProImage.className = 'card-img-top'
        orderProImage.alt = order.products[0].name 
        orderProImage.src = order.products[0].image
  
  
    let orderDateTime = document.createElement('p')
        orderDateTime.className = 'card-text'
        orderDateTime.innerText = `Ordered: ${order.created_at || order.updated_at}`
  
    let orderRecipient = document.createElement('p')
        orderRecipient.className = 'card-text'
        orderRecipient.innerText = `${order.ship_firstname} ${order.ship_lastname}`
  
    let orderAddress = document.createElement('p')
        orderAddress.className = 'card-text'
        orderAddress.innerText = `${order.ship_address1}, ${order.ship_address2}`
  
    let orderCityStateZip = document.createElement('p')
        orderCityStateZip.className = 'card-text'
        orderCityStateZip.innerText = `${order.ship_city}, ${order.ship_state} ${order.ship_zipcode}`
  
    let orderPhone = document.createElement('p')
        orderPhone.className = 'card-text'
        orderPhone.innerText = `${order.phone}`
  
  
    orderDiv.append(cardHolder, orderProImage, orderProName, orderDateTime, orderRecipient, orderAddress, orderCityStateZip, orderPhone)
  
    // // EVENTLISTENER // //
    orderDiv.addEventListener('click', (evt) => {
        orderCurrentlyInDisplay = order
    showTheOrderPage(order)
    })
  
  
  }
  
  
  // ------------DISPLAY ONE SINGLE ORDER --------------------
  
  let showTheOrderPage = (order) => {
    currentOrder = order
    console.log(currentOrder)
  
    mainBody.className = 'none'
    mainBody.innerText = ''
    
    // ------Outthere div card-deck ---------------
    let orderDiv = document.createElement('div')
        orderDiv.className = "card-deck"
        mainBody.append(orderDiv)
    
    // ------card div to hold just the image ---------
    let cardHolder = document.createElement("div")
        cardHolder.className = 'card'
        cardHolder.id = 'image-holder'
  
    let orderProImage = document.createElement('img')
//        orderProImage.alt =  order.products[0].name 
//        orderProImage.src =  order.products[0].image 
        orderProImage.id = 'image_in_glass'
  
  
    // ---card div to hold all the info regarding the product----
    let orderContHolder = document.createElement('div')
        orderContHolder.className = 'orderContainer'
  
    let cardOfProductInfo = document.createElement('div')
        cardOfProductInfo.className = 'card'  
  
    let orderProduct = document.createElement('div')
        orderProduct.className = 'card-body'
  
    let orderDetailsHeader = document.createElement('h5')
        orderDetailsHeader.className = 'card-title'
        orderDetailsHeader.innerText = 'Order Details'
  
    let orderDateTime = document.createElement('p')
        orderDateTime.className = 'card-text'
        orderDateTime.innerText = `Ordered: ${order.created_at || order.updated_at}`
  
    let orderNumber = document.createElement('p')
        orderNumber.className = 'card-text'
        orderNumber.innerText = order.id
  
    let orderCustomer = document.createElement('p')
        orderCustomer.className = 'card-text'
        orderCustomer.innerText = `Ordered By: ${order.customer_id}`
  
    let orderShipDetails = document.createElement('p')
        orderShipDetails.className = 'card-text'
        orderShipDetails.innerText = `Delivery Estimate: TBD`
  
    let orderPayInfoHeader = document.createElement('h5')
        orderPayInfoHeader.className = 'card-text'
        orderPayInfoHeader.innerText = 'Payment Information'
  
    let orderPayMethod = document.createElement('p')
        orderPayMethod.className = 'card-text'
        orderPayMethod.innerText = `Payment Method: card ending in ${order.card_number.slice(-4)}`      
  
    let orderPayee = document.createElement('p')
        orderPayee.className = 'card-text'
        orderPayee.innerText = `${order.bill_firstname} ${order.bill_lastname}`
  
    let orderBillAddress = document.createElement('p')
        orderBillAddress.className = 'card-text'
        orderBillAddress.innerText = `${order.bill_address1}, ${order.bill_address2}`
  
    let orderBillCityStateZip = document.createElement('p')
        orderBillCityStateZip.className = 'card-text'
        orderBillCityStateZip.innerText = `${order.ship_city}, ${order.ship_state} ${order.ship_zipcode}`
  
    let orderRecipient = document.createElement('p')
        orderRecipient.className = 'card-text'
        orderRecipient.innerText = `${order.ship_firstname} ${order.ship_lastname}`
  
    let orderAddress = document.createElement('p')
        orderAddress.className = 'card-text'
        orderAddress.innerText = `${order.ship_address1}, ${order.ship_address2}`
  
    let orderCityStateZip = document.createElement('p')
        orderCityStateZip.className = 'card-text'
        orderCityStateZip.innerText = `${order.ship_city}, ${order.ship_state} ${order.ship_zipcode}`
  
    let orderPhone = document.createElement('p')
        orderPhone.className = 'card-text'
        orderPhone.innerText = `${order.phone}`

    let quantity = document.createElement('p')
        quantity.className = 'card-title'
        quantity.innerText = 'Quantity: '
  
    let buttonHolder = document.createElement('div')
        buttonHolder.className = 'mx-auto'
  
    let description = document.createElement('h5')
//        description.className = 'card-title'
//        description.innerText = 'Product Description:'
  
    let contentDescription = document.createElement('p')
        contentDescription.className = 'card-text'
  
    let productDescription = document.createElement('small')
        productDescription.className = 'text-muted'
//        productDescription.innerText = product.description      

    let buttonRemove = document.createElement('button')
        buttonRemove.id = 'product-remove'
        buttonRemove.className = 'btn btn-secondary'
        buttonRemove.innerText = 'Cancel Order'


      //----------------------------- display current items in cart

    let i = order.lineitems.length
    while (i) {
        console.log(i);

        let cardGroup = document.createElement('div')
            cardGroup.className = 'card-group'
            cardGroup.id = 'product-info'

        let cardImg = document.createElement('div')
            cardImg.className = 
            'card'

        let imgTag = document.createElement('img')
            imgTag.src = order.products[i-1].image
            imgTag.alt = order.products[i-1].name

        let cardProdNameQuantity = document.createElement('div')
            cardProdNameQuantity.className = 'card'
    
        let productName = document.createElement('p')
            productName.id = 'product-name'
            productName.innerText = order.products[i-1].name

        let productQuantity = document.createElement('p')
            productQuantity.id = 'product-quantity'
            productQuantity.innerText = `Qty: ${order.lineitems[i-1].quantity}`

        let cardProductPriceRemove = document.createElement('div')
            cardProductPriceRemove.className = 'card'

        let productPrice = document.createElement('p')
            productPrice.id = 'product-price'
            productPrice.innerText = `Unit Price: $${order.products[i-1].price}`

        cardProductPriceRemove.append(productPrice, buttonRemove)
        cardProdNameQuantity.append(productName, productQuantity)
        cardImg.append(imgTag)
        cardGroup.append(cardImg, cardProdNameQuantity, cardProductPriceRemove)
        singularProduct.append(cardGroup)
        productList.append(singularProduct)

        i--;
    }

        buttonHolder.append(buttonRemove)
        cardHolder.append(orderProImage)
        contentDescription.append(productDescription)
        cardOfProductInfo.append(orderProduct)
        orderContHolder.append(cardOfProductInfo)
        orderProduct.append(buttonHolder, orderDetailsHeader, orderDateTime, orderCustomer, orderShipDetails, orderPayInfoHeader, orderPayMethod, orderPayee, orderBillAddress, orderBillCityStateZip, orderRecipient, orderAddress, orderCityStateZip, orderPhone, buttonHolder, description, contentDescription, productList)
        orderDiv.append( cardHolder, orderContHolder)


        buttonRemove.addEventListener('click', (event)=>{
  
            fetch(`http://localhost:3000/orders/${order.id}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: order.id
                })
            })
            .then(resp => {fetchAllOrders()})
            alert("Your order has been succesffuly canceled.")
            location.reload(false)
        })
    }  
