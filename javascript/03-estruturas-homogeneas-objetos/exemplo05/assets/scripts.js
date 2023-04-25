



let myArray = [30,29,289,292,276];
console.table(myArray);
function sum (e,i,arr) {
    //console.log(i,e);
    //console.log(arr);
    //e++;
    if(arr[i] % 2 == 0){
        arr[i]++;
    } else {
        arr[i] = e + 2;
    }
}
myArray.forEach(sum);
console.table(myArray);

