
const body = document.getElementsByTagName("body")[0];
const input = document.createElement("input");


body.appendChild(input)

input.setAttribute("type","text");

input.addEventListener("keypress",key);

function key(event) {
    const letters = /[a-z]/i.test(event.key);
    if(!letters) {
        null;
    }

else {
    event.preventDefault();
}

}


















