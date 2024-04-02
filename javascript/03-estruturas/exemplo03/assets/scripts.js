



const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(var i = 0; i < numbers.length; i++){
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${i}</td><td>${numbers[i]}</td>`;
    document.querySelector("#tableBody").appendChild(tr);

}
const searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", () => {
    const searchInput = document.querySelector("#searchInput");
    console.log(`Vou Procurar => ${searchInput.value}`);
});

