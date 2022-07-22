let linha = document.querySelectorAll(".linha");
console.log(linha);

linha.forEach((e,i) => {
    e.innerHTML = `Linha: ${i + 10}`;
});