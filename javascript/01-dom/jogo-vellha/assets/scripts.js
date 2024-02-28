const board = document.querySelector("#board");
let play = "X";

board.addEventListener("click", (event) => {
    console.log(event.target);
    if(event.target.classList.contains("cell")){
        event.target.textContent = play;
        //play = play === "X" ? "O" : "X";
        if(play === 'X'){
            play = 'O';
        } else {
            play = 'X';
        }
    }
});
