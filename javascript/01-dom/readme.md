# Manipulação do Document Object Model (DOM) em JavaScript
Este repositório contém exemplos de manipulação do DOM usando JavaScript, como parte da disciplina de Programação Web I de um curso técnico em informática de nível médio.

## Tópicos abordados
- `document.querySelector`
- `innerHTML`
- `innerText`
- `textContent`
- Interpolação de strings com "`" e utilização de `${}`
- `.remove()`
- `createElement()`
- `insertAdjacentHTML`
- `insertAdjacentElement`
- `appendChild`

## Exemplos

### document.querySelector
O método `document.querySelector` retorna o primeiro elemento dentro do documento que corresponde ao grupo especificado de seletores.

```javascript
let title = document.querySelector('#title');
```
### innerHTML
A propriedade innerHTML define ou retorna o conteúdo HTML de um elemento.

````javascript
title.innerHTML = '<h2>Novo Título</h2>';
````

### innerText
A propriedade innerText define ou retorna o conteúdo de texto de um nó e de seus descendentes.

````javascript
title.innerText = 'Novo Título';
````
### textContent
A propriedade textContent define ou retorna o conteúdo de texto de um nó e de seus descendentes.

````javascript
title.textContent = 'Novo Título';
````
### Interpolação de strings com \` (crase) e utilização de \`${}\`
A interpolação de strings é uma forma de concatenar strings com variáveis de forma mais legível.

````javascript
let name = 'Fulano';
let age = 30;
title.textContent = `Nome: ${name}, Idade: ${age}`;
````
### .remove()
O método `remove()` remove o nó do DOM.

````javascript
let element = document.querySelector('#element');
element.remove();
````
### createElement()
O método `createElement()` cria um novo elemento HTML.

````javascript
let newElement = document.createElement('div');
newElement.textContent = 'Novo Elemento';
````

### insertAdjacentElement
O método `insertAdjacentElement()` insere um elemento em uma posição especificada em relação ao elemento de referência. Ele aceita dois parâmetros:

1. `position`: Uma string que especifica a posição em relação ao elemento de referência. As opções possíveis são:
   - `'beforebegin'`: O novo elemento é inserido antes do elemento de referência.
   - `'afterbegin'`: O novo elemento é inserido no início do elemento de referência, tornando-se o primeiro filho.
   - `'beforeend'`: O novo elemento é inserido no final do elemento de referência, tornando-se o último filho.
   - `'afterend'`: O novo elemento é inserido após o elemento de referência.

2. `element`: O elemento a ser inserido.

Exemplo de uso:

```javascript
let newElement = document.createElement('div');
let referenceElement = document.querySelector('#element');
referenceElement.insertAdjacentElement('beforeend', newElement);
```

### insertAdjacentHTML
O método `insertAdjacentHTML()` insere um texto HTML especificado em relação ao elemento especificado.

````javascript
let element = document.querySelector('#element');
element.insertAdjacentHTML('beforeend', '<p>Novo Parágrafo</p>');
````

### appendChild
O método `appendChild()` adiciona um nó ao final da lista de filhos de um nó pai especificado.

````javascript
let parentElement = document.querySelector('#parentElement');
let newElement = document.createElement('div');
newElement.textContent = 'Novo Elemento';
parentElement.appendChild(newElement);
````