// ===============================
// Letters to Laiba ❤️
// ===============================

// ===============================
// Owner / Visitor Mode
// ===============================

const websitePassword = "laiba123";

const isOwner =
    sessionStorage.getItem("ownerMode") === "true";
const isSurprise =
new URLSearchParams(window.location.search)
.get("surprise") === "true";
// ===============================
// Universal Theme Engine
// ===============================

const themeData = {

    simple:{
        title:"💌 Simple Letter",
        gift:"💌",
        animation:"letter",
        background:"simple-bg",
        effects:["💌","✨","🤍"]
    },

    birthday:{
        title:"🎂 Happy Birthday",
        gift:"🎂",
        animation:"cake",
        background:"birthday-bg",
        effects:["🎈","🎂","🎉","✨"]
    },

    love:{
        title:"❤️ Love Letter",
        gift:"🌹",
        animation:"rose",
        background:"love-bg",
        effects:["❤️","🌹","💖","✨"]
    },

    proposal:{
        title:"💍 Proposal",
        gift:"💍",
        animation:"ring",
        background:"proposal-bg",
        effects:["💍","🌹","❤️","✨"]
    },

  sorry:{

title:"🥺 I'm Sorry",

gift:"💔",

animation:"broken-heart",

background:"sorry-bg",

effects:["🥺","💔","🌧","🕊"]

    },

    friendship:{
        title:"🤝 Friendship",
        gift:"☕",
        animation:"coffee",
        background:"friend-bg",
        effects:["🤝","☕","💙","✨"]
    },

    mother:{
        title:"🌸 Mother",
        gift:"💐",
        animation:"flowers",
        background:"mother-bg",
        effects:["🌸","💐","🦋","❤️"]
    },

    father:{
        title:"👔 Father",
        gift:"👔",
        animation:"tie",
        background:"father-bg",
        effects:["👔","💙","⭐","🛡️"]
    },

    eid:{
        title:"🌙 Eid Mubarak",
        gift:"🕌",
        animation:"moon",
        background:"eid-bg",
        effects:["🌙","🕌","✨","🎁"]
    },

    ramadan:{
        title:"🕌 Ramadan Kareem",
        gift:"🏮",
        animation:"lantern",
        background:"ramadan-bg",
        effects:["🌙","🏮","⭐","🕌"]
    },

    valentine:{
        title:"🌹 Happy Valentine",
        gift:"🧸",
        animation:"teddy",
        background:"valentine-bg",
        effects:["❤️","🌹","🧸","💖"]
    },

    anniversary:{
        title:"💖 Happy Anniversary",
        gift:"🥂",
        animation:"couple",
        background:"anniversary-bg",
        effects:["💖","🥂","💍","✨"]
    },

    christmas:{
        title:"🎄 Merry Christmas",
        gift:"🎄",
        animation:"tree",
        background:"christmas-bg",
        effects:["🎄","🎅","❄️","⭐"]
    },

    newyear:{
        title:"🎆 Happy New Year",
        gift:"🎆",
        animation:"fireworks",
        background:"newyear-bg",
        effects:["🎆","🎇","🥂","✨"]
    },

    surprise:{
        title:"🎁 Surprise",
        gift:"🎁",
        animation:"gift",
        background:"surprise-bg",
        effects:["🎁","✨","🎊","💝"]
    }

};
// ===============================
// Theme Effects
// ===============================

let floatingIcons = ["❤","💖","✨"];

let currentTheme = "simple";

const themeEffects = {

simple:["🤍","✨","🌿"],

birthday:["🎈","🎂","🎉","✨"],

love:["❤️","🌹","💖","💕"],

proposal:["💍","🌹","❤️","✨"],

sorry:["🥺","💔","🌧","🕊"],

friendship:["🤝","☕","💙","✨"],

mother:["🌸","💐","🦋","❤️"],

father:["👔","💙","⭐","🛡"],

eid:["🌙","⭐","🕌","✨"],

ramadan:["🏮","🌙","⭐","✨"],

valentine:["❤️","🌹","🧸","💝"],

anniversary:["🥂","💍","❤️","✨"],

christmas:["🎄","❄️","⭐","🎁"],

newyear:["🎆","🎇","🥂","✨"]

};
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
   sessionStorage.setItem("ownerMode", "true");
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
const isWriteLetterPage =
document.getElementById("letterType") !== null;

const isHomePage =
document.body.classList.contains("home-page");

const isPasswordPage =
document.body.classList.contains("password-page");


document.addEventListener("mousemove", (e) => {

    const heart = document.createElement("div");

    heart.className = "cursor-heart";

    let icons;

    if (isPasswordPage || isHomePage) {

        icons = ["❤️"];

    } else if (isWriteLetterPage) {

        icons =
            themeEffects[currentTheme] ||
            themeEffects.simple;

    } else {

        icons = ["❤️"];

    }

    heart.textContent =
        icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = e.pageX + "px";
    heart.style.top = e.pageY + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },800);

});

