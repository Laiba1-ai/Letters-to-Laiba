// ===============================
// Birthday Page
// ===============================

const typingText = document.getElementById("typingText");
const editBtn = document.getElementById("editBirthdayBtn");
const saveBtn = document.getElementById("saveBirthdayBtn");
const resetBtn = document.getElementById("resetBirthdayBtn");

if (typingText) {

const defaultLetter = `Happy Birthday! 🎂

May your life always be filled with happiness, success, love and endless smiles.

May Allah bless you with health, peace and beautiful memories forever. 💖`;

typingText.innerText =
localStorage.getItem("birthdayLetter") || defaultLetter;

if(editBtn){

editBtn.onclick = function(){

typingText.contentEditable = true;
typingText.focus();

typingText.style.border = "2px dashed #ff4081";
typingText.style.padding = "10px";

saveBtn.style.display = "inline-block";
resetBtn.style.display = "inline-block";

};

}

if(saveBtn){

saveBtn.onclick = function(){

typingText.contentEditable = false;

typingText.style.border = "none";

localStorage.setItem(
"birthdayLetter",
typingText.innerText
);

alert("✅ Birthday Letter Saved!");

};

}

if(resetBtn){

resetBtn.onclick = function(){

typingText.innerText = defaultLetter;

typingText.contentEditable = false;

typingText.style.border = "none";

localStorage.removeItem("birthdayLetter");

alert("↺ Default Letter Restored!");

};

}

}

// ===============================
// Cake
// ===============================

const cake = document.getElementById("cake");
const wish = document.getElementById("wishMessage");

if(cake){

cake.onclick = function(){

cake.innerHTML="🧁";

wish.innerHTML="🎉 Make A Wish!";

};

}

// ===============================
// Gift
// ===============================

const gift=document.getElementById("giftBox");
const giftMessage=document.getElementById("giftMessage");

if(gift){

gift.onclick=function(){

gift.innerHTML="💝";

giftMessage.style.display="block";

};

}
