



const body = document.querySelector("body");
const btnAdd = document.querySelector('#button-add');
const inputItem = document.querySelector('#input-item');
const ulItems = document.querySelector('#item-list');

body.addEventListener('click', (event) => {
    console.log("Oi do Body");
});

inputItem.addEventListener("click", (event) => {
    event.stopPropagation();
});

btnAdd.addEventListener('click', (event) => {
    console.log("Oi do Button");
    event.stopPropagation();
});

document.querySelector("#div01").addEventListener("click", () => {
    console.log("Oi div 01");
});

ulItems.addEventListener("click", (event) => {
    console.log(event.target.tagName);
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
    event.stopPropagation();
});

btnAdd.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON"){
        const liNewItem = document.createElement("li");
        liNewItem.textContent = inputItem.value;
        ulItems.insertAdjacentElement("beforeend", liNewItem);
    }
    event.stopPropagation();
});




/*
inputItem.addEventListener('click', (event) => {
   event.stopPropagation();
});

btnAdd.addEventListener('click', (event) => {
    if(event.target.tagName === "BUTTON"){
        const liNewItem = document.createElement("li");
        liNewItem.textContent = inputItem.value;
        ulItems.insertAdjacentElement("beforeend", liNewItem);
    }
    event.stopPropagation();
});

ulItems.addEventListener('click', (event) => {
    if(event.target.tagName === "LI"){
        event.target.remove();
    }
    //event.stopPropagation();
    //console.log("Oi da UL");
});

 */
