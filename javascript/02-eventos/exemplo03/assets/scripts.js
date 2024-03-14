


const buttonClick = document.querySelector("button");
const divCount = document.querySelector("div");
var count = 0;
buttonClick.addEventListener("click", () => {
    count++;
    divCount.textContent = `Contador: ${count}`;
    if(count % 2 == 0){
        buttonClick.textContent = "Click PAR";
    } else {
        buttonClick.textContent = "Click IMPAR";
    }
});