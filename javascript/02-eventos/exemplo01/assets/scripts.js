let cont = 0;
const button = document.querySelector("button");
const div = document.querySelector("div");

function editButton (){
    button.textContent = "Fábio Santos";
}
function disableButton (){
    button.remove();
}
function countClick (){
    cont++;
    button.textContent = `Você clicou ${cont} vezes!`;
    div.textContent = `Contador: ${cont}`;
}

button.addEventListener("click",countClick);
//button.addEventListener("mouseenter",disableButton);
