
const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('nav ul');
const closeButton = document.querySelector('.close-button');
const menuLinks = document.querySelectorAll('nav ul li a');

/// enabling nav menu on mobile screen when toggle button is clicked also showing close X button on the nav menu ////
toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    if (navLinks.classList.contains('show')) {
        closeButton.style.display = 'block';
    } else {
        closeButton.style.display = 'none';
    }
});

/// closing the mobile nav menu when pressed on X close button ////
closeButton.addEventListener('click', () => {
    navLinks.classList.remove('show');
    closeButton.style.display = 'none';
});

/// Also closing nav-menu when clicked on any navelements
//menuLinks.forEach(link => {
 // link.addEventListener('click', () => {
    //navLinks.classList.remove('show');
    //closeButton.style.display = 'none';
  //});
//});
////