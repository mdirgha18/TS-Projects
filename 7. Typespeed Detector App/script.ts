const txt = document.getElementById("txt") as HTMLParagraphElement;
const inp = document.getElementById("inp") as HTMLTextAreaElement;
const tm = document.getElementById("tm") as HTMLParagraphElement;
const wpm = document.getElementById("wpm") as HTMLParagraphElement;
const startBtn = document.getElementById("start") as HTMLButtonElement; // your button id was "Start" (capital S)

let time = 0;
let timer: number | null = null;
let isRunning = false;
const sampleText = "The quick brown fox jumps over the lazy dog";

function startTest() {
    if (timer !== null) {
        clearInterval(timer);
    }
    isRunning = true;
    time = 0;
    tm.textContent = "Time: 0s";
    wpm.textContent = "WPM: 0";
    inp.value = "";
    inp.disabled = false;
    inp.focus();
    txt.textContent = sampleText;
    timer = window.setInterval(() => {
        time++;
        tm.textContent = `Time: ${time}s`;
        calculateWPM();
    }, 1000);
}

function calculateWPM() {
    let wordsTyped = inp.value.trim().split(/\s+/).length;
    let wordsPerMinute = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
    wpm.textContent = `WPM: ${wordsPerMinute}`;
}

inp.addEventListener("input", () => {
    calculateWPM();

    if (
        inp.value.toLowerCase().replace(/\s+/g, " ").trim() ===
        sampleText.toLowerCase().replace(/\s+/g, " ").trim()
    ) {
        if (timer !== null) {
            clearInterval(timer);
        }
        isRunning = false;
        inp.disabled = true;
        wpm.textContent = `WPM: ${Math.round((sampleText.split(" ").length / time) * 60)}`;
        alert(`Test Completed! Your WPM: ${wpm?.textContent?.split(" ")[1]}`);
    }
});

startBtn.addEventListener("click", startTest);
