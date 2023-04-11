



var r = 1;
const PI = Math.PI;
var a = PI * Math.pow(r, 2);
console.log(a);

function areaCircle(r) {
    const PI = Math.PI;
    var a = PI * Math.pow(r,2);
    return a;
}

console.log("Área do Circulo: " + areaCircle(5));

function circumferenceCircle(r){
    const PI = Math.PI;
    var circumference = 2 * PI * r;
    return circumference;
}

console.log("Circunferência: " + circumferenceCircle(2));
