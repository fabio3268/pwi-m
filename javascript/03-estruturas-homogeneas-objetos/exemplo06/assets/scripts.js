





const pessoa = {
    nome: 'Fulano',
    sobrenome: 'Silva',
    idade: 19,
    salario: 2345.67,
};

//console.log(pessoa.nome);
//onsole.log(pessoa.sobrenome);

let str = '';
for (let key in pessoa) {
    console.log(key);
    const value = pessoa[key];
    console.log(value);
    str += `<div>
        <span>Chave: ${key}</span>
        <span>Valor: ${value}</span>
    </div>`;
}
console.log(str);
document.body.innerHTML = str;
