const gCont = document.querySelector<HTMLDivElement>(".grid");
const gSize = document.querySelector<HTMLInputElement>('.sz');
const gColor = document.querySelector<HTMLInputElement>('.clr');
const gReset = document.querySelector<HTMLButtonElement>('.btn');

if (!gCont || !gSize || !gColor || !gReset) {
    throw new Error("Missing required DOM elements");
}

let gridSize: number = parseInt(gSize.value);
let isDrawing: boolean = false;

function createGrid(): void {
    gCont!.style.setProperty("--sz", gridSize.toString());
    gCont!.innerHTML = "";

    for (let i = 0; i < gridSize * gridSize; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.addEventListener('mouseenter', () => paintCell(cell));
        cell.addEventListener('mousedown', () => clickCell(cell));
        gCont!.appendChild(cell);
    }
}

function paintCell(cell: HTMLDivElement): void {
    if (!isDrawing)
        return;
    cell.style.backgroundColor = gColor!.value;
}

function clickCell(cell: HTMLDivElement): void {
    cell.style.backgroundColor = gColor!.value;
}

window.addEventListener('mousedown', () => {
    isDrawing = true;
})

window.addEventListener('mouseup', () => {
    isDrawing = false;
});

function resetGrid(): void {
    createGrid();
}

gReset.addEventListener('click', resetGrid);
gSize.addEventListener('change', () => {
    gridSize = parseInt(gSize.value);
    resetGrid();
});

createGrid();

