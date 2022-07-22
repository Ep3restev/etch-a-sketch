const container = document.getElementById("container_box");
let slider = document.getElementById("grid_value");
const buttons = document.querySelectorAll(".color_button");

let color; // saves color.


//Change color.
buttons.forEach(function(color_button){
    color_button.addEventListener("click", function(e){
        const classChecker = e.currentTarget.classList;
        console.log(classChecker)
        if(classChecker.contains("black")){
           color = "black"
        }else if(classChecker.contains("random")){
            color = "red"
        }       
    })
})

function createGrid(x){
    for(let i=0; i<x*x; i++){
        const cells = document.createElement("div");
        container.style.gridTemplateColumns = `repeat(${x}, 1fr)`
        container.style.gridTemplateRows = `repeat(${x}, 1fr)`
        container.appendChild(cells).classList.add("box");
    }
    document.querySelectorAll(".box").forEach(function(box){
        box.addEventListener('mouseover', function(){
          box.style.backgroundColor = color;  
          console.log(color)
        })
    })
}
createGrid(2)


function changeGrid(){
    let box = container.querySelectorAll(".box");
    box.forEach(boxes => boxes.remove());
    createGrid(slider.value);
}




