const container = document.getElementById("container");

function createGrid(x){
    for(let i=0; i<x*x; i++){
        const cells = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
        container.style.gridTemplateRows = `repeat(${x}, 1fr)`
        container.appendChild(cells).classList.add("box");
    }
}

createGrid(16)
const boxes = document.querySelectorAll(".box");


function draw(){
    boxes.forEach(function(box){
        box.addEventListener('mouseover', function(){
          box.style.backgroundColor = 'black';  
        })
    })
}


draw()



