



const myArray = [1,2,3,4,30,29,289,292,276];
console.table(myArray);

for (let i in myArray){
    if(myArray[i] % 2 == 0){
        console.log(i, myArray[i]);
    }
}

