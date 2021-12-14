// ------------------------------------------------ main page stuff here

const screen = document.querySelector("section#screen1")
const navBar = document.querySelector('#nav-bar-items')
const topNav = document.querySelector("div.top-bar")
let CategoryName = ''





// ------------------------------------------------ top nav bar event listener
topNav.addEventListener('click', (evt) => {
    
    screen.className = "hide"
    mainBody.innerText = ''
    formContainer.innerText = ''

        if (evt.target.id == "navHome"){renderLogoPage(evt)}
        if (evt.target.id == "navSignUp"){showSignUpForm(evt)}
        if (evt.target.id == "navLogin"){showLoginForm(evt)}
        if (evt.target.id == "navLogout"){renderLogoutLogoPage(evt)}
        if (evt.target.id == "navProducts"){fetchAllProducts(evt)}
        if (evt.target.id == "navOrders"){fetchAllOrders(evt)}
        if (evt.target.id == "navCart"){renderCartPage(evt)}
})






screen.addEventListener('click', (event) => {
    screen.className = "hide";
    renderLogoPage(event)

})

//topNav.addEventListener('click', (evt) => {
//    mainBody.innerText = ''
//
//            CategoryName = evt.target.name
//            
//        if (evt.target.id == "Products"){fetchAllProducts()}
//        else {renderLogoPage()}
//        else {fetchProductsByCat(evt.target.id)}
//})

// user selects all -- array of hashes returned
let fetchAllProducts = () => {
    fetch("/products")
    .then(res => res.json())
    .then(products => {
        products.forEach(function (product) {
                showAllProductsByCat(product)   
        })
    })
}

// user selects specific category -- hash returned
let fetchProductsByCat = (id) => {
    fetch("/products")
    .then(res => res.json())
    .then(products => {
        products.forEach((product) => {
            showAllProductsByCat(product)
        }) 
     }) 
}


// default page 
let renderLogoPage = () => {
    formContainer.innerText = ''
    categoryNameh1.innerText = ''
    mainBody.className = 'logoPage-hero'
  
let rightImageHolder = document.createElement('img')
  rightImageHolder.className = 'logo-rightImage'
  rightImageHolder.src = "https://c.tenor.com/NJLpgBVNXHkAAAAM/bargain-deals.gif"

let leftImageHolder = document.createElement('img')
  leftImageHolder.className = 'logo-leftImage'
  leftImageHolder.src = "https://thumbs.gfycat.com/QuarrelsomeSelfishBlackfish-size_restricted.gif"

  mainBody.append(rightImageHolder, leftImageHolder)
}