


const listNumber = Number(window.prompt("Quantos itens na lista: "));
var i = 0;
for(i = 1; i <= listNumber; i++) {
    const newItem = document.createElement("li");
    newItem.textContent = window.prompt("Informe o Item:");
    document.querySelector("#list").insertAdjacentElement("afterbegin",newItem);
}
