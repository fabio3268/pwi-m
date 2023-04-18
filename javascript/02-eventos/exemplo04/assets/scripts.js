const input01 = document.querySelector("#n1");
const input02 = document.querySelector("#n2");
const result = document.querySelector("#result");

function write (){
    result.textContent = `${input01.value * input02.value}`;
}

input01.addEventListener("input",write);
input02.addEventListener("input",write);
console.log(input01.value);
