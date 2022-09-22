const gridSize = 16;

let selectedColor = "#000000";
let gridPixel = 100 / gridSize;

function buildGrid(gridSize) {    
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const yCurr = document.createElement('div');
            yCurr.classList.add("pixel");
            yCurr.setAttribute('style', `width: ${gridPixel}%; height: ${gridPixel}%`);
            gridWhole.appendChild(yCurr);
        }
    }
}

function startDrawing(e) {
    pixels.forEach(pixel => pixel.addEventListener('mousemove', changeColor));
    window.addEventListener('mouseup', stopDrawing);
}

function changeColor(e) {
    this.style.backgroundColor = selectedColor;
}

function stopDrawing(e) {
    pixels.forEach(pixel => pixel.removeEventListener('mousemove', changeColor));
    window.removeEventListener('mouseup', stopDrawing);
}

function resetBoard() {
    pixels.forEach(pixel => pixel.style.backgroundColor = "white");
}

function resetColor() {
    selectedColor = "#000000";
    colorPickerWrapper.style.backgroundColor = selectedColor;
}

function selectColor(e) {
    selectedColor = this.value;
    colorPickerWrapper.style.backgroundColor = selectedColor;
}

const gridWhole = document.querySelector(".board");

buildGrid(gridSize);

const pixels = document.querySelectorAll(".pixel");
const resetBoardButton = document.querySelector("#reset-board");
const resetColorButton = document.querySelector("#reset-color");
const colorPicker = document.querySelector("#color-picker");
const colorPickerWrapper = document.querySelector("#color-wrapper");

colorPicker.addEventListener('change', selectColor);

window.addEventListener('mousedown', startDrawing);
resetBoardButton.addEventListener('click', resetBoard);
resetColorButton.addEventListener('click', resetColor);