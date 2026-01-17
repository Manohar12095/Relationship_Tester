const question = document.getElementById("question");
const gif = document.getElementById("gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

let clickCount = 0;
let noButtonMoves = false;

// EXACT texts from the video
const texts = [
    "Ek aur baar Soch lo! 😣",
    "Please re consider !.. 😭",
    " Please think twice..! ❤️",
    "I will be very sad... 💔"
];

// Matching GIFs for each stage
const gifs = [
    "https://media.tenor.com/f1xnRxTRxLAAAAAj/bears-hug.gif",       // Initial
    "https://media1.tenor.com/m/4Wn_I2USnfgAAAAd/sad-begging-please.gif",      // Sad 1
    "https://media.tenor.com/iZukxR3qFRQAAAAi/gato-pls-pls-cat.gif", // Sad 2
    "https://media1.tenor.com/m/8DB9gYKzozUAAAAC/rain-raining.gif",        // Pleading
    "https://media.tenor.com/pkAWEgwDxmQAAAAi/tantrum-throwing-a-tanturm.gif"  // Crying
];

// Function runs when "No" is clicked
function handleNo() {
    clickCount++;
    
    // Change Text
    if (clickCount <= texts.length) {
        question.innerHTML = texts[clickCount - 1];
    } else {
        // If they keep clicking No, keep showing the last message
        question.innerHTML = texts[texts.length - 1];
    }

    // Change GIF
    if (clickCount < gifs.length) {
        gif.src = gifs[clickCount];
    }

    // Start moving No button after last text
    if (clickCount >= texts.length && !noButtonMoves) {
        noButtonMoves = true;
        noBtn.addEventListener('mouseover', () => {
            const container = document.querySelector('.container');
            const containerRect = container.getBoundingClientRect();
            const btnWidth = noBtn.offsetWidth;
            const btnHeight = noBtn.offsetHeight;
            const maxX = containerRect.width - btnWidth;
            const maxY = containerRect.height - btnHeight;
            const newX = Math.random() * maxX;
            const newY = Math.random() * maxY;
            noBtn.style.position = 'absolute';
            noBtn.style.left = `${newX}px`;
            noBtn.style.top = `${newY}px`;
        });
    }

    // Make the YES button grow bigger
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.3}px`;
    yesBtn.style.padding = `${parseFloat(window.getComputedStyle(yesBtn).padding) * 1.2}px`;
}

// Function runs when "Yes" is clicked
function handleYes() {
    // Change text to the success message
    question.innerHTML = "I knew it! You Love me a lot 😘";
    
    // Change GIF to the kissing bear
    gif.src = "https://media.tenor.com/gUiu1zyxfzYAAAAj/bear-kiss-bear-kisses.gif";
    
    // Hide the buttons so they can't click anymore
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
}