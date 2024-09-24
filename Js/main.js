let logoutBtn = document.getElementById("logoutBtn")
let productsRow = document.getElementById("products-row")
let addToCartBtn = document.getElementById("AddToCart")
let badge = document.getElementById("badge")
let users =JSON.parse(localStorage.getItem("users"));
let productsInCart = []
let items = []
let allProducts = []
let products = [
    {
        id : 1,
        title : "Laptop Lenovo LOQ",
        description : `Laptop Lenovo LOQ 15IRH8 82XV00SNED `,
        imageUrl : "Images/Lap_Lenovo.jpg",
        price : 32000
    },

    {
        id : 2,
        title : "Monitor Samsung",
        description : `Monitor SAMSUNG LU32R590CWMXEG 32 Inch`,
        imageUrl : "Images/TV_Samsung.jpg",
        price : 8100
    },

    {
        id : 3,
        title : "Samsung Galaxy A15",
        description : `Samsung Galaxy A15 Dual SIM 6GB Ram+128GB ROM `,
        imageUrl : "Images/Mobile_Samsung.jpg",
        price : 7100
    },

    {
        id : 4,
        title : "OPPO Reno 12F",
        description : `OPPO Reno 12F 5G (256GB - 12GB) - Amber Orange`,
        imageUrl : "Images/Mobile_Oppo.jpg",
        price : 12706
    }
]



function checkProductsInLocalStorage(){
    let ProductsInLocalStorage = localStorage.getItem("ProductsInCart")
    if(ProductsInLocalStorage){
        productsInCart = JSON.parse(ProductsInLocalStorage)
    }
    else{
        productsInCart = []
    }

    badge.innerHTML = productsInCart.length
    
}

if(users){
    checkProductsInLocalStorage()

    // Display Products
    Display()
}

else{
    window.location.href = "login.html"
}

function Display(){
 let cartona = ''; // Initialize an empty string to hold the HTML

    for (var i = 0; i < products.length; i++) {

    
        cartona += `
            <div class="col-md-4 text-center p-3 shadow-lg"> 
                <div class="image"> 
                    <img class="img-fluid" src="${products[i].imageUrl}" alt="product-img"> 
                </div>
                <div class="product-details mt-3">${products[i].title}</div> 
                    <p class="muted">${products[i].description}</p>
                    <div class="d-flex justify-content-between align-items-center"> 
                        <h5>${products[i].price} L.E</h5>
                        <div>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                            <i class="fa-solid fa-star fs-5 text-warning"></i>
                        </div>
                    </div>
                    <button id="RemoveBtn" class="btn btn-success px-5 py-2 mt-3" onclick="addToCart(${products[i].id})">
                    Add To cart
                    </button>
                </div> 
            </div>`;
    }
    
    // Set the innerHTML of the productsRow element
    productsRow.innerHTML = cartona;
}

function addToCart(id){
    let targetProduct = products.find((product) => {
        return product.id==id
    })

    if(checkUserLogged()){
        productsInCart.push(targetProduct)
        // Insert Products In Local Storage
        localStorage.setItem("ProductsInCart",JSON.stringify(productsInCart))
        checkProductsInLocalStorage()
        badge.innerHTML = productsInCart.length    
    }

    else{
        window.location.href = "login.html"
    }
    
}


function checkUserLogged(){
    if(localStorage.getItem("users")){
        return true
    }
}


logoutBtn.addEventListener("click" , logout)

function logout(){
    localStorage.clear()

    setTimeout( () => {
        window.location = "login.html"
    } , 1300)
    
}
