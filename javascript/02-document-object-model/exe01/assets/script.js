const myH1 = document.createElement("h1");
myH1.innerHTML = "Solicitar número de itens";
myH1.id = "title";
console.log(myH1);
document.body.insertAdjacentElement("afterbegin",myH1);

const myDiv = document.createElement("div");
myDiv.id = "box";
console.log(myDiv);
myH1.insertAdjacentElement("afterend",myDiv);

const mySpan = document.createElement("span");
mySpan.innerHTML = "Lista Itens";
mySpan.id = "title";
console.log(mySpan);

myDiv.insertAdjacentElement("afterbegin",mySpan);

const nro = window.prompt("Digite valor: ");
for(let i = 0; i < nro; i++){
    mySpan.insertAdjacentHTML("afterend",`<li id="content">${nro - i} - Item</li>`);
}

//const myLi01 = document.createElement("li");
//myLi01.innerHTML = "Item 1";
//myLi01.id = "content";
//console.log(myLi01);
//mySpan.insertAdjacentElement("afterend",myLi01);