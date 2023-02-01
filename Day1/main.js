
const planet = [ 
   { name:"Earth" , moons:1},
   {name:"Mars" ,moons:0},
   {name:"venus", moons:0}];
   console.log("planet", planet);
 for (const planet of planets){

    const div = document.createElement("div")
    div.classList.add("planet")
  
 }
div.classList.add(planet.name.tolowerCase())

for (let i= 0; i < planet.moon; i++) {
const moondiv = document.createElement("div")
moondiv.classList.add("moon")
moondiv.style.left = i + 10 +"px" 
div.appendChild(moondiv)
    
}
const section = document.querySelector(".listplanets")
section?.appendChild(div)
    

 





