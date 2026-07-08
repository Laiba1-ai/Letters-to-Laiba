// ===============================
// Letters to Laiba ❤️
// ===============================

const websitePassword = "laiba123";

// Password Check
function checkPassword() {

    const input = document.getElementById("password").value.trim();

    if (input === websitePassword) {

        alert("Welcome to your little world 🌸💖");

        // Next page (later)
        // window.location.href = "home.html";

    } else {

        alert("Oops! Wrong Password 💔");

        document.querySelector(".container").animate(
            [
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(-8px)" },
                { transform: "translateX(8px)" },
                { transform: "translateX(0px)" }
            ],
            {
                duration: 400
            }
        );

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

// ===============================
// Intro Screen
// ===============================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

startBtn.onclick = function () {

    intro.style.display = "none";

};

// ===============================
// Floating Hearts
// ===============================

const heartsContainer = document.getElementById("floating-hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 20) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);

}

setInterval(createHeart, 350);