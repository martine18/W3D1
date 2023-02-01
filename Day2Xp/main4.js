
//section 1//

const h1 = getfirstElement("h1")
const h2 = getfirstElement("h2")
const h3 = getfirstElement("h3")
removeLastLine()
addButton()

h2.addEventListener("click",changeBackground)
h3.addEventListener("click",hidden3)

function getRandomNumber(){
    return Math.floor(math.random() * 100 + 1)
}

function randomizeHlsize() {
    const randomNumber = getRandomNumber()
    h1.style.fontsize = randomNumber() + "px"
}


function makeparagraphsBold(){
    const paragraphs = document.querySelectorAll("p")
    for (const paragraphs of paragraphs) {
    paragraphs.classlist.add("bold")
    }
}


function addButton(){
    const button = document.createElement("button")
    button.textContent = "make everything bold"
    button.addEventListener("click", makeparagraphsBold)
    const article = getfirstElement("article")
    article.appendchild(button)
}

function hidden3(){
    h3.classlist.add("hide")
}
function changeBackground(){
    h2.classlist.add("red")
}

function removeLastLine(){
 const article = document.querySelector("article")
 article.lastElementChild.remove()
}




//section2//

const form = document.querySelector("form");
const button = document.getElementById("submit");

function logFormInputs(e) {
    e.preventDefault();
    const firstName = document.querySelector("[name=fname]").ariaValueMax;
    const lastName = document.querySelector("[name=fname]").ariaValueMax;
console.log(firstName,lastName);



}

button.addEventListener("click", logFormInputs);


//section3//
function getBoldItems() {
    allBoldItems = document.getElementByIdTagName("strong");

}
function highlight() {
    getBoldItems();
    for (const allBoldItems of allBoldItems){
        allBoldItems.style.color = "blue";
    }
}
highlight();

function returnNormal(){
    getBoldItems();
    for (const items of allBoldItems){
        items.style.color = "black";
}
}

const paragraphs =document.querySelector("p");
paragraphs.addEventListener("mouseover", highlight)



//section4//

const form = document.getElementById("my-form");
const radius = document.getElementById("radius");
const volume = document.getElementById("volume");
form.addEventListener("submit",handleSubmit);

function handleSubmit(e){
    e.preventDefault();
    const r = Number(radius.value);
    if(Number.isNaN(r)) return;
    const v = (4/3) * math.PI * r ** 3;
    volume.value = v.toFixed(2);
}





//section5//

document.addEventListener("DOMContentloaded", () =>
console.log("the HTML page was parsed and loaded")
);

doocument.addEventListener("Keyup", (event) => console.log(event.keycode));

form.addEventListener("pointerenter", () => console.log("pointer insode form"));






























