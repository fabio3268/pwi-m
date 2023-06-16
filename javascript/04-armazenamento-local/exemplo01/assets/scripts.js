





/*localStorage.setItem('chave1', 'valor1');
localStorage.setItem('chave2', 'valor2');*/

//localStorage.removeItem("chave1");
/*localStorage.clear();

const chave1 = localStorage.getItem('chave1');
const chave2 = localStorage.getItem('chave2');
console.log(chave1, chave2);*/

const studentsList = [
    {
        name: "John",
        grade: 8.5
    },
    {
        name: "Alice",
        grade: 9.2
    },
    {
        name: "Mike",
        grade: 7.8
    },
    {
        name: "Emily",
        grade: 9.0
    },
    {
        name: "Daniel",
        grade: 8.7
    },
    {
        name: "Sarah",
        grade: 9.5
    },
    {
        name: "Alex",
        grade: 8.1
    },
    {
        name: "Olivia",
        grade: 8.9
    },
    {
        name: "William",
        grade: 9.3
    },
    {
        name: "Sophia",
        grade: 8.8
    }
];

//console.log(JSON.stringify(studentsList));

const studentsString = JSON.stringify(studentsList);
//console.log(studentsString);
//localStorage.setItem("students",studentsString);
const studentsList02 = JSON.parse(studentsString);
//console.log(studentsList02);
console.log(localStorage.getItem("students"));