const heartsContainer =
isWriteLetterPage
? document.getElementById("floating-hearts")
: null;
if (heartsContainer) {

    function createFloatingIcon() {

        const icon = document.createElement("div");

        icon.className = "heart";

        const icons = themeEffects[currentTheme] || themeEffects.simple;

icon.innerHTML =
icons[Math.floor(Math.random() * icons.length)];

        icon.style.left = Math.random() * 100 + "vw";

        icon.style.fontSize = (18 + Math.random() * 22) + "px";

        icon.style.animationDuration =
            (4 + Math.random() * 3) + "s";

        heartsContainer.appendChild(icon);

        setTimeout(() => {

            icon.remove();

        }, 7000);

    }

   setInterval(createFloatingIcon,600);

}
// ==========================
// Welcome Popup
// ==========================
const welcomePopup = document.getElementById("welcome-popup");

if (welcomePopup) {

    if (!isOwner) {

        welcomePopup.style.display = "none";

    }

}
const continueBtn = document.getElementById("continueBtn");

if (continueBtn) {

    continueBtn.onclick = function () {

        document.getElementById("welcome-popup").style.display = "none";

    };

}


const balloons =
isWriteLetterPage
? document.getElementById("balloons")
: null;
if (balloons) {

    function createBalloon() {
        if(currentTheme !== "birthday") return;

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

const fireworks =
isWriteLetterPage
? document.getElementById("fireworks")
: null;

if (fireworks) {

    function createFirework() {
        if (
    ![
        "birthday",
        "love",
        "proposal",
        "anniversary",
        "newyear",
        "valentine"
    ].includes(currentTheme)
){
    return;
}

        const fw = document.createElement("div");

        fw.className = "firework";
if (
    !["birthday", "newyear", "anniversary"].includes(currentTheme)
) return;
       const icons =
themeEffects[currentTheme] || themeEffects.simple;

fw.innerHTML =
icons[Math.floor(Math.random()*icons.length)];

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
const confetti =
isWriteLetterPage
? document.getElementById("confetti")
: null;

if (confetti) {

    function createConfetti() {
        if (
    ![
        "birthday",
        "proposal",
        "love",
        "sorry",
        "friendship",
        "mother",
        "father",
        "ramadan",
        "eid",
        "christmas",
        "newyear",
        "valentine",
        "anniversary"
    ].includes(currentTheme)
){
    return;
}

        const piece = document.createElement("div");

        piece.className = "confetti";

const items = themeEffects[currentTheme] || themeEffects.simple;
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
/*
const typingText = document.getElementById("typingText");

if (typingText) {

const birthdayMessage =
"Happy Birthday! 🎂 May your day be filled with happiness, laughter, beautiful memories, and endless blessings. May every dream you have come true, and may every new year bring more success, love, and peace into your life. 💖✨";

    let i = 0;

    function typeLetter() {

        if (i < birthdayMessage.length) {

            typingText.innerHTML += birthdayMessage.charAt(i)

            i++;

            setTimeout(typeLetter, 40);

        }

    }

    typeLetter();

}
*/
// ==========================
// Birthday Cake
// ==========================

const cake = document.getElementById("cake");
const wishMessage = document.getElementById("wishMessage");
const cakeEffect = document.getElementById("cakeEffect");

if (cake) {

    cake.onclick = function () {

        cake.classList.add("cut");

        cake.innerHTML = "🍰";

        wishMessage.innerHTML =
        "🎉 Happy Birthday! Make a Wish! ✨";

        if (cakeEffect) {
            cakeEffect.innerHTML = "🎊 🎈 ✨ 🎁 ❤️";
        }

        setTimeout(() => {

            cake.classList.remove("cut");

        }, 800);

    };

}
// ==========================
// Editable Gift
// ==========================

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const giftEditor = document.getElementById("giftEditor");
const saveGiftBtn = document.getElementById("saveGiftBtn");

if (giftBox) {

    const savedGift = localStorage.getItem("birthdayGift");

    if (savedGift) {
        giftMessage.innerHTML = savedGift;
    }

    giftBox.onclick = function () {

        giftBox.innerHTML = "💝";
        giftMessage.style.display = "block";

        if (isOwner) {

            giftEditor.style.display = "block";
            saveGiftBtn.style.display = "inline-block";
            giftEditor.value = giftMessage.innerText;

        }

    };

} // ✅ if(giftBox) closes here

if (saveGiftBtn) {

    saveGiftBtn.onclick = function () {

        giftMessage.innerHTML = giftEditor.value;

        localStorage.setItem(
            "birthdayGift",
            giftEditor.value
        );

        alert("🎁 Gift Saved!");

        giftEditor.style.display = "none";
        saveGiftBtn.style.display = "none";

    };

}
// ==========================
// Proposal Flower
// ==========================

const flower = document.getElementById("flower");

const flowerText = document.getElementById("flowerText");

const proposalBox =
document.getElementById("proposalBox");

if (flower && flowerText) {

    flower.onclick = function () {

        flower.innerHTML = "💐";
        flower.style.transform = "scale(1.2)";
        flowerText.innerHTML = "💍 A Surprise For You";

        if (proposalBox) {
            proposalBox.style.display = "none";
        }

        const proposalFlower =
            document.getElementById("proposalFlower");

        if (proposalFlower) {
            proposalFlower.style.display = "block";
        }

    };

}

// ==========================
// Smooth Page Transition
// ==========================

document.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", function(e){

        const href = this.getAttribute("href");

        if (
    href &&
    !href.startsWith("#") &&
    !href.startsWith("javascript:")
) {

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
].filter(Boolean);
let current = 0;

if (slider && images.length > 0) {

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

const letterMessage = document.getElementById("message");
const nameInput = document.getElementById("name");

const titleInput = document.getElementById("title");

const previewName = document.getElementById("previewName");

const previewTitle = document.getElementById("previewTitle");

const previewMessage = document.getElementById("previewMessage");
const counter = document.getElementById("count");
const saveBtn = document.getElementById("saveBtn");
const deleteBtn = document.getElementById("deleteBtn");
if(letterMessage && counter){

    counter.innerHTML = letterMessage.value.length + " / 2000";

   letterMessage.addEventListener("input",()=>{

function updatePreview(){

if(previewTitle){

previewTitle.innerHTML =
titleInput.value || "Your Letter Title";

}

if(previewName){

previewName.innerHTML =
"From: " + (nameInput.value || "Your Name");

}

if(previewMessage){

previewMessage.innerHTML =
letterMessage.value ||
"Start typing your beautiful letter...";

}

counter.innerHTML =
letterMessage.value.length + " / 2000";

}

nameInput?.addEventListener("input", updatePreview);

titleInput?.addEventListener("input", updatePreview);

letterMessage?.addEventListener("input", updatePreview);

updatePreview();

counter.innerHTML =
letterMessage.value.length + " / 2000";

});

}

if(saveBtn){

    // Load Saved Data
    document.getElementById("name").value =
    localStorage.getItem("letterName") || "";

    document.getElementById("title").value =
    localStorage.getItem("letterTitle") || "";

    letterMessage.value =
localStorage.getItem("letterMessage") || "";

counter.innerHTML =
letterMessage.value.length + " / 2000";
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
// Save into Memory Box

const letters =
JSON.parse(localStorage.getItem("memoryLetters")) || [];

letters.unshift({

name:nameInput.value,

title:titleInput.value,

message:letterMessage.value,

date:new Date().toLocaleDateString(),

favorite:false

});

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);
        alert("💖 Letter Saved Successfully!");

    });

// ===============================
// Auto Save Draft
// ===============================

function autoSaveDraft(){

localStorage.setItem("letterName", nameInput.value);

localStorage.setItem("letterTitle", titleInput.value);

localStorage.setItem("letterMessage", letterMessage.value);

}

nameInput?.addEventListener("input", autoSaveDraft);

titleInput?.addEventListener("input", autoSaveDraft);

letterMessage?.addEventListener("input", autoSaveDraft);
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

counter.innerHTML = "0 / 2000";
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
// Letter Theme
// ===============================

const letterType = document.getElementById("letterType");

function applyTheme(type) {

    // Remove old theme classes
    document.body.classList.remove(
        "simple",
        "love",
        "sorry",
        "proposal",
        "birthday",
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

    // Add new theme
    document.body.classList.add(type);

    currentTheme = type;
    floatingIcons = themeEffects[type] || themeEffects.simple;

    // Remove old effects
    document.querySelectorAll(
        ".heart,.confetti,.firework,.balloon,.cursor-heart"
    ).forEach(el => el.remove());

    // Birthday Cake
const cakeContainer = document.querySelector(".cake-container");

if (cakeContainer) {
    cakeContainer.style.display =
        (type === "birthday")
            ? "block"
            : "none";
}
    // Gift
    const gift = document.getElementById("giftContainer");
    if (gift) {
        gift.style.display =
            (type === "birthday" || type === "proposal")
                ? "block"
                : "none";
    }

    // Proposal Box
    const proposal = document.getElementById("proposalBox");
    if (proposal) {
        proposal.style.display =
            type === "proposal"
                ? "block"
                : "none";
    }

    // Proposal Flower
    const proposalFlower =
        document.getElementById("proposalFlower");

    if (proposalFlower) {
        proposalFlower.style.display =
            type === "proposal"
                ? "block"
                : "none";
    }
    const templates = {

love:{
title:"My Love ❤️",
message:"Every heartbeat reminds me of you. You are the most beautiful part of my life."
},

sorry:{
title:"I'm Sorry 💙",
message:"I know I made mistakes. Please forgive me because you mean everything to me."
},

birthday:{
title:"Happy Birthday 🎂",
message:"May your life always be filled with happiness, success, laughter and endless blessings."
},

proposal:{
title:"Will You Marry Me? 💍",
message:"From the very first day I knew you were special. I want to spend my whole life with you."
},

friendship:{
title:"Best Friend 🌻",
message:"True friendship never fades. Thank you for always being with me."
},

mother:{
title:"Dear Mom ❤️",
message:"Thank you for every sacrifice you made for me. I love you forever."
},

father:{
title:"Dear Dad 💙",
message:"Your strength, guidance and love have always inspired me."
},

eid:{
title:"Eid Mubarak 🌙",
message:"May Allah accept all your prayers and fill your life with happiness."
},

ramadan:{
title:"Ramadan Mubarak 🕌",
message:"May Allah shower His endless mercy and blessings upon you."
},

valentine:{
title:"Happy Valentine's Day ❤️",
message:"Every love story is beautiful, but ours is my favourite."
},

anniversary:{
title:"Happy Anniversary 💍",
message:"Every year with you is another beautiful chapter of our love story."
},

christmas:{
title:"Merry Christmas 🎄",
message:"May your Christmas sparkle with joy, love and peace."
},

newyear:{
title:"Happy New Year 🎆",
message:"May this new year bring happiness, success and beautiful memories."

}

};

if(letterMessage && templates[type]){

document.getElementById("title").value =
templates[type].title;

letterMessage.value =
templates[type].message;

counter.innerHTML =
letterMessage.value.length + " / 2000";

}
    const data = themeData[type];

if(data){

    const themeTitle = document.getElementById("themeTitle");
    const themeSubtitle = document.getElementById("themeSubtitle");
    const themeIcon = document.getElementById("themeIcon");
    const themeMessage = document.getElementById("themeMessage");

    if(themeTitle) themeTitle.innerHTML = data.title;
    if(themeSubtitle) themeSubtitle.innerHTML = "Write your feelings from your heart ❤️";
    // Change Theme Icon Animation

if(themeIcon){

    themeIcon.className = "theme-icon";

    switch(data.animation){

    case "cake":
        themeIcon.innerHTML = "🎂";
        themeIcon.classList.add("cake-animation");
        break;

    case "rose":
        themeIcon.innerHTML = "🌹";
        themeIcon.classList.add("rose-animation");
        break;

    case "ring":
        themeIcon.innerHTML = "💍";
        themeIcon.classList.add("ring-animation");
        break;

    case "broken-heart":
        themeIcon.innerHTML = "💔";
        themeIcon.classList.add("heart-animation");
        break;

    case "coffee":
        themeIcon.innerHTML = "☕";
        themeIcon.classList.add("coffee-animation");
        break;
case "flowers":
    themeIcon.innerHTML="💐";
    themeIcon.classList.add("flowers-animation");
    break;

case "tie":
    themeIcon.innerHTML="👔";
    themeIcon.classList.add("tie-animation");
    break;

case "moon":
    themeIcon.innerHTML="🌙";
    themeIcon.classList.add("moon-animation");
    break;

case "lantern":
    themeIcon.innerHTML="🏮";
    themeIcon.classList.add("lantern-animation");
    break;

case "teddy":
    themeIcon.innerHTML="🧸";
    themeIcon.classList.add("teddy-animation");
    break;

case "couple":
    themeIcon.innerHTML="🥂";
    themeIcon.classList.add("couple-animation");
    break;

case "tree":
    themeIcon.innerHTML="🎄";
    themeIcon.classList.add("tree-animation");
    break;

case "fireworks":
    themeIcon.innerHTML="🎆";
    themeIcon.classList.add("fireworks-animation");
    break;
        
    default:
        themeIcon.innerHTML = "💌";
 }

    }

    if(themeMessage){
        themeMessage.innerHTML = data.title;
    }

} 
localStorage.setItem("selectedTheme", type);
}
if (letterType) {

    const savedTheme =
        localStorage.getItem("selectedTheme");

    if (savedTheme) {

        letterType.value = savedTheme;
        applyTheme(savedTheme);

    } else {

        applyTheme(letterType.value);

    }

    letterType.addEventListener("change", function () {

        applyTheme(this.value);

    });

}

// ===============================
// Copy Letter
// ===============================

document.querySelectorAll(".copy-btn").forEach(btn=>{

btn.addEventListener("click",function(){

const text=this.previousElementSibling.innerText;

if (navigator.clipboard) {

    navigator.clipboard.writeText(text);

} else {

    const textarea =
        document.createElement("textarea");

    textarea.value = text;

    document.body.appendChild(textarea);

    textarea.select();

    document.execCommand("copy");

    textarea.remove();

}

this.innerHTML="✅ Copied!";

setTimeout(()=>{

this.innerHTML="📋 Copy Letter";

},2000);

});

});
// ===============================
// Proposal Page
// ===============================

const proposalPhoto = document.getElementById("proposalPhoto");
const proposalPreview = document.getElementById("proposalPreview");

if (proposalPhoto && proposalPreview) {

    proposalPhoto.addEventListener("change", function () {

        const file = this.files[0];

        if (file) {

            proposalPreview.src = URL.createObjectURL(file);
            proposalPreview.style.display = "block";

        }

    });

}

const proposalGift = document.getElementById("proposalGift");
const proposalGiftMessage = document.getElementById("proposalGiftMessage");

if (proposalGift && proposalGiftMessage) {

    proposalGift.addEventListener("click", function () {

        proposalGift.innerHTML = "💝";

        proposalGiftMessage.style.display = "block";

        proposalGiftMessage.innerHTML =
        "❤️ Every love story begins with one beautiful question.";

    });

}

const proposalFlower = document.getElementById("proposalFlower");
const proposalRing = document.getElementById("proposalRing");
const proposalText = document.getElementById("proposalText");

if (proposalFlower && proposalRing && proposalText) {

    proposalFlower.addEventListener("click", function () {

        proposalFlower.innerHTML = "💐";

        proposalRing.style.display = "block";

        proposalText.style.display = "block";

    });

}
const saveProposal = document.getElementById("saveProposal");
const proposalMessage =
document.getElementById("proposalMessage");

if (proposalMessage) {

    proposalMessage.value =
        localStorage.getItem("proposalMessage") || "";

}
window.onerror = function (
    message,
    source,
    line,
    column,
    error
) {

    console.error(
        "JS Error:",
        message,
        "Line:",
        line
    );

};
const pdfBtn = document.getElementById("pdfBtn");
const imageBtn = document.getElementById("imageBtn");

if(pdfBtn){

pdfBtn.addEventListener("click",()=>{

const { jsPDF } = window.jspdf;

const doc = new jsPDF();

const name =
document.getElementById("name").value;

const title =
document.getElementById("title").value;

const message =
document.getElementById("message").value;

doc.setFontSize(22);
doc.text(title || "Letter",20,20);

doc.setFontSize(14);
doc.text("From: " + (name || "Anonymous"),20,35);

doc.setFontSize(12);

const lines =
doc.splitTextToSize(message,170);

doc.text(lines,20,50);

doc.save("Letter.pdf");

});

}
if(imageBtn){

imageBtn.addEventListener("click",()=>{

const preview =
document.querySelector(".preview-card");

html2canvas(preview,{
backgroundColor:null,
scale:2
}).then(canvas=>{

const link=document.createElement("a");

link.download="Letter.png";

link.href=canvas.toDataURL("image/png");

link.click();

});

});

}
const recentLetterCard =
document.getElementById("recentLetterCard");

if(recentLetterCard){

const title =
localStorage.getItem("letterTitle");

const message =
localStorage.getItem("letterMessage");

if(title || message){

recentLetterCard.innerHTML = `
<h3>${title || "Untitled Letter"}</h3>
<p>${message || ""}</p>
`;

}

}
// ===============================
// Memory Box
// ===============================

const memoryList = document.getElementById("memoryList");

if (memoryList) {

    let letters = JSON.parse(
        localStorage.getItem("memoryLetters")
    ) || [];

    const searchInput =
        document.getElementById("searchLetters");

    function renderLetters(filter = "") {

        memoryList.innerHTML = "";

        const filtered = letters.filter(letter => {

            const text =
                (
                    (letter.title || "") +
                    " " +
                    (letter.message || "") +
                    " " +
                    (letter.name || "")
                ).toLowerCase();

            return text.includes(filter.toLowerCase());

        });

        if (!filtered.length) {

            memoryList.innerHTML =
            "<p>No letters found 💌</p>";

            return;

        }

        filtered.forEach((letter,index)=>{

            memoryList.innerHTML += `

<div class="memory-card">

<div class="memory-top">

<h3>${letter.title}</h3>

<button
class="favoriteBtn"
data-index="${index}">

${letter.favorite ? "⭐" : "☆"}

</button>

</div>

<p>

${letter.message.substring(0,120)}...

</p>

<small>

📅 ${letter.date || ""}

</small>

<button
class="readBtn"
data-index="${index}">

👁 Read


</button>
<button
class="deleteBtn"
data-index="${index}">

🗑 Delete

</button>

</div>

`;

        });

    }
function attachEvents(){

document.querySelectorAll(".favoriteBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

letters[i].favorite=!letters[i].favorite;

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);

renderLetters(searchInput ? searchInput.value : "");
attachEvents();

};

});

document.querySelectorAll(".readBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

document.getElementById("popupTitle").innerHTML =
letters[i].title;

document.getElementById("popupName").innerHTML =
"From: " + (letters[i].name || "Anonymous");

document.getElementById("popupMessage").innerHTML =
letters[i].message;

const popup = document.getElementById("letterPopup");
popup.style.display = "flex";
console.log("Popup Open");

};

});

document.querySelectorAll(".readBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

document.getElementById("popupTitle").innerHTML =
letters[i].title;

document.getElementById("popupName").innerHTML =
"From: " + (letters[i].name || "Anonymous");

document.getElementById("popupMessage").innerHTML =
letters[i].message;

const popup = document.getElementById("letterPopup");
popup.style.display = "flex";
console.log("Popup Open");

};

});
    document.querySelectorAll(".deleteBtn").forEach(btn=>{

btn.onclick=function(){

const i=this.dataset.index;

if(confirm("Delete this letter? 💔")){

letters.splice(i,1);

localStorage.setItem(
"memoryLetters",
JSON.stringify(letters)
);

renderLetters(
searchInput ? searchInput.value : ""
);

attachEvents();

}

};

});
}
    renderLetters();
