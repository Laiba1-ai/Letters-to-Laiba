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

const slider = document.getElementById("sliderImage");

const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg",
    "images/pic6.jpg"
];

let current = 0;

if (slider) {

    setInterval(() => {
        current = (current + 1) % images.length;
        slider.src = images[current];
    }, 3000);

}
// ==========================
// Previous / Next Buttons
// ==========================

const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (slider && prevBtn && nextBtn) {

    prevBtn.addEventListener("click", () => {
        current = (current - 1 + images.length) % images.length;
        slider.src = images[current];
    });

    nextBtn.addEventListener("click", () => {
        current = (current + 1) % images.length;
        slider.src = images[current];
    });

}
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightboxImg");
const closeLightbox = document.getElementById("closeLightbox");

if (slider && lightbox && lightboxImg) {

    slider.addEventListener("click", () => {
        lightbox.style.display = "flex";
        lightboxImg.src = slider.src;
    });

}

closeLightbox?.addEventListener("click", () => {
    lightbox.style.display = "none";
});

lightbox?.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
// ======================================
// LETTERS PAGE ANIMATION
// ======================================

const letterCards = document.querySelectorAll(".letter-card");

if (letterCards.length > 0) {

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.2
    });

    letterCards.forEach((card, index) => {

        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";
        card.style.transition = `all .7s ease ${index * 0.15}s`;

        observer.observe(card);

    });

}

// ======================================
// FINAL LETTER GLOW
// ======================================

const finalLetter = document.querySelector(".final-letter");

if (finalLetter) {

    setInterval(() => {

        finalLetter.animate([
            {
                boxShadow: "0 0 15px rgba(255,105,180,.25)"
            },
            {
                boxShadow: "0 0 35px rgba(255,105,180,.45)"
            },
            {
                boxShadow: "0 0 15px rgba(255,105,180,.25)"
            }
        ], {
            duration: 2200
        });

    }, 2200);

}

// ======================================
// LETTER CARD HOVER SOUND (OPTIONAL)
// ======================================

letterCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});
/* ======================================
   WRITE LETTER PAGE
====================================== */

const message = document.getElementById("message");
const counter = document.getElementById("count");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");

if(message && counter){

    counter.innerHTML = message.value.length + " / 2000";

    message.addEventListener("input",()=>{

        counter.innerHTML="0 / 2000";

    });

}

if(saveBtn){

    // Load Saved Data
    document.getElementById("name").value =
    localStorage.getItem("letterName") || "";

    document.getElementById("title").value =
    localStorage.getItem("letterTitle") || "";

    document.getElementById("message").value =
    localStorage.getItem("letterMessage") || "";

    counter.innerHTML =
    document.getElementById("message").value.length + " / 150";

    saveBtn.addEventListener("click",()=>{

        localStorage.setItem(
            "letterName",
            document.getElementById("name").value
        );

        localStorage.setItem(
            "letterTitle",
            document.getElementById("title").value
        );

        localStorage.setItem(
            "letterMessage",
            document.getElementById("message").value
        );

        alert("💖 Letter Saved Successfully!");

    });

}

if(deleteBtn){

    deleteBtn.addEventListener("click",()=>{

        if(confirm("Delete your saved letter?")){

            localStorage.removeItem("letterName");
            localStorage.removeItem("letterTitle");
            localStorage.removeItem("letterMessage");

            document.getElementById("name").value="";
            document.getElementById("title").value="";
            document.getElementById("message").value="";

            counter.innerHTML="0 / 150";

            alert("🗑 Letter Deleted!");

        }

    });

}
const photo = document.getElementById("photo");
const preview = document.getElementById("preview");

if (photo && preview) {
    photo.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            preview.src = URL.createObjectURL(file);
            preview.style.display = "block";

        } else {

            preview.style.display = "none";

        }

    });
}

// ===============================
// Letter Theme Switcher
// ===============================

const letterType = document.getElementById("letterType");

if(letterType){

letterType.addEventListener("change",function(){

document.body.classList.remove(

"birthday",

"sorry",

"proposal",

"love",

"friendship",

"mother",

"father",

"eid",

"ramadan",

"valentine",

"anniversary",

"christmas",

"newyear"

);

document.body.classList.add(this.value);

});

}