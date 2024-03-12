

// criação do
const myTitle = document.createElement("h1");
myTitle.textContent = "Disciplinas";
myTitle.setAttribute("id","title");
const body = document.querySelector("body");
console.log(myTitle);
body.insertAdjacentElement("afterbegin",myTitle);

