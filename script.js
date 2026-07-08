// ===============================
// Letters to Laiba ❤️
// Part 1 - Script
// ===============================

// Change this password anytime
const websitePassword = "laiba123";

// Password Check
function checkPassword() {

    const input = document.getElementById("password").value;

    if (input === websitePassword) {

        alert("Welcome to your little world 🌸💖");

        // Home page (Coming in next part)
        // window.location.href = "home.html";

    } else {

        alert("Oops! Wrong Password 💔");

        document.querySelector(".container").animate([
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(-8px)" },
            { transform: "translateX(8px)" },
            { transform: "translateX(0px)" }
        ], {
            duration: 400
        });

    }

}

// ===============================
// Music
// ===============================

const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");

musicBtn.addEventListener("click", () => {

    if (bgMusic.paused) {

        bgMusic.play();
        musicBtn.innerHTML = "⏸ Pause Music";

    } else {

        bgMusic.pause();
        musicBtn.innerHTML = "🎵 Play Music";

    }

});
// Intro Screen

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn.addEventListener("click", () => {

    intro.style.opacity = "0";

    setTimeout(() => {
        intro.style.display = "none";
    },600);

});
