const emailNavBar = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];
const burguerIcon = document.getElementsByClassName('menu')[0];
const mobileMenu = document.getElementsByClassName('mobile-menu')[0];

//Probamos con QuerySelector
const productDetail = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.navbar-shopping-cart');



//Mostramos o dejamos de mostrar el menu de usuario con una Arrow function.
emailNavBar.addEventListener( 'click', () => {
    const isCartProductDetailOpen = !productDetail.classList.contains('inactive');

    if (isCartProductDetailOpen) {
        productDetail.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive')
});

//Función toogle convertida a Arrow function.
// function toogleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }

//Mostramos o dejamos de mostrar el menú con una función.
burguerIcon.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu() {
    const isCartProductDetailOpen = !productDetail.classList.contains('inactive');

    if (isCartProductDetailOpen) {
        productDetail.classList.add('inactive');
    }

    mobileMenu.classList.toggle('inactive');
}

//Mostramos o dejamos de mostrar el detalle de compra o Carrito.
shoppingCart.addEventListener('click', toggleCartProductDetail);

function toggleCartProductDetail() {
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive');
    const isDesktopMenuOpen = !desktopMenu.classList.contains('inactive');

    if (isMobileMenuOpen) {
        mobileMenu.classList.add('inactive');
    }

    if(isDesktopMenuOpen) {
        desktopMenu.classList.add('inactive');
    }

    productDetail.classList.toggle('inactive');
}




//Creamos un array, añadimos objetos de productos, luego los renderizamos en la home

const products = [{
    name: 'Mouse Logi Master',
    image: 'https://images.pexels.com/photos/6633920/pexels-photo-6633920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 340
}];

products.push({
    name: 'Bike',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 120,
});

products.push({
    name: 'Pantalla',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 220,
});

products.push({
    name: 'Computer',
    image: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 820,
});

products.push({
    name: 'Perry Lana',
    image: 'https://images.pexels.com/photos/13249098/pexels-photo-13249098.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    price: 1111020,
});

//Ejemplo:
/* <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
</div> */

const cardsContainer = document.querySelector('.cards-container');

function renderProducts(products) {
    for (product of products) {
    
        //Creamos los elementos y les añadimos las clases necesarias
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.image);
    
        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
        const productInfoPrice = document.createElement('p');
        productInfoPrice.innerText = `${product.price}€`;
    
        const productInfoName = document.createElement('p');
        productInfoName.innerText = product.name;
    
        productInfoDiv.append(productInfoPrice, productInfoName);
    
        const productFigure = document.createElement('figure');
        const productFigureImg = document.createElement('img');
        productFigureImg.setAttribute('src','./icons/bt_add_to_cart.svg');
    
        productFigure.appendChild(productFigureImg);
    
        productInfo.append(productInfoDiv, productFigure);
    
        productCard.append(productImg, productInfo);
    
        cardsContainer.appendChild(productCard);
    
    }

}

renderProducts(products);