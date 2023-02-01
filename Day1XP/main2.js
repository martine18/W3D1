t
//Exercise 1 : Users

const container = document.getElementById("container")

document.querySelector(".list").children[1].textContent = "Richard"

const lists = document.querySelectorAll(".list")
lists.forEach(list => list.firstElementChild.textContent = "Ben")

lists[1].children[1].remove()

lists.forEach(lists => list.children.add("student_List"))


//Exercise 2 : Users And Style

const div =document.querySelector("div")
console.log(div.style)

const divbackground = getComputedStyle(div).backgroundColor
if (divbackground === "rgb(173, 216, 230") {
    console.log("this is lightblue")
}





// Excercise 3: Change The Navbar

const Navbar = document.getElementById("navbar");
console.log("navbar:", navbar)

navbar.setAttribute("id","socialNetworkNavigation")

const li = document.createElement("li")
console.log("li:", li)

const ul = navbar.firstElementChild
ul.appendchild(li)


const firstil = ul.firstElementChild
const lastil = ul.lastElementChild

console.log("firstli:", firstil)
console.log("lastli:", lastil)

// Excercise 4: My book list


const book1 = {
title: "marry potter",
author: "kim kardashian",
image: "https://picsum.photos/200",
alreadyRead : false
}

const book2 = {
    title: "marry potter",
    author: "kim kardashian",
    image: "https://picsum.photos/200",
    alreadyRead : false
    }
 allBooks.push(book1,book2)
 console.log("allBooks:", allBooks)   

const table =document.createElementNS("table")
table.innerHTML = `
<thead>
<tr>
<th colspan="3">my book lists</th>
</tr>

</thead>
<tbody>
<tr>
<td> ${book1.title} written by ${book1.author}</td>

<td>
<img src="${book1.image}">
</td>
<td>alreadyrea:${book1.alreadyRead}</td>
</tr>
</tbody>
`
const booklistdiv = document.querySelector("list-books")
booklistdiv.appendChild(table)














