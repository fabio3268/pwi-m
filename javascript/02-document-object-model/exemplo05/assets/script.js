

document.querySelector('#title').innerHTML = 'Título da caixa';
document.querySelector('#box #title').innerHTML = 'Título da caixa';


for(let i = 1; i <= 3; i++){
    //document.querySelector('#content').innerHTML += "<li>Item " + i + "</li>";
    document.querySelector('#content').innerHTML += `<li>Item ${i}</li>`;
}
