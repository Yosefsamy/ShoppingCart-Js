let nameInput = document.getElementById("name")
let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let registerBtn = document.getElementById("registerBtn")
let users = []
registerBtn.addEventListener("click" , register)

function register(event){
    event.preventDefault();
    if(nameInput.value && emailInput.value && passwordInput.value){
        let user = {
            name : nameInput.value,
            email : emailInput.value,
            password : passwordInput.value
        }

        users.push(user)

        localStorage.setItem("users" , JSON.stringify(users))

        setTimeout( () => {
            window.location = "login.html"
        } , 1300)

    }

    else{
        window.alert("Please Enter The Data")
    }
    
}