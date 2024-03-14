
const buttonClick = document.querySelector("button");
var count = 0;
buttonClick.addEventListener("click", () => {
    buttonClick.textContent = "Fui clicado!";
    count++;
    console.log(count);
    document.querySelector("div").textContent = `Contador: ${count}`;
});
buttonClick.addEventListener("mouseenter", () => {
    buttonClick.textContent = "Ponteiro do mouse entrou na DIV!";
});

buttonClick.addEventListener("mouseleave", () => {
    buttonClick.textContent = "Ponteiro do mouse saiu na DIV!";
});