
const grid = document.querySelector("#gridBlock");
setGrid(64);



function setGrid(value){
    i = 0;
    // k = (600-((1)*(value-1)))/value;
    k = 600/value;
    while(i<(value * value)){
        const square = document.createElement("div");
        square.classList.add("square");
        // square.textContent = i+1;
        grid.appendChild(square);
        console.log("Hello"+(2^2)+" "+k);
        i++;
        square.style.width=k+"px";
        square.style.height=k+"px";
        console.log(gridBlock.style.gap);
    }
}

