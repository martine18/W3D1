
generateColors()
let currentColor
listenerMain()
let isMousePressed = false

function listenerMain() {
    const main = document.getElementById("main")
    main.addEventListener("mousedown", handleClick)
    main.addEventListener("mousemove", handleMove)
    main.addEventListener("mouseup", handleMouseRelease)

}
function handleMouseRelease(){
    isMousePressed = false
}

function handleClick() {
    if (currentColor == null) return
    isMousePressed = true
}

function handleMove(e){
if (isMousePressed) return 
console.log("coordinates:" , e-x, e-y)
const hoveredDiv = document.elementsFromPoint(e.x,e.y)
hoveredDiv.style.backgroundColor = currentColor
}


function generateColors() {
    const colorDivs = document.querySelectorAll(".color")
    for(const colorDiv of colorDivs) {
        const randomColor = generateColors()
        colorDiv.style.backgroundColor = randomColor
        colorDiv.dataset.color = randomColor
        colorDiv.addEventListener("click", setCurrentColor)
    }
}

function generateColors(){
    const hex = Math.floor(Math.random() * 16777215).toString(16)
    return "#" + hex
}

function setCurrentColor(e) {
   currentColor = e.target.dataset.color
   currentColor = chosenColor
   const button = document.querySelector(".clear button")
   button.style.backgroundColor = chosenColor
}











