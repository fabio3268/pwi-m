


const myTitle = document.createElement("h1"); // criação do h1
myTitle.textContent = "Disciplinas"; // conteúdo do h1
myTitle.setAttribute("id","title"); // inclui o atributo id no h1
const body = document.querySelector("body"); // seleciona o body
console.log(myTitle);
body.insertAdjacentElement("afterbegin",myTitle); // insere h1 no body


const myDiv = document.createElement("div");
myDiv.setAttribute("id","box");
console.log(myDiv);
body.insertAdjacentElement("beforeend",myDiv);

const spanTitle = document.createElement("span");
spanTitle.setAttribute("id","title");
spanTitle.textContent = "Informática";
const spanContent = document.createElement("span");
spanContent.setAttribute("id","content");

myDiv.insertAdjacentElement("beforeend",spanContent);
myDiv.insertAdjacentElement("afterbegin",spanTitle)
console.log(myDiv);

const ul = document.createElement("ul");
ul.setAttribute("id","list");
const li01 = document.createElement("li");
const li02 = document.createElement("li");
const li03 = document.createElement("li");

li01.textContent = "LPWI";
li02.textContent = "LPWII";
li03.textContent = "Banco de Dados";

ul.insertAdjacentElement("beforeend",li01);
ul.insertAdjacentElement("beforeend",li02);
ul.insertAdjacentElement("beforeend",li03);

spanContent.insertAdjacentElement("afterbegin",ul);