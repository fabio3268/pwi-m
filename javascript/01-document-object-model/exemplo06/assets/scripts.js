//var newSubject;
var subject;
var limit;

limit = window.prompt("Quantas Disciplinas");

for(var i = 0; i < limit; i++){
    subject = window.prompt("Digite uma Disciplina");
    //document.querySelector("#list").innerHTML =
    //    document.querySelector("#list").innerHTML + `<li>${subject}</li>`;
    document.querySelector("#list").innerHTML += `<li>${subject}</li>`;
}

