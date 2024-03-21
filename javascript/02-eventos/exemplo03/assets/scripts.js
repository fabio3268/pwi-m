


const buttonClick = document.querySelector(".click");
const buttonReset = document.querySelector(".reset");

var count = 0;
buttonClick.addEventListener("click", () => {
    count++;
    document.querySelector("div").textContent = `Contador: ${count}`;
});

buttonReset.addEventListener("click", () => {
    count = 0;
    document.querySelector("div").textContent = `Contador: ${count}`;
});

