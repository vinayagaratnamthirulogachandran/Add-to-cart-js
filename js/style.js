const btnCart = document.querySelector('#cart-icon');
const cart = document.querySelector('.cart');
const btnClose = document.querySelector('.cart-close');

btnCart.addEventListener('click', ()=>{
    cart.classList.add('cart-active');
});

btnClose.addEventListener('click', ()=>{
    cart.classList.remove('cart-active');
});

document.addEventListener('DOMContentLoaded',loadFood);

function loadFood(){
    loadContent();
}

function loadContent(){
// remove food item from cart
    let btnRemove = document.querySelectorAll('.cart-remove');
    btnRemove.forEach((button)=>{
        button.addEventListener('click', removeItem);
    });

// product item change event
    let qtyElements = document.querySelectorAll('.cart-quantity');
    qtyElements.forEach((input) =>{
        input.addEventListener('change', changeQty)
    });

// product change
    let cartBtn = document.querySelectorAll('.add-cart');
    cartBtn.forEach((btn) =>{
        btn.addEventListener('click', addCart)
    });
}

// remove item
function removeItem(){
    if(confirm('Are you sure?')){
        let title = this.parentElement.querySelector('.cart-food-title').innerHTML;
        itemList = itemList.filter(el=>el.title!=title);
        this.parentElement.remove();
        loadContent();
    }
}

// change quantity
function changeQty(){
    if(isNaN(this.value) || this.value<1){
        this.value=1;
    }
}

let itemList = [];

// Add cart
function addCart(){
    let food = this.parentElement;
    let title = food.querySelector('.food-title').innerHTML;
    let price = food.querySelector('.food-price').innerHTML;
    let img = food.querySelector('.food-img').src;

    let newProduct = {title, price, img}

    // check product already exist
    if (itemList.find((el) => el.title == newProduct.title)){
        alert('Product already add in cart');
        return;
    }else{
        itemList.push(newProduct);
    }

    let newProductElement = createCartProducts(title, price, img);
    let element = document.createElement('div');
    element.innerHTML = newProductElement;

    let cartBasket = document.querySelector('.cart-content');
    cartBasket.append(element);
    loadContent();
}

function createCartProducts(title, price, img){

    return  `
    <div class="cart-box">
                        <img src="${img}" class="cart-img">
                        <div class="detail-box">
                            <div class="cart-food-title">${title}</div>
                            <div class="price-box">
                                <div class="cart-price">${price}</div>
                                <div class="cart-amt">${price}</div>
                            </div>
                            <input type="number" value="1" class="cart-quantity">
                        </div>
                        <ion-icon name="trash" class="cart-remove"></ion-icon>
                    </div> -->
    `;
}