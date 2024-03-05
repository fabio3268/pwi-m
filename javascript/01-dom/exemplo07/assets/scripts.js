

const name = window.prompt("Informe seu nome:");
const age = Number(window.prompt("Informe sua idade"));
console.log(name);
console.log(age);
//document.querySelector("#content").textContent =
//    "Olá, " + name + "! Bem-vindo!";
document.querySelector("#content").textContent =
    `Olá, ${name}! Sua idade é ${age}.`;

document.querySelector("#content").textContent =
    `Olá, ${name}! Sua idade mais 4 é ${age + 4}.`;