attachEvents();

if(searchInput){

searchInput.addEventListener("input",()=>{

renderLetters(searchInput.value);
attachEvents();

});

}
    }
  
const closePopup = document.getElementById("closePopup");

if (closePopup) {

    closePopup.onclick = function () {

        document.getElementById("letterPopup").style.display = "none";

    };

}
window.addEventListener("load", () => {

const closePopup = document.getElementById("closePopup");

if(closePopup){

closePopup.onclick = function(){

document.getElementById("letterPopup").style.display = "none";

};

}

});
// ===============================
// Dark / Light Mode
// ===============================

const themeToggle = document.getElementById("themeToggle");

if(themeToggle){

    if(localStorage.getItem("theme") === "dark"){

        document.body.classList.add("dark-mode");
       themeToggle.innerHTML = "☀️";

    }

    themeToggle.addEventListener("click",()=>{

        document.body.classList.toggle("dark-mode");

        if(document.body.classList.contains("dark-mode")){

            localStorage.setItem("theme","dark");
            themeToggle.innerHTML = "☀️";

        }else{

            localStorage.setItem("theme","light");
           themeToggle.innerHTML = "🌙";

        }

    });

}
// ===============================
// Birthday Letter Edit
// ===============================
const typingText = document.getElementById("typingText");
const editBirthdayBtn = document.getElementById("editBirthdayBtn");
const saveBirthdayBtn = document.getElementById("saveBirthdayBtn");
const resetBirthdayBtn = document.getElementById("resetBirthdayBtn");

