
//sectionc1//



setTimeout(alertHello, 2000)
setTimeout(addParagraph, 2000)
const interval = setInterval(addParagraph,2000)


function alertHello() {
    alert("hello world!")
}

function addParagraph(){
    const p = document.createElement("p")
    p.textContent = "hello world"
    const container = document.getElementsById("container")
if (container.children.length < 5){
    container.appendChild(p)

}else {
    clearparagraphInterval()
}
}
const button = document.getElementById("clear")
button.addEventListener("click", clearparagraphInterval)

function clearparagraphInterval(){
    clearInterval(interval)
}



//section2//

let distance = 0
let Interval 

function myMove(){
    interval = setInterval(moveRedSquare, 1)
}

function moveRedSquare() {
    const WIDTH_OF_CONTAINER = 400
    const WIDTH_OF_SQUARE = 50
    if(distance === WIDTH_OF_CONTAINER - WIDTH_OF_SQUARE) return clearInterval(interval)
    distance = distance + 1
    const redSquare = document.getElementById("animated")
    redSquare.style.left = distance + "px"
}






//section3//

const yellowBox = document.getElementById("target");
const redBox = document.getElementById("box")

yellowBox.addEventListener("drop",handleDrop)
yellowBox.addEventListener("dragover",allowDrop)

function dragStart() {
    console.log("dragStart:");
}

function allowDrop(event) {
    console.log("event",event);
    yellowBox.classList.add("is-hovered");
}

function handleDrop(event) {
    console.log("handleDrop:");
    yellowBox.classList.remove("is-hovered");

}

























