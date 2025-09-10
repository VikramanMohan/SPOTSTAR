// Header Shadow Effect
// This code adds a shadow to the header when the page is scrolled down
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
// Music Player
document.addEventListener("DOMContentLoaded", function () {
    const audioElements = document.querySelectorAll("audio");

    audioElements.forEach((audio) => {
        audio.addEventListener("play", () => {
            audioElements.forEach((otherAudio) => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });
});
// Music Player Like Feature
document.addEventListener("DOMContentLoaded", function () {
    const likeButtons = document.querySelectorAll('.like-btn');

    likeButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            const icon = btn.querySelector('i');
            const liked = btn.getAttribute('data-liked') === 'true';

            btn.setAttribute('data-liked', !liked);
            icon.classList.toggle('bx-heart');
            icon.classList.toggle('bxs-heart');
            btn.classList.toggle('liked');
        });
    });
});

// Music Player Share Feature
// This code enables sharing functionality for the music player
document.addEventListener("DOMContentLoaded", function () {
    const shareButtons = document.querySelectorAll('.share-btn');

    shareButtons.forEach((btn) => {
        btn.addEventListener('click', function () {
            const songTitle = btn.closest('.musicplayer').querySelector('.song-title').textContent;
            const shareData = {
                title: songTitle,
                text: `Check out this song: ${songTitle}`,
                url: window.location.href
            };

            if (navigator.share) {
                navigator.share(shareData)
                    .then(() => console.log('Shared successfully'))
                    .catch(err => console.error('Share failed:', err));
            } else {
                navigator.clipboard.writeText(shareData.url).then(() => {
                    alert("Link copied to clipboard!");
                });
            }
        });
    });
});

// Music Player Download Feature
// document.addEventListener("DOMContentLoaded", () => {
//     const playlist = JSON.parse(localStorage.getItem("ajithPlaylist")) || [];
//     const playlistButtons = document.querySelectorAll(".playlist-btn");

//     // Create a "My Playlist" section
//     const playlistSection = document.createElement("div");
//     playlistSection.className = "my-playlist-section";
//     playlistSection.innerHTML = `
//         <h2>My Playlist</h2>
//         <ul id="playlist-items"></ul>
//     `;
//     document.body.appendChild(playlistSection);

//     // Function to update UI
//     function updatePlaylistUI() {
//         const list = document.getElementById("playlist-items");
//         list.innerHTML = "";

//         if (playlist.length === 0) {
//             list.innerHTML = "<li>No songs in your playlist</li>";
//             return;
//         }

//         playlist.forEach(song => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//                 <strong>${song.title}</strong> - ${song.artist}
//                 <button class="remove-song" data-title="${song.title}">Remove</button>
//             `;
//             list.appendChild(li);
//         });
//     }

//     // Add song to playlist
//     playlistButtons.forEach(btn => {
//         btn.addEventListener("click", () => {
//             const musicPlayer = btn.closest(".musicplayer");
//             const title = musicPlayer.querySelector(".song-title").innerText;
//             const artist = musicPlayer.querySelector(".artist marquee").innerText;

//             const exists = playlist.some(song => song.title === title);
//             if (!exists) {
//                 playlist.push({ title, artist });
//                 localStorage.setItem("ajithPlaylist", JSON.stringify(playlist));
//                 updatePlaylistUI();
//             } else {
//                 alert("Song already in playlist!");
//             }
//         });
//     });

//     // Remove song from playlist
//     document.body.addEventListener("click", function (e) {
//         if (e.target.classList.contains("remove-song")) {
//             const title = e.target.getAttribute("data-title");
//             const index = playlist.findIndex(song => song.title === title);
//             if (index !== -1) {
//                 playlist.splice(index, 1);
//                 localStorage.setItem("ajithPlaylist", JSON.stringify(playlist));
//                 updatePlaylistUI();
//             }
//         }
//     });

//     updatePlaylistUI();
// });