if (
editBirthdayBtn &&
saveBirthdayBtn &&
resetBirthdayBtn &&
typingText
){

const defaultLetter = `Happy Birthday! 🎂

May your life always be filled with happiness, success, love and beautiful memories.

Stay blessed and keep smiling forever. 💖`;

typingText.innerText =
localStorage.getItem("birthdayLetter") || defaultLetter;

editBirthdayBtn.onclick = function(){

typingText.contentEditable = "true";

typingText.focus();

typingText.style.border = "2px dashed #ff4081";
typingText.style.padding = "10px";

saveBirthdayBtn.style.display = "inline-block";
resetBirthdayBtn.style.display = "inline-block";

};

saveBirthdayBtn.onclick = function(){

typingText.contentEditable = "false";

typingText.style.border = "none";

localStorage.setItem(
"birthdayLetter",
typingText.innerText
);

alert("✅ Birthday Letter Saved!");
saveBirthdayBtn.style.display = "none";
resetBirthdayBtn.style.display = "none";

typingText.style.padding = "0";
};

resetBirthdayBtn.onclick = function(){

typingText.innerText = defaultLetter;

typingText.contentEditable = "false";

typingText.style.border = "none";

localStorage.removeItem("birthdayLetter");

alert("↺ Default Letter Restored!");
saveBirthdayBtn.style.display = "none";
resetBirthdayBtn.style.display = "none";

typingText.style.padding = "0";
};

}
// ===============================
// Birthday Photo
// ===============================

