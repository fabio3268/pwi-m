const insertName = document.querySelector("#insertName");
const insertBtn = document.querySelector("#insertBtn");
const searchName = document.querySelector("#searchName");
const searchBtn = document.querySelector("#searchBtn");
const result = document.querySelector("#result");
const vetNames = [];

insertBtn.addEventListener("click", () => {
    console.log(insertName.value);
    vetNames.push(insertName.value);
    console.log(vetNames);
});

searchBtn.addEventListener("click", () => {
    console.log(searchName.value);
    if(vetNames.indexOf(searchName.value) === -1){
        console.log("Não Achei!");
        result.innerHTML = "Não Achei!";
    } else {
        console.log("Achei!");
        result.innerHTML = "Achei!";
    }
});