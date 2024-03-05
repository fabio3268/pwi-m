


const listNumber = Number(window.prompt("Quantos itens na lista: "));
var i = 0;
for(i = 1; i <= listNumber; i++) {
    document.querySelector("#list").innerHTML +=
        `<li>Item ${i}</li>`;
}

