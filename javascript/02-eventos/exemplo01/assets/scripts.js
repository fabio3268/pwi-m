
const buttonClick = document.querySelector("button");

buttonClick.addEventListener("click", () => {
    buttonClick.textContent = "Fui clicado!";
});
buttonClick.addEventListener("mouseenter", () => {
    buttonClick.textContent = "Ponteiro do mouse entrou na DIV!";
});