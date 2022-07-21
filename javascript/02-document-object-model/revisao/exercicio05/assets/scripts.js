const item = document.querySelector("#item");
const btnInsert = document.querySelector("#btnInsert");
const btnShow = document.querySelector("#btnShow");
const vetItens = [];
const divList = document.querySelector("#list");

btnInsert.addEventListener("click",() => {
    vetItens.push(item.value);
    console.log(vetItens);
});

btnShow.addEventListener("click", () => {
    vetItens.forEach(function (e,i) {
         console.log(e + " " + i);
         divList.insertAdjacentHTML("afterbegin",`<li>${e}</li>`);
     });
});