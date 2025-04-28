var quiz = [
    {
        q: "What does HTML stand for?",
        opts: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyperlinking Text Management Language"],
        ans: "HyperText Markup Language"
    },
    {
        q: "What is the correct syntax for referring to an external JavaScript file?",
        opts: ["<script href='app.js'>", "<script name='app.js'>", "<script src='app.js'>", "<script file='app.js'>"],
        ans: "<script src='app.js'>"
    },
    {
        q: "Inside which HTML element do we put the JavaScript?",
        opts: ["<script>", "<js>", "<javascript>", "<scripting>"],
        ans: "<script>"
    },
    {
        q: "Which company developed JavaScript?",
        opts: ["Mozilla", "Netscape", "Sun Microsystems", "Oracle"],
        ans: "Netscape"
    },
    {
        q: "Which of the following is a JavaScript data type?",
        opts: ["Number", "Character", "Float", "None of the above"],
        ans: "Number"
    }
];
var idx = 0, scr = 0, time = 30, timer;
document.addEventListener('DOMContentLoaded', function () {
    var timeEl = document.getElementById('t');
    var qEl = document.querySelector('.q');
    var optsEl = document.querySelector('.opts');
    var resEl = document.querySelector('.rs');
    var scrEl = document.getElementById('sc');
    var restartEl = document.querySelector('.rst-btn');
    function loadQ() {
        if (idx >= quiz.length) {
            endQ();
            return;
        }
        var qData = quiz[idx];
        qEl.textContent = qData.q;
        optsEl.innerHTML = '';
        qData.opts.forEach(function (opt, i) {
            var btn = document.createElement('button');
            btn.classList.add('opt');
            btn.textContent = "".concat(i + 1, ". ").concat(opt);
            btn.onclick = function () { return checkA(opt); };
            optsEl.appendChild(btn);
        });
    }
    function checkA(opt) {
        if (opt === quiz[idx].ans)
            scr++;
        idx++;
        loadQ();
    }
    function startT() {
        timer = window.setInterval(function () {
            time--;
            timeEl.textContent = time.toString();
            if (time <= 0)
                endQ();
        }, 1000);
    }
    function endQ() {
        clearInterval(timer);
        qEl.style.display = 'none';
        optsEl.style.display = 'none';
        resEl.style.display = 'block';
        scrEl.textContent = scr.toString();
        restartEl.style.display = 'block';
    }
    restartEl.addEventListener('click', function () {
        idx = 0;
        scr = 0;
        time = 30;
        timeEl.textContent = time.toString();
        qEl.style.display = 'block';
        optsEl.style.display = 'block';
        resEl.style.display = 'none';
        restartEl.style.display = 'none';
        loadQ();
        startT();
    });
    loadQ();
    startT();
});
