
const grid = document.querySelector("#gridBlock");
const color = document.querySelector("#colorSelection")
const gridSize = document.querySelector("#gridSize")
const drawSelection = document.querySelectorAll('#drawingMethod');
const penSelection = document.querySelectorAll('#penMethod');

// Initilize variables 📃
let draw = "clickDrag";
let pen = "normal";
let isClicked = false;

// Create the grid of squares 🔮
updateGrid(16, color.value, draw, pen);

// select all of the newly created squares 
let squares = document.querySelectorAll('square');

// when the color picked is changed, update the listeners 🔊 for each square with new color 🎨
color.addEventListener("change", () =>{
    squares.forEach(square => {
        updateListener(square, color.value, draw, pen);
    });
})

drawSelection.forEach(selection => {
    selection.addEventListener("change", () => {
        isClicked = false;
        squares.forEach(square => {
            updateListener(square, color.value, selection.value, pen);
        });
        console.log("Drawing method updated, draw = "+selection.value);
    })
})

penSelection.forEach(selection => {
    selection.addEventListener("change", () => {
        pen = selection.value;
        squares.forEach(square => {
            updateListener(square, color.value, draw, selection.value);
        });
        console.log("Pen method updated, pen = "+selection.value);
    })
})

// when grid size is changed, remove the previous grid and replace with new size
gridSize.addEventListener("change", () =>{
    squares.forEach(square =>{
        grid.removeChild(square);
    });
    console.log("Updated grid size to: "+gridSize.value);
    updateGrid(gridSize.value, color.value, draw, pen);
    squares = document.querySelectorAll('square');
})


// Functions ------------------------------------------------------------------------


// Grid creation and inital square color listeners 🔊
function updateGrid(value, color, draw, pen){
    i = 0;
    k = 600/value;

    while(i<(value * value)){
        const square = document.createElement("square");
        square.setAttribute('draggable', 'false');
        square.classList.add("square");
        grid.appendChild(square);
        i++;
        square.style.width=k+"px";
        square.style.height=k+"px";
        square.style.backgroundColor = "white"
        square.style.opacity = 1;
        updateListener(square, color, draw, pen);
    }
}

function updateOpacity(square, pen){
    if(pen == "shader"){
        if(square.style.opacity > 0.3){
            square.style.opacity -= 0.025;
        }
    }else{
        square.style.opacity = 1;
    }
}

function updateListener(square, color, drawInput, penInput){
    pen = penInput;
    draw = drawInput;
    
    square.addEventListener(("mousedown"), () => {
        if(draw == "clickDrag"){
            isClicked = true;
            square.style.backgroundColor = color;
            updateOpacity(square, pen);
        }
    });

    square.addEventListener(("mouseover"), () => {
        if(isClicked == true){
            square.style.backgroundColor = color;
            console.log("hovering while clicked is true");
            updateOpacity(square, pen);
        }else if(isClicked == false && draw == "hover"){
            square.style.backgroundColor = color;
            console.log("hovering while clicked is false but hover is true");
            updateOpacity(square, pen);
        }
    });

    square.addEventListener(("mouseup"), () => {
        if(draw == "clickDrag"){
            isClicked = false;
            updateOpacity(square, pen);
        }
    });

    grid.addEventListener("mouseleave", () => {
        if(draw == "clickDrag"){
            isClicked = false;
        }
    });
}
