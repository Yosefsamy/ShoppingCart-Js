let logoutBtn = document.getElementById("logoutBtn")
let productsRow = document.getElementById("products-row")
let removeFromCartBtn = document.getElementById("RemoveBtn")
let badge = document.getElementById("badge")
let users =JSON.parse(localStorage.getItem("users"));
let items = []
let totalPrice = document.getElementById("totalPrice")

function checkProductsInLocalStorage(){
    let ProductsInCart = localStorage.getItem("ProductsInCart")
    if(ProductsInCart){
        items = JSON.parse(ProductsInCart)  
        Display(items)
    }

    else{
        items = []      
        totalPrice.innerHTML = "No Products In Your Cart"
    }

    badge.innerHTML = items.length
}

if(users){
    checkProductsInLocalStorage()
}

else{
    window.location.href = "login.html"
}



function Display(list){
    let cartona = ''; // Initialize an empty string to hold the HTML
    let totalSum = ''
    for (var i = 0; i < list.length; i++) {

        cartona += `
            <div class="col-12 text-center p-3 shadow-lg"> 
                <div class="image"> 
                    <img class="img-fluid" src="${list[i].imageUrl}" alt="product-img"> 
                </div>
                <div class="product-details mt-3">${list[i].title}</div> 
                    <p class="muted">${list[i].description}</p>
                    <div class="d-flex justify-content-between align-items-center"> 
                        <h5>${list[i].price} L.E</h5>
                        <div>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                        </div>
                    </div>
                    <button id="RemoveBtn" class="btn btn-danger px-5 py-2 mt-3" onclick="removeFromCart(${i})">
                        <i class="fa-regular fa-trash-can fs-5"></i>
                        <span class="mb-0">Remove</span>
                    </button>
                </div> 
            </div>`;
    }

    if(calculateTotalPrice() > 0)
    {
        totalSum = `<div class="alert alert-primary my-4 text-center fs-4 w-50 mx-auto" role="alert">
        Total Sum : ${calculateTotalPrice()}</div>`
    }

    else{
        totalSum = `<div class="alert alert-primary my-4 text-center fs-4 w-50 mx-auto" role="alert">
        No Products In Your Cart</div>`
    }

    totalPrice.innerHTML=totalSum

    // Set the innerHTML of the productsRow element
    productsRow.innerHTML = cartona;
}

function removeFromCart(index){
    items.splice(index,1)
    localStorage.setItem("ProductsInCart",JSON.stringify(items))
    checkProductsInLocalStorage()
}



function calculateTotalPrice(){
    let allProductsInCart = localStorage.getItem("ProductsInCart")
    items = JSON.parse(allProductsInCart)  
    let sum =0
    for(var i=0; i<items.length; i++)
        sum+=items[i].price

    return sum
}


logoutBtn.addEventListener("click" , logout)

function logout(){
    localStorage.clear()

    setTimeout( () => {
        window.location = "login.html"
    } , 1300)
    
}
