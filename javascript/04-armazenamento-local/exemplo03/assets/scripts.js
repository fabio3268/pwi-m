const body = document.querySelector("body");
const btnAdd = document.querySelector('#button-add');
const inputItem = document.querySelector('#input-item');
const ulItems = document.querySelector('#item-list');

body.addEventListener('click', (event) => {
    console.log("Oi do Body");
});

btnAdd.addEventListener('click', (event) => {
    console.log("Oi do Button");
});


