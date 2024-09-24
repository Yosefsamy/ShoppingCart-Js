let emailInput = document.getElementById("email")
let passwordInput = document.getElementById("password")
let loginBtn = document.getElementById("loginBtn")

loginBtn.addEventListener("click" , login)

let users =JSON.parse(localStorage.getItem("users"));  // ? Get Users -> Array of Objects ? //
function login(event){
    event.preventDefault();
    if(users){
        if(emailInput.value && passwordInput.value){
            for(var i=0; i<users.length; i++){
                if(emailInput.value == users[i].email && passwordInput.value == users[i].password){
                    console.log(users[i].password);
                    console.log(users[i].email);
                    
                    setTimeout( () => {
                        window.location = "index.html"
                    } , 1300)
    
                    break
                }
    
                else
                    window.alert("Email Or Password Is Wrong")
    
            }
    
    
    
        }
    
        else{
            window.alert("Please Enter The Data")
        }
    }

    else
    window.alert("Please First Signup")
    
}



























