const startButton = document.querySelector("[data-start]");
const stopButton = document.querySelector("[data-stop]");
const bodyColorElement = document.querySelector("body");

let timerId = null;

const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

startButton.addEventListener("click", () => {
    timerId = setInterval(() => {
        bodyColorElement.style.backgroundColor = getRandomHexColor();
    }, 1000);

    startButton.disabled = true;
});

stopButton.addEventListener("click", () => {
    clearInterval(timerId);
    startButton.disabled = false;
});
