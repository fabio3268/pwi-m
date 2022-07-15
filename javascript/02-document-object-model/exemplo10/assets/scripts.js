const myDiv = document.createElement('div');

myDiv.innerHTML = "<h1 id='title'>Disciplinas</h1>";
console.log(myDiv);
document.body.insertAdjacentElement('beforeend', myDiv);