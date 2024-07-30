

let contPlayer = 1;
const listCells = document.querySelectorAll(".cell");
console.log(listCells);
listCells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if(contPlayer % 2 != 0){
            cell.innerHTML = "X";
        } else {
            cell.innerHTML = "O";
        }
        contPlayer++;
    });
});