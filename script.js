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

                document.getElementById("welcome-popup").style.display = "flex";

                window.location.href = "home.html";

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

if (musicBtn && bgMusic) {

    musicBtn.addEventListener("click", () => {

        if (bgMusic.paused) {

            bgMusic.play();
            musicBtn.innerHTML = "⏸ Pause Music";

        } else {

            bgMusic.pause();
            musicBtn.innerHTML = "🎵 Play Music";

        }

    });

}

// ===============================
// Intro Screen
// ===============================

const intro = document.getElementById("intro");
const startBtn = document.getElementById("startBtn");

if (intro && startBtn) {

    startBtn.onclick = function () {
        intro.style.display = "none";
    };

}

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

if (heartsContainer) {

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

}
// ==========================
// Welcome Popup
// ==========================
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.onclick = function () {

        document.getElementById("welcome-popup").style.display = "none";

    };

}
// ==========================
// Birthday Balloons
// ==========================

const balloons = document.getElementById("balloons");

if (balloons) {

    function createBalloon() {

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        const emojis = ["🎈","🎉","🎁","🎊"];

        balloon.innerHTML = emojis[Math.floor(Math.random()*emojis.length)];

        balloon.style.left = Math.random()*100 + "vw";

        balloon.style.animationDuration = (6 + Math.random()*4) + "s";

        balloons.appendChild(balloon);

        setTimeout(()=>{
            balloon.remove();
        },10000);

    }

    setInterval(createBalloon,700);

}
// ==========================
// Fireworks
// ==========================

const fireworks = document.getElementById("fireworks");

if (fireworks) {

    function createFirework() {

        const fw = document.createElement("div");

        fw.className = "firework";

        const icons = ["✨","🎆","💖","⭐","🎇"];

        fw.innerHTML = icons[Math.floor(Math.random() * icons.length)];

        fw.style.left = Math.random() * 100 + "vw";
        fw.style.top = Math.random() * 70 + "vh";

        fireworks.appendChild(fw);

        setTimeout(() => {
            fw.remove();
        }, 1200);

    }

    setInterval(createFirework, 600);

}
// ==========================
// Confetti
// ==========================

const confetti = document.getElementById("confetti");

if (confetti) {

    function createConfetti() {

        const piece = document.createElement("div");

        piece.className = "confetti";

        const items = ["🎊","✨","💖","🌸","⭐"];

        piece.innerHTML = items[Math.floor(Math.random() * items.length)];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.animationDuration = (4 + Math.random() * 3) + "s";

        confetti.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 7000);

    }

    setInterval(createConfetti, 250);

}
// ==========================
// Birthday Typewriter Letter
// ==========================

const typingText = document.getElementById("typingText");

if (typingText) {

    const message =
"Happy Birthday! 🎂 May your day be filled with happiness, laughter, beautiful memories, and endless blessings. May every dream you have come true, and may every new year bring more success, love, and peace into your life. 💖✨";

    let i = 0;

    function typeLetter() {

        if (i < message.length) {

            typingText.innerHTML += message.charAt(i);

            i++;

            setTimeout(typeLetter, 40);

        }

    }

    typeLetter();

}
// ==========================
// Birthday Cake
// ==========================

const cake = document.getElementById("cake");
const wishMessage = document.getElementById("wishMessage");

if (cake && wishMessage){

    cake.onclick = function(){

        cake.innerHTML = "🧁";

        wishMessage.innerHTML = "🎉 Make a Wish! ✨";

        cake.style.transform = "scale(1.2)";

    };

}
// ==========================
// Gift Box Surprise
// ==========================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");

if (giftBox && giftMessage){

    giftBox.onclick = function(){

        giftBox.innerHTML = "💝";

        giftMessage.style.display = "block";

    };

}
// ==========================
// Birthday Photo Slider
// ==========================

const slider = document.getElementById("sliderImage");

if (slider){

    const photos = [

        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg"

    ];

    let current = 0;

    setInterval(()=>{

        current++;

        if(current >= photos.length){

            current = 0;

        }

        slider.src = photos[current];

    },3000);

}
// ==========================
// Smooth Page Transition
// ==========================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if(href){

            e.preventDefault();

            document.body.classList.add("fade-out");

            setTimeout(()=>{

                window.location.href = href;

            },500);

        }

    });

});
// ==========================
// Gallery Slider
// ==========================

const sliderImage = document.getElementById("sliderImage");

if (sliderImage) {

    const images = [
        "images/pic1.jpg",
        "images/pic2.jpg",
        "images/pic3.jpg",
        "images/pic4.jpg",
        "images/pic5.jpg",
        "images/pic6.jpg"
    ];

    let current = 0;

    setInterval(() => {
        current = (current + 1) % images.length;
        sliderImage.src = images[current];
    }, 2500);

}