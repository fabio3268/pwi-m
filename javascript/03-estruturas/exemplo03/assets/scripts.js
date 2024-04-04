



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i = 0; i < numbers.length; i++){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i}</td><td>${numbers[i]}</td>`;
    document.querySelector("#tableBody").appendChild(tr);

}

const searchInput = document.querySelector("#searchInput");
const searchButton = document.querySelector("#searchButton");
const message = document.querySelector(".message");

searchButton.addEventListener("click", () => {
    //console.log(`Vou buscar ${searchInput.value}`);
    var result = numbers.indexOf(parseInt(searchInput.value));

    if(result == -1) {
        message.textContent = "Número não encontrado";
    } else {
        message.textContent = `Número encontrado na posição ${result}`;
    }

});

console.log(numbers.indexOf(100));


