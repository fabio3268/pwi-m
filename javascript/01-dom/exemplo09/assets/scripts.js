


const mySpan = document.querySelector("#box #title");
console.log(mySpan);
mySpan.insertAdjacentHTML("beforebegin", "<span class='red'>Antes do começo</span>");
mySpan.insertAdjacentHTML("afterbegin", "<span class='red'>Depois do começo</span>");
mySpan.insertAdjacentHTML("beforeend", "<span class='red'>Antes do fim</span>");
mySpan.insertAdjacentHTML("afterend", "<span class='red'>Depois do fim</span>");