const birthdayPhoto =
document.getElementById("birthdayPhoto");
const changeBirthdayPhoto =
document.getElementById("changeBirthdayPhoto");

const birthdayPreview =
document.getElementById("birthdayPreview");
const deleteBirthdayPhoto =
document.getElementById("deleteBirthdayPhoto");

if(birthdayPhoto && birthdayPreview){

const savedImage =
localStorage.getItem("birthdayPhoto");

if(savedImage){

birthdayPreview.src = savedImage;
birthdayPreview.style.display = "block";

}
if(changeBirthdayPhoto){

changeBirthdayPhoto.onclick=function(){

birthdayPhoto.click();

};

}
birthdayPhoto.onchange = function(){

const file = this.files[0];

if(!file) return;

const reader = new FileReader();

reader.onload = function(e){

birthdayPreview.src = e.target.result;

birthdayPreview.style.display = "block";
deleteBirthdayPhoto.style.display="inline-block";
localStorage.setItem(
"birthdayPhoto",
e.target.result
);

};

reader.readAsDataURL(file);

};

}
if(deleteBirthdayPhoto && birthdayPreview && birthdayPhoto){

if(localStorage.getItem("birthdayPhoto")){

deleteBirthdayPhoto.style.display="inline-block";

}

deleteBirthdayPhoto.onclick = function(){

localStorage.removeItem("birthdayPhoto");

birthdayPreview.src = "";
birthdayPreview.style.display = "none";

birthdayPhoto.value = "";

deleteBirthdayPhoto.style.display = "none";

};
}
// ===============================
// Universal Visitor Popup
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    if (isOwner) return;

    if (document.body.classList.contains("home-page")) return;

    if (!document.getElementById("visitorPopup")) {

        document.body.insertAdjacentHTML("beforeend", `

<div id="visitorPopup" class="visitor-popup">

<h3>❤️ Like this card?</h3>

<p>Create your own beautiful letter now.</p>

<button id="createLetterBtn">
✨ Create Your Own
</button>

<button id="backHomeBtn">
🏠 Back Home
</button>

</div>

`);

        document.getElementById("createLetterBtn").onclick = () => {

    window.location.href = "home.html";

        };

        document.getElementById("backHomeBtn").onclick = () => {

            window.location.href = "home.html";

        };

    }

});
// ===============================
// Universal Share System
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    // Create Popup Automatically
    if (!document.getElementById("sharePopup")) {

        document.body.insertAdjacentHTML("beforeend", `
        <div id="sharePopup" class="share-popup">

            <div class="share-box">

                <h2>📤 Share This Page</h2>

                <button class="shareOption" data-type="whatsapp">💚 WhatsApp</button>

                <button class="shareOption" data-type="facebook">💙 Facebook</button>

                <button class="shareOption" data-type="twitter">🖤 X</button>

                <button class="shareOption" data-type="telegram">📩 Telegram</button>

                <button class="shareOption" data-type="copy">📋 Copy Link</button>

                <button id="closeShare">❌ Close</button>

            </div>

        </div>
        `);

    }

    const shareBtn = document.querySelector(".shareBtn");
    const sharePopup = document.getElementById("sharePopup");
    const closeShare = document.getElementById("closeShare");

    if (!shareBtn) return;

    shareBtn.onclick = () => {
        sharePopup.style.display = "flex";
    };

    closeShare.onclick = () => {
        sharePopup.style.display = "none";
    };

    document.querySelectorAll(".shareOption").forEach(btn => {

        btn.onclick = function () {

            let text = "💌 Letters to Laiba ❤️";

            if(document.body.classList.contains("birthday-page")){
                text = "🎂 Happy Birthday ❤️";
            }

            if(document.body.classList.contains("proposal-page")){
                text = "💍 Will You Marry Me? ❤️";
            }

            if(document.body.classList.contains("love-page")){
                text = "💖 Love Letter ❤️";
            }

            if(document.body.classList.contains("sorry-page")){
                text = "🥺 I'm Sorry ❤️";
            }

          const shareUrl = window.location.origin +
window.location.pathname + "?surprise=true";

const url = encodeURIComponent(shareUrl);
            const msg = encodeURIComponent(text);

            switch(this.dataset.type){

                case "whatsapp":
                    window.open(`https://wa.me/?text=${msg}%20${url}`,"_blank");
                    break;

                case "facebook":
                    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`,"_blank");
                    break;

                case "twitter":
                    window.open(`https://twitter.com/intent/tweet?text=${msg}&url=${url}`,"_blank");
                    break;

                case "telegram":
                    window.open(`https://t.me/share/url?url=${url}&text=${msg}`,"_blank");
                    break;

                case "copy":

    navigator.clipboard.writeText(shareUrl);

    alert("✅ Visitor Link Copied!");

    break;

            }

        };

    });

});
/*// ===============================
// Birthday Intro Countdown
// ===============================
    
const countNumber = document.getElementById("countNumber");
const introText = document.getElementById("introText");

if (birthdayIntro && countNumber && introText) {

    let count = 3;

    const timer = setInterval(() => {

        count--;

        if (count > 0) {

            countNumber.textContent = count;

        } else {

            clearInterval(timer);

            countNumber.textContent = "🎉";
            introText.textContent = "Happy Birthday ❤️";

            setTimeout(() => {

                birthdayIntro.style.opacity = "0";
                birthdayIntro.style.pointerEvents = "none";

                setTimeout(() => {

                    birthdayIntro.remove();

                }, 1000);

            }, 1500);

        }

    }, 1000);

}   
*/
document.addEventListener("DOMContentLoaded", () => {

    const previewBirthdayBtn = document.getElementById("previewBirthdayBtn");

    if (!previewBirthdayBtn) return;

    previewBirthdayBtn.addEventListener("click", () => {
        const birthdayIntro = document.getElementById("birthdayIntro");
        const countNumber = document.getElementById("countNumber");
        const introText = document.getElementById("introText");

        if (!birthdayIntro || !countNumber || !introText) return;

        birthdayIntro.style.display = "flex";
        birthdayIntro.style.opacity = "1";
        birthdayIntro.style.pointerEvents = "all";

        let count = 3;
        countNumber.textContent = count;
        introText.textContent = "🎂 A Special Surprise Is Waiting...";

        const timer = setInterval(() => {

            count--;

            if (count > 0) {

                countNumber.textContent = count;

            } else {

                clearInterval(timer);

                countNumber.textContent = "🎉";
                introText.textContent = "Happy Birthday ❤️";

                setTimeout(() => {

                    birthdayIntro.style.opacity = "0";

                    setTimeout(() => {

                        birthdayIntro.style.display = "none";
                        birthdayIntro.style.opacity = "1";
                        

                    },1000);

                },1500);

            }

        },1000);

    });

});
document.addEventListener("DOMContentLoaded", () => {

    if (isSurprise) {

        document.getElementById("previewBirthdayBtn")?.click();

    }

});
// ===============================
// Visitor Popup
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const visitorPopup = document.getElementById("visitorPopup");

    if (!visitorPopup) return;

    if (isOwner) {

        visitorPopup.style.display = "none";

    } else {

        setTimeout(() => {

            visitorPopup.style.display = "block";

        }, 3000);

    }

});
// ===============================
// Universal Owner Controls
// ===============================

