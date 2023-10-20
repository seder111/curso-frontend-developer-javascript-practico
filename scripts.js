const emailNavBar = document.getElementsByClassName('navbar-email')[0];
const desktopMenu = document.getElementsByClassName('desktop-menu')[0];

//Mostramos o dejamos de mostrar el menu de usuario.
emailNavBar.addEventListener( 'click', () => desktopMenu.classList.toggle('inactive'));

//Función toogle convertida a Arrow function.
// function toogleDesktopMenu() {
//     desktopMenu.classList.toggle('inactive');
// }