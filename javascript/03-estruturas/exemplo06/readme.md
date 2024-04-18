# Exemplo 06
## Descrição do Exercício
O exercício consiste em criar um formulário de inscrição de funcionários, onde cada funcionário tem um nome, email e senha. Os dados do funcionário são armazenados em um objeto JavaScript e adicionados a uma lista de usuários.
````javascript
const employeeList = [];

const employee = {
        name : "",
        email : "",
        password : ""
    };
````
Ao lado de cada funcionário deve aparecer um botão para exclusão, quando pressionado o usuário deve sumir tanto da tabela quanto da lista de objetos.