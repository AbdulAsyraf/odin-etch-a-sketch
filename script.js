const gridSize = 16;
let gridPixel = 100 / gridSize;

function buildGrid(gridSize) {
    const gridWhole = document.querySelector(".board");
    console.log(gridWhole);
    
    for (let x = 0; x < gridSize; x++) {
        for (let y = 0; y < gridSize; y++) {
            const yCurr = document.createElement('div');
            yCurr.classList.add("pixel");
            yCurr.setAttribute('style', `width: ${gridPixel}%; height: ${gridPixel}%`);
            gridWhole.appendChild(yCurr);
        }
    }
}

function changeColor(e) {
    if (this.style.backgroundColor === "white"){
        this.style.backgroundColor = "black";
    }else {
        this.style.backgroundColor = "white";
    }
}

buildGrid(gridSize);

const pixels = document.querySelectorAll(".pixel");

pixels.forEach(pixel => pixel.addEventListener('click', changeColor));