





function isPrime(x){
    var i;
    var prime;
    for (i = 2; i < x; i++){
        if(x % i == 0){
            return "Não Primo!";
        }
    }
    return "Eh Primo!";
}
console.log(isPrime(937));
