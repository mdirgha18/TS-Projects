interface QData {
    q: string;
    opts: string[];
    ans: string;
}

const quiz: QData[] = [
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

let idx = 0, scr = 0, time = 30, timer: number;

document.addEventListener('DOMContentLoaded', () => {
    const timeEl = document.getElementById('t') as HTMLElement;
    const qEl = document.querySelector('.q') as HTMLElement;
    const optsEl = document.querySelector('.opts') as HTMLElement;
    const resEl = document.querySelector('.rs') as HTMLElement;
    const scrEl = document.getElementById('sc') as HTMLElement;
    const restartEl = document.querySelector('.rst-btn') as HTMLButtonElement;

    function loadQ(): void {
        if (idx >= quiz.length) {
            endQ();
            return;
        }

        const qData = quiz[idx];
        qEl.textContent = qData.q;
        optsEl.innerHTML = '';

        qData.opts.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.classList.add('opt');
            btn.textContent = `${i + 1}. ${opt}`;
            btn.onclick = () => checkA(opt);
            optsEl.appendChild(btn);
        });
    }

    function checkA(opt: string): void {
        if (opt === quiz[idx].ans) scr++;
        idx++;
        loadQ();
    }

    function startT(): void {
        timer = window.setInterval(() => {
            time--;
            timeEl.textContent = time.toString();
            if (time <= 0) endQ();
        }, 1000);
    }

    function endQ(): void {
        clearInterval(timer);
        qEl.style.display = 'none';
        optsEl.style.display = 'none';
        resEl.style.display = 'block';
        scrEl.textContent = scr.toString();
        restartEl.style.display = 'block';
    }

    restartEl.addEventListener('click', () => {
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
