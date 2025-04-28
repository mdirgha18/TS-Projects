var txt = document.getElementById("txt");
var inp = document.getElementById("inp");
var tm = document.getElementById("tm");
var wpm = document.getElementById("wpm");
var startBtn = document.getElementById("start"); // your button id was "Start" (capital S)
var time = 0;
var timer = null;
var isRunning = false;
var sampleText = "The quick brown fox jumps over the lazy dog";
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
    timer = window.setInterval(function () {
        time++;
        tm.textContent = "Time: ".concat(time, "s");
        calculateWPM();
    }, 1000);
}
function calculateWPM() {
    var wordsTyped = inp.value.trim().split(/\s+/).length;
    var wordsPerMinute = time > 0 ? Math.round((wordsTyped / time) * 60) : 0;
    wpm.textContent = "WPM: ".concat(wordsPerMinute);
}
inp.addEventListener("input", function () {
    var _a;
    calculateWPM();
    if (inp.value.toLowerCase().replace(/\s+/g, " ").trim() ===
        sampleText.toLowerCase().replace(/\s+/g, " ").trim()) {
        if (timer !== null) {
            clearInterval(timer);
        }
        isRunning = false;
        inp.disabled = true;
        wpm.textContent = "WPM: ".concat(Math.round((sampleText.split(" ").length / time) * 60));
        alert("Test Completed! Your WPM: ".concat((_a = wpm === null || wpm === void 0 ? void 0 : wpm.textContent) === null || _a === void 0 ? void 0 : _a.split(" ")[1]));
    }
});
startBtn.addEventListener("click", startTest);
