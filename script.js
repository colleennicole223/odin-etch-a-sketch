
const grid = document.querySelector("#gridBlock");
const color = document.querySelector("#colorSelection")
const gridSize = document.querySelector("#gridSize")

// Create the grid of squares 🔮
updateGrid(16,color.value);

// select all of the squares 
let squares = document.querySelectorAll('square');

// when the color picked is changed, update the listeners 🔊 for each square with new color 🎨
color.addEventListener("input", () =>{
    var isClicked = false;
    squares.forEach(square => {
        square.addEventListener(("mousedown"), () => {
            isClicked = true;
            square.style.backgroundColor = color.value;
        });
        square.addEventListener(("mouseover"), () => {
            if(isClicked==true){
                square.style.backgroundColor = color.value;
            }
        });
        square.addEventListener(("mouseup"), () => {
            isClicked = false;
        });
        grid.addEventListener("mouseleave", () => {
            isClicked = false;
        });
    });
})

// when grid size is changed, remove the previous grid and replace with new size
gridSize.addEventListener("change", () =>{
    squares.forEach(square =>{
        grid.removeChild(square);
    });
    console.log("Updated grid size to: "+gridSize.value);
    updateGrid(gridSize.value, color.value);
    squares = document.querySelectorAll('square');
})

// Functions ------------------------------------------------------------------------


// Grid creation and inital square color listeners 🔊
function updateGrid(value,color){
    i = 0;
    // k = (600-((1)*(value-1)))/value;
    k = 600/value;
    var isClicked = false;
    grid.draggable = false;

    while(i<(value * value)){
        const square = document.createElement("square");
        square.classList.add("square");
        grid.appendChild(square);
        i++;
        square.style.width=k+"px";
        square.style.height=k+"px";
        square.style.backgroundColor = "white"
        square.draggable = false;
        // square.addEventListener("click", () => {
        //     square.style.backgroundColor = "black"
        // });

        // square.addEventListener("mouseover", () => {
        //     square.style.backgroundColor = "black"
        // });

        square.addEventListener(("mousedown"), () => {
            isClicked = true;
            square.style.backgroundColor = color;
        });
        square.addEventListener(("mouseover"), () => {
            if(isClicked==true){
                square.style.backgroundColor = color;
            }
        });
        square.addEventListener(("mouseup"), () => {
            isClicked = false;
        });
        grid.addEventListener("mouseleave", () => {
            isClicked = false;
        });

    }
    
}



