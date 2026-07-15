// ===============================
// Letters to Laiba ❤️
// ===============================

const websitePassword = "laiba123";
// ===============================
// Theme Effects
// ===============================

let floatingIcons = ["❤","💖","✨"];

let currentTheme = "simple";

const themeEffects = {

simple:["🤍","✨","🌿"],

love:["💖","💕","🧸","🌹","⭐","💌"],

sorry:["🍂","💧","🌧️","🥺","💙"],

proposal:["🌹","💍","💎","🕊️","✨"],

birthday:["🎈","🎉","🎊","🎂","🎁","✨"],

friendship:["🌻","🌈","😊","⭐","🤝"],

mother:["🌸","💐","🦋","❤️"],

father:["💙","⭐","👔","🛡️"],

eid:["🌙","🕌","🎁","✨","🌸"],

ramadan:["🌙","⭐","🕌","🏮","✨"],

valentine:["❤️","🌹","🧸","💝","💋"],

anniversary:["💍","🥂","🌹","✨"],

christmas:["🎄","🎅","❄️","🎁","⭐"],

newyear:["🎆","🎇","🥂","✨","🎉"]

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
// ==========================
// Birthday Cake
// ==========================

const cakeContainer =
document.getElementById("cakeContainer");
const wishMessage = document.getElementById("wishMessage");

    const cake = document.getElementById("cake");
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
    if (cakeContainer) {

    cakeContainer.style.display =
        type === "birthday"
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

document.getElementById("letterPopup").style.display =
"flex";

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
const closeBtn = document.getElementById("closePopup");

if(closeBtn){

closeBtn.onclick = function(){

document.getElementById("letterPopup").style.display = "none";

};

}