function hideForVisitors(selectors){

    if(isOwner) return;

    document.querySelectorAll(selectors).forEach(el=>{

        if(el){

            el.style.display="none";

        }

    });

}
// ===============================
// Create Your Own
// ===============================
document.addEventListener("DOMContentLoaded", () => {

    const createLetterBtn =
    document.getElementById("createLetterBtn");

    if (!createLetterBtn) return;

    createLetterBtn.onclick = function () {

        window.location.href = "home.html";

    };

});
// ===============================
// Logout
// ===============================

function logoutOwner(){

    sessionStorage.removeItem("ownerMode");

    window.location.href="index.html";

}
// ===============================
// Logout Button Visibility
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const logoutBtn = document.getElementById("logoutBtn");

    if (!logoutBtn) return;

    if (isOwner) {

        logoutBtn.style.display = "inline-block";

    } else {

        logoutBtn.style.display = "none";

    }

});
document.addEventListener("DOMContentLoaded",()=>{

hideForVisitors(`
#editBirthdayBtn,
#saveBirthdayBtn,
#resetBirthdayBtn,
#changeBirthdayPhoto,
#deleteBirthdayPhoto,
#previewBirthdayBtn,
#giftEditor,
#saveGiftBtn,
#logoutBtn
`);

});
// ===============================
// Universal Theme Loader
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    if (!document.body.classList.contains("write-letter-page")) return;

    const letterType = document.getElementById("letterType");
    const themeTitle = document.getElementById("themeTitle");
    const themeSubtitle = document.getElementById("themeSubtitle");
    const themeIcon = document.getElementById("themeIcon");
    const themeMessage = document.getElementById("themeMessage");

    function applyTheme(theme){

        const data = themeData[theme] || themeData.simple;

        currentTheme = theme;

        if(themeTitle)
            themeTitle.innerHTML = data.title;

        if(themeSubtitle)
            themeSubtitle.innerHTML = "Write your feelings from your heart ❤️";

        if(themeIcon)
            themeIcon.innerHTML = data.gift;

        if(themeMessage)
            themeMessage.innerHTML = data.title;

        document.body.className = "write-letter-page " + theme;

    }

    applyTheme(letterType.value);

    letterType.addEventListener("change", () => {

        applyTheme(letterType.value);

    });

});
function createFloatingIcon(){

    const icon=document.createElement("div");

    icon.className="cursor-heart";

    icon.innerHTML=
    floatingIcons[
    Math.floor(Math.random()*floatingIcons.length)
    ];

    icon.style.left=
    Math.random()*window.innerWidth+"px";

    icon.style.fontSize=
    (20+Math.random()*20)+"px";

    document.body.appendChild(icon);

    const duration=
    5000+Math.random()*3000;

    icon.animate([

        {
            transform:"translateY(0)",
            opacity:1
        },

        {
            transform:"translateY(-"+(window.innerHeight+200)+"px)",
            opacity:0
        }

    ],{

        duration:duration,
        easing:"linear"

    });

    setTimeout(()=>{

        icon.remove();

    },duration);

}

setInterval(createFloatingIcon,600);
