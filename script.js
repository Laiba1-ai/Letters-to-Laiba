// ===============================
// Letters to Laiba ❤️
// ===============================

const websitePassword = "laiba123";

// Password Check
function checkPassword() {

    const input = document.getElementById("password").value.trim();

    if (input === websitePassword) {

        const loading = document.getElementById("loading-screen");
        const progress = document.querySelector(".progress");

        loading.style.display = "flex";

        let width = 0;

        const loader = setInterval(() => {

            width += 2;
            progress.style.width = width + "%";

            if (width >= 100) {

                clearInterval(loader);

                loading.style.display = "none";

                alert("Welcome to your little world 🌸💖");

                // window.location.href = "home.html";

            }

        }, 50);

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
// ==========================
// Cursor Hearts
// ==========================

document.addEventListener("mousemove", function(e){

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    heart.innerHTML = "💖";

    heart.style.left = e.clientX + "px";
    heart.style.top = e.clientY + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },800);

});
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