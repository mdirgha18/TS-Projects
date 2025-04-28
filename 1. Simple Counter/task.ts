var counter = document.getElementById('counter') as HTMLDivElement;
var incrementBtn = document.getElementById('increment') as HTMLButtonElement;
var decrementBtn = document.getElementById('decrement') as HTMLButtonElement;
var resetBtn = document.getElementById('reset') as HTMLButtonElement;

var count = 0;

function updateCounter() {
    counter.textContent = count.toString();
}

incrementBtn.addEventListener('click', () => {
    count++;
    updateCounter();
});

decrementBtn.addEventListener('click', () => {
    if(count > 0) {
        count--;
        updateCounter();
    }
});

resetBtn.addEventListener('click', () => {
    count = 0;
    updateCounter();
});