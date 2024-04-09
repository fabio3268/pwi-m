



var report = [
    [9,7,6.5],
    [9.8,9,8.5]
];

//report[1][2] = 10;

//console.log(report[1][2]);
console.table(report);

/*for(let c = 0; c <= 2; c++){
    console.log(report[0][c]);
}

for(let c = 0; c <= 2; c++){
    console.log(report[1][c]);
}*/


/*for(let c = 0; c <= 2; c++){
    for(let l = 0; l <= 1; l++){
        console.log(report[l][c]);
    }
}*/

const rowFirst = document.querySelector("#first");
const rowSecond = document.querySelector("#second");

for(let c = 0; c <= 2; c++){
    for (let l = 0; l <= 1; l++){
        console.log(report[l][c]);
        const td = document.createElement("td");
        td.textContent = report[l][c]; // c=0 c=1 c=2
        if(l == 0) {
            rowFirst.append(td);
        } else {
            rowSecond.append(td);
        }
    }
}

/*
for(let c = 0; c <= 2; c++){
    console.log(report[1][c]);
    const td = document.createElement("td");
    td.textContent = report[1][c]; // c=0 c=1 c=2
    rowSecond.append(td);
}*/
