var counter = document.getElementById('counter');
var incrementBtn = document.getElementById('increment');
var decrementBtn = document.getElementById('decrement');
var resetBtn = document.getElementById('reset');
var count = 0;
function updateCounter() {
    counter.textContent = count.toString();
}
incrementBtn.addEventListener('click', function () {
    count++;
    updateCounter();
});
decrementBtn.addEventListener('click', function () {
    if (count > 0) {
        count--;
        updateCounter();
    }
});
resetBtn.addEventListener('click', function () {
    count = 0;
    updateCounter();
});
