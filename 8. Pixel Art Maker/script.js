var gCont = document.querySelector(".grid");
var gSize = document.querySelector('.sz');
var gColor = document.querySelector('.clr');
var gReset = document.querySelector('.btn');
if (!gCont || !gSize || !gColor || !gReset) {
    throw new Error("Missing required DOM elements");
}
var gridSize = parseInt(gSize.value);
var isDrawing = false;
function createGrid() {
    gCont.style.setProperty("--sz", gridSize.toString());
    gCont.innerHTML = "";
    var _loop_1 = function (i) {
        var cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseenter', function () { return paintCell(cell); });
        cell.addEventListener('mousedown', function () { return clickCell(cell); });
        gCont.appendChild(cell);
    };
    for (var i = 0; i < gridSize * gridSize; i++) {
        _loop_1(i);
    }
}
function paintCell(cell) {
    if (!isDrawing)
        return;
    cell.style.backgroundColor = gColor.value;
}
function clickCell(cell) {
    cell.style.backgroundColor = gColor.value;
}
window.addEventListener('mousedown', function () {
    isDrawing = true;
});
window.addEventListener('mouseup', function () {
    isDrawing = false;
});
function resetGrid() {
    createGrid();
}
gReset.addEventListener('click', resetGrid);
gSize.addEventListener('change', function () {
    gridSize = parseInt(gSize.value);
    resetGrid();
});
createGrid();
