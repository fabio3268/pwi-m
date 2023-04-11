var value = 2.9567;
console.log(Math.round(value));
console.log(Math.floor(value));
console.log(Math.ceil(value));
console.log(Math.random());

function sum (x, y){
    var total = Number(x) + Number(y);
    console.log(total);
}

sum(10,5);

function sumReturn (x, y){
    var total = Number(x) + Number(y);
    return total;
}
var soma = sumReturn(4,6);
console.log(soma);
