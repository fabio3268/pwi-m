let area = document.querySelector("#area");
area.addEventListener("click",Clicar => {
    area.innerHTML = "<strong>Clicou!</strong>";
});
area.addEventListener("mouseenter",Entrar => {
    area.innerHTML = "<strong>Mouse entrou na DIV!</strong>";
});
area.addEventListener("mouseout",Sair => {
    area.innerHTML = "<strong>Mouse saiu da DIV</strong>";
});

//function Clicar(){
//    area.innerHTML = "<strong>Clicou!</strong>";
//}
//function Entrar (){
//    area.innerHTML = "<strong>Mouse entrou na DIV!</strong>";
//}

//function Sair(){
//    area.innerHTML = "<strong>Mouse saiu da DIV</strong>";
//}