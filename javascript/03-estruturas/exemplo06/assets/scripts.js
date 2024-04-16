

let employee = {
    name : "Fábio Santos",
    email : "fabiosantos@ifsul.edu.br",
    password : "12345678"
};

const employeeList = [];
employeeList.push(employee);
console.table(employeeList);
employee.name = "João da Silva";
employee.email = "joao@gmail.com";
employee.password = "9876543";
employeeList.push(employee);
/*employeeList.push(employee);
employeeList.push(employee);*/
console.table(employeeList);

const buttonSend = document.querySelector("button");
buttonSend.addEventListener("click", () => {
    const employee = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    };

    employeeList.push(employee);
    console.table(employeeList);
});
