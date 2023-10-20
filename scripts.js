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

