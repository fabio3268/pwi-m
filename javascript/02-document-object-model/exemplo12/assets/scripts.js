const divItem = document.querySelectorAll(".item");
console.log(divItem);

//for (let i = 0; i < divItem.length; i++){
//    console.log(divItem[i]);
//}

divItem.forEach(mostraItem);

function mostraItem (item, index, array){
   item.innerHTML = `${index} - Teste`;
   console.log(`${index} -  ${item.innerHTML}`);
   //console.log(array);
}

//definindo um vetor normal
vet = [12,24,36,51,55];
console.log(vet);

vet.forEach(Mostra);

function Mostra (item, index,array){
    console.log(`${index} - Conteúdo ${item}`);
    array[index] += 1;
}

console.log(vet);