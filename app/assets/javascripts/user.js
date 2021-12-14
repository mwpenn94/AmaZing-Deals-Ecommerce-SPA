class User {
    constructor(id, name, email, seller, support, orders, products, questions, answers, reviews) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.seller = seller;
      this.support = support;
      this.orders = orders;
      this.products = products
      this.questions = questions
      this.answers = answers
      this.reviews = reviews
    }
}

let currentUser;
const formContainer = document.querySelector("div#sign-up-form")

// ------------------------------------------------ create user

let showSignUpForm = () => {
  categoryNameh1.innerText = ''
  mainBody.innerText = ''
  mainBody.className = ''


  let signUpForm = document.createElement('form'); // Create New Element Form
      signUpForm.className ='sign-up-form'
  formContainer.appendChild(signUpForm);

  let heading = document.createElement('h1'); // Heading of Form
  heading.innerHTML = "Sign Up to See Todays AmaZing Deals!";
  signUpForm.appendChild(heading);
  
  let line = document.createElement('hr'); // linebreak
  signUpForm.appendChild(line);
  
  let linebreak = document.createElement('br'); // space
  signUpForm.appendChild(linebreak);
  
  let emailLabel = document.createElement('label'); // Email label
  emailLabel.innerHTML = "Email: ";
  signUpForm.appendChild(emailLabel);
  
  let emailInput = document.createElement('input'); // Email input
  emailInput.id = "email"
  signUpForm.appendChild(emailInput);
  
  let linebreak1 = document.createElement('br'); // space
  signUpForm.appendChild(linebreak1);
  
  let usernameLabel = document.createElement('label'); // Username label
  usernameLabel.innerHTML = "Username: "; // 
  signUpForm.appendChild(usernameLabel);
  
  let userNameInput = document.createElement('input'); // Username input
  userNameInput.id = "username"
  signUpForm.appendChild(userNameInput);

  let linebreak2 = document.createElement('br'); // space
  signUpForm.appendChild(linebreak2);
  
  let PasswordLabel = document.createElement('label'); // Password label
  PasswordLabel.innerHTML = "Password: ";
  signUpForm.appendChild(PasswordLabel);
  
  let passwordInput = document.createElement('input'); // Password input
  passwordInput.id = "password"
  signUpForm.appendChild(passwordInput);
  
  let linebreak3 = document.createElement('br'); // space
  signUpForm.appendChild(linebreak3);

  let supportLabel = document.createElement('label'); // Support label
  supportLabel.innerHTML = "Support: "
  signUpForm.appendChild(supportLabel);

  let supportInput = document.createElement('input'); // Support input
  supportInput.setAttribute('type', 'checkbox');
  supportInput.id = "support"
  signUpForm.appendChild(supportInput)

  let lastline = document.createElement('hr'); // linebreak
  signUpForm.appendChild(lastline);

  let linebreak4 = document.createElement('br'); // space
  signUpForm.appendChild(linebreak4);
  
  let submitBtn = document.createElement('button'); // Append Submit Button
  submitBtn.type = "submit"
  submitBtn.className = "btn btn-primary btn-lg"
  submitBtn.id = 'sign-up-button'
  submitBtn.innerText = "Create Account"
  signUpForm.appendChild(submitBtn);


  mainBody.append(formContainer)
  signUpForm.addEventListener('submit', handleSignUpForm)
  
}

  let handleSignUpForm = (event) => {
  event.preventDefault()
      let newEmail = event.target["email"].value
      let newUsername = event.target["username"].value
      let newPassword = event.target["password"].value
      let newSupport = event.target["support"].value  

      fetch(`http://localhost:3000/users`, {
          method: "POST",
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              email: newEmail,
              name: newUsername,
              password: newPassword,
              support: newSupport
          })
      })
      .then(res => res.json())
      .then((newUser) =>{
          checkIfCartExists(newUser)
          currentUser = newUser 
          renderLogoPage()
      })
      event.target.reset()
  }// end of handleSignUpForm

// ------------------------------------------------ log in user


let showLoginForm = () => {
    categoryNameh1.innerText = ''


    let logInForm = document.createElement('form'); // Create New Element Form
    formContainer.appendChild(logInForm);
    
    let heading = document.createElement('h1'); // Heading of Form
        heading.id = 'headerLogIn'
        heading.innerText = "Welcome Back";
        logInForm.appendChild(heading);
    
    let linebreak = document.createElement('br'); // space
        logInForm.appendChild(linebreak);

    let emailLabel = document.createElement("label")
        emailLabel.innerText = "Email: "
        logInForm.appendChild(emailLabel);

    let emailInput = document.createElement("input")
        emailInput.type = "text"
        emailInput.id = "email"
        emailInput.placeholder = " Enter Email"
        emailInput.autocomplete = "off"
        logInForm.appendChild(emailInput);

    let linebreak1 = document.createElement('br'); // space
        logInForm.appendChild(linebreak1);

        let passwordLabel = document.createElement("label")
        passwordLabel.innerText = "Password: "
        logInForm.appendChild(passwordLabel);

    let passwordInput = document.createElement("input")
        passwordInput.type = "text"
        passwordInput.id = "password"
        passwordInput.placeholder = " Enter Password"
        passwordInput.autocomplete = "off"
        logInForm.appendChild(passwordInput);        
    
    let linebreak2 = document.createElement('br'); // space
        logInForm.appendChild(linebreak2);    
    
    let submitButton = document.createElement('button')
        submitButton.type = "submit"
        submitButton.className = "btn btn-primary btn-lg"
        submitButton.id = 'login-button'
        submitButton.innerText = "Log in"
        logInForm.append(submitButton)

    let noaccount = document.createElement('div'); // don't have an account? 
        noaccount.className = 'no-account'
        noaccount.innerHTML = "Don't have an account? Please Sign Up"
        logInForm.appendChild(noaccount);
  
    mainBody.append(formContainer)
    logInForm.addEventListener("submit", handleLoginForm)

}   

let handleLoginForm = (evt) => {
    evt.preventDefault()
    let emailLoggingIn = evt.target["email"].value
    let passwordLoggingIn = evt.target["password"].value

    fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify({
            email: emailLoggingIn,
            password: passwordLoggingIn
        })
    })
        .then(res => res.json())
        .then(user => {
 
            if(user.id){
                console.log(user)
                currentUser = user;
                checkIfCartExists(currentUser)
                renderLogoPage()

                let logIn = document.querySelector("#navLogin.category")
                    logIn.remove()
                let signUp = document.querySelector("#navSignUp.category")
                    signUp.remove()
                let loggedInUser = document.querySelector("#navAccount.category")
                    loggedInUser.innerText = `Hello, ${currentUser.username}!`
                let logOut = document.querySelector("#navLogout.category")
                    logOut.innerText = "Log out"


            } else {
                alert("Username Not Found. Please try again.")
            }
        })
        evt.target.reset()
}  

let renderLogoutLogoPage = () => {
    sessionStorage.removeItem("session[:user_id]")
    window.location.reload(true)
    renderLogoPage()
    }   