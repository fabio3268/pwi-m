



let arrayNumbers = [];
let randonNumber;

for(let i = 0; i <= 99; i++){
    randonNumber = Math.floor((Math.random() * 100));
    console.log(randonNumber);
    arrayNumbers.push(randonNumber);
}

console.table(arrayNumbers);
