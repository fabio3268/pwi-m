



const numbers = [1,2,3,4,30,29,289,292,276];

for (var i = 0; i < numbers.length; i++){
    const divNumber = document.createElement("div");
    divNumber.textContent = numbers[i];
    if(numbers[i] % 2 == 0){
        divNumber.setAttribute("class","even");
        document.querySelector("#even").appendChild(divNumber);
    } else {
        divNumber.setAttribute("class","odd");
        document.querySelector("#odd").appendChild(divNumber);
    }
}