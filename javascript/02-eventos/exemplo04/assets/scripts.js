


const value01 = document.querySelector("#n1");
const value02 = document.querySelector("#n2");
const result = document.querySelector("#result");
function bind () {
    var product = parseInt(value01.value) * parseInt(value02.value);
    if(isNaN(product)) {
        result.textContent = "Erro!";
    } else {
        result.textContent = product;
    }
}
value01.addEventListener("input", bind);
value02.addEventListener("input", bind);