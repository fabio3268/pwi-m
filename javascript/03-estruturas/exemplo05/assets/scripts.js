

const employee = {
    name : "Fábio Santos",
    email : "fabiosantos@ifsul.edu.br",
    password : "12345678"
};
/*console.table(employee);
console.log(employee.name);
console.log(employee.email);
console.log(employee.password);*/

const employee02 = employee;
employee02.name = "João da Silva";
//console.table(employee);
/*
employee.name = "João da Silva";
console.table(employee02);
*/

/*const field = prompt("Selecione o campo de empregado: ");
console.log(field);

if(!employee[field]){
    console.log("Esse campo não existe");
} else {
    console.log(`${field} : ${employee[field]}`);
}*/

console.log(Object.keys(employee));
console.log(Object.values(employee));
console.table(Object.entries(employee));

let str = '';
for (let key in employee) {
    const value = employee[key];
    console.log(key, value);
    str += `<div>
        <span>Chave: ${key}</span>
        <span>Valor: ${value}</span>
    </div>`;
}
document.body.innerHTML = str;
