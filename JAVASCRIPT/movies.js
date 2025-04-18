let header = document.querySelector('header');

window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}



var swiper = new Swiper(".home", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
var swiper = new Swiper(".coming-container", {
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 2,
        },
        568: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 4,
        },
        968: {
            slidesPerView: 5,
        },

    }
  });

  const playBtn = document.getElementById('playBtn');
  const videoIframe = document.getElementById('videoIframe');
  const watchlistBtn = document.getElementById('watchlistBtn');

  playBtn.addEventListener('click', () => {
    videoIframe.src = "https://www.youtube.com/embed/EmqDR8FOYxk?autoplay=1";
  });

  watchlistBtn.addEventListener('click', () => {
    alert('Added to your Watchlist!');
    watchlistBtn.innerHTML = '<i class="fa-solid fa-check icon"></i> Added';
    watchlistBtn.disabled = true;
  });