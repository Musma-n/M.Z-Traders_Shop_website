// app.js

// Select the menu icon and the navigation ul
const menuIcon = document.getElementById('menu-icon');
const navUl = document.querySelector('nav ul');

// Add click event listener to the menu icon
menuIcon.addEventListener('click', () => {
    // Toggle the 'show' class on the navigation ul
    navUl.classList.toggle('show');
});

// For dropdown functionality
const dropdownItems = document.querySelectorAll('.dropdown');

dropdownItems.forEach(item => {
    item.addEventListener('click', () => {
        // Toggle the 'show' class on the dropdown-menu
        const dropdownMenu = item.querySelector('.dropdown-menu');
        dropdownMenu.classList.toggle('show');
    });
});
