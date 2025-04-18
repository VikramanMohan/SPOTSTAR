let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// Toggle navbar
menu.addEventListener('click', () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbar.style.transition = 'all 0.3s ease-in-out';
});

// Movie navigation
const moviePages = {
    'Tamil Movies': '../HTML/Tamil.html',
    'English Movies': '../HTML/English.html',
    'Malayalam Movies': '../HTML/Malayalam.html',
};

function handleMovieNavigation() {
    const choice = document.getElementById('movies').value;
    const errorElement = document.getElementById('error');

    if (moviePages[choice]) {
        window.location.href = moviePages[choice];
    } else if (choice === '') {
        errorElement.textContent = 'Please select a language to proceed.';
    } else {
        errorElement.textContent = 'Invalid choice. Please try again.';
        console.error('Invalid Choice');
    }
}

// Swiper configuration
const comingSwiper = new Swiper('.coming-container', {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: { slidesPerView: 2 },
        568: { slidesPerView: 3 },
        768: { slidesPerView: 4 },
        968: { slidesPerView: 5 },
    },
});

// Debounced scroll effect
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

window.addEventListener('scroll', debounce(() => {
    header.classList.toggle('shadow', window.scrollY > 0);
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}, 50));
