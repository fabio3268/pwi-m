
const employeeList = [];
const buttonSend = document.querySelector("button");
const listEmployees = document.querySelector(".list-employees");

buttonSend.addEventListener("click", () => {
    const employee = {
        name : document.querySelector("#name").value,
        email : document.querySelector("#email").value,
        password : document.querySelector("#password").value
    };

    employeeList.push(employee);
    console.table(employeeList);
    // limpa a lista
    listEmployees.innerHTML = "";

    employeeList.forEach((value,index) => {
        //console.log("Executei para cada elemento");
        console.log(value.name, value.email,index);
        const divEmployee = document.createElement("div");
        //divEmployee.setAttribute("class","employee");
        divEmployee.classList.add("employee");
        divEmployee.innerHTML = `
        <span>${index}</span>
        <span>${value.name}</span>
        <span>${value.email}</span>
        <span>${value.password}</span>
        <span><button>Excluir</button></span>
    `;
        listEmployees.appendChild(divEmployee);
    });
});

listEmployees.addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON"){
        console.log(event.target.parentElement.parentElement);
        event.target.parentElement.parentElement.remove();
    }
});