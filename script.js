
const grid = document.querySelector("#gridBlock");

setGrid(24);


function setGrid(value){
    i = 0;
    // k = (600-((1)*(value-1)))/value;
    k = 600/value;
    var isClicked = false;
    grid.draggable = false;
    while(i<(value * value)){
        const square = document.createElement("div");
        square.classList.add("square"+i);
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
            
        });

        square.addEventListener(("mouseover"), () => {
            if(isClicked==true){
                square.style.backgroundColor = "black";
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


