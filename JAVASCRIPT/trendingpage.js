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

  // Select all video elements with the class "clip"
  const videos = document.querySelectorAll('.clip');

  // Loop through each video element
  videos.forEach(video => {
      // Play the video when the mouse enters
      video.addEventListener('mouseenter', () => {
          video.play();
      });
      
      // Pause and reset the video when the mouse leaves
      video.addEventListener('mouseleave', () => {
          video.pause();
          video.currentTime = 0;  // Reset the video to the beginning to show the poster image
      });
  });
  var swiper = new Swiper('.home', {
    spaceBetween: 30, // Space between slides
    centeredSlides: true, // Center the active slide
    autoplay: {
      delay: 20000, // 20 seconds per slide
      disableOnInteraction: false, // Keeps autoplay even after interactions
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true, // Enable clickable pagination
    },
  });

  // Video hover play/pause functionality
  const Videos = document.querySelectorAll('.swiper-slide video');

  videos.forEach(video => {
    video.addEventListener('mouseenter', () => {
      video.play(); // Play video on hover
    });

    video.addEventListener('mouseleave', () => {
      video.pause(); // Pause video when mouse leaves
      video.currentTime = 0; // Reset video to the start
    });
  });