// const paragraph = document.createElement("p");
// const root = document.getElementById("root");
// paragraph.innerHTML = "salam";
// paragraph.classList = "test";

// root.appendChild(paragraph);

// document.body.appendChild(paragraph)

const root = document.getElementById("root");

const ul = document.createElement('ul')
const li = document.createElement('li')
const li2 = document.createElement('li')
const li3 = document.createElement('li')

li.innerHTML ="salam"
li2.innerHTML ="salam"
li3.innerHTML ="salam"

ul.classList = 'cl'
li.classList = 'cl'
li2.classList = 'cl'
li3.classList = 'cl'

ul.appendChild(li)
ul.appendChild(li2)
ul.appendChild(li3)

root.appendChild(ul)