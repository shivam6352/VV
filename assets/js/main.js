"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catImg = document.querySelector(".cat-img");

const MAX_IMAGES = 10;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
    if (play) {
        noCount++;
        const imageIndex = Math.min(noCount, MAX_IMAGES);
        changeImage(imageIndex);
        resizeYesButton();
        updateNoButtonText();
        if (noCount === MAX_IMAGES) {
            play = false;
        }
    }
});

function handleYesClick() {
    titleElement.innerHTML = "¡Yupiii!<br/>Tq<3 I Love You my cutu lappu❤️";
    buttonsContainer.classList.add("hidden");
    changeImage("yes");
}

function resizeYesButton() {
    const computedStyle = window.getComputedStyle(yesButton);
    const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
    const newFontSize = fontSize * 1.6;

    yesButton.style.fontSize = `${newFontSize}px`;
}

function generateMessage(noCount) {
    const messages = [
        "No",
        "Are You Sure? 🌷🌷",
        "Really Sure? 🥺",
        "Please 🫶",
        "I'll Buy You a Pizza 🍕",
        "Then a Chocolate 🍫",
        "we'll watch movies 🎥",
        "We'll go on the beach 🏖️",
        "We'll play video games together 👾",
        "I am going to cry! 😭",
        "You're Breaking my Heart 💔",
    ];

    const messageIndex = Math.min(noCount, messages.length - 1);
    return messages[messageIndex];
}

function changeImage(image) {
    catImg.src = `assets/img/cat-${image}.jpg`;
}

function updateNoButtonText() {
    noButton.innerHTML = generateMessage(noCount);
}
