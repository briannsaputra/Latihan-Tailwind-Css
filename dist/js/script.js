// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top')

    if (window.scrollY > fixedNav) {
        header.classList.add('navbar-fixed');  // Tidak perlu titik sebelum class
        toTop.classList.remove('hidden');  
        toTop.classList.add('flex');  
    } else {
        header.classList.remove('navbar-fixed'); 
        toTop.classList.remove('flex');  
        toTop.classList.add('hidden'); 
    }
};


// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', function () {
    // Toggle class 'hamburger-active' pada tombol hamburger
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
});

// Klik Di Luar Hamburger
window.addEventListener('click', function (e) {
    if (e.target != hamburger && e.target != navMenu) {
        hamburger.classList.remove('hamburger-active');
        navMenu.classList.add('hidden');
    }
})

// Dark Mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click', function () {
    if (darkToggle.checked) {
        html.classList.add('dark');
        localStorage.theme = 'dark';
    } else {
        html.classList.remove('dark');
        localStorage.theme = 'ligh';
    }
});

// pindahkan posisi sesuai toogle
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    
    darkToggle.checked = true;
    } else {
        darkToggle.checked = false;
    }
