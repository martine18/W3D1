
const button = getButton()
button.addEventlistener("click", handleClick)



function handleClick(e){
    e.preventDefault()
const noun = document.getElementById("noun")
const adjective = document.getElementById("adjective")
const person = document.getElementById("person")
const verb = document.getElementById("verb")
const place = document.getElementById("place")

if(noun == "" || adjective == "" || person == "" || verb == "" || place == "" ) return

const story = writestory(noun,adjective,person,verb,place)

}

function writestory(noun,adjective,person,verb,place) {
    return ` i like to look at ${noun}s, I think that are ${adjective}.my favorite persone is $(person
      we aften ${verb} together when we are in ${place}  )`
}



function getButton() {
    return document.getElementById("lib-button")
}







