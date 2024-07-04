


let studentsArray = [];

const buttonSubmit = document.querySelector("#submit");
buttonSubmit.addEventListener("click", () => {
    const studentObj = {
        name: document.querySelector("#name").value,
        subject: document.querySelector("#subject").value,
        grade: document.querySelector("#grade").value
    };
    studentsArray.push(studentObj);
    console.table(studentsArray);
    const listStudents = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${studentObj.name}</td>
                     <td>${studentObj.subject}</td>
                     <td>${studentObj.grade}</td>
                     <td><button>Excluir</button></td>`;
    listStudents.appendChild(row);
});

document.querySelector("tbody").addEventListener("click", (event) => {
    if(event.target.tagName == "BUTTON") {
        const deleteStudent = event.target.parentElement.parentElement.children[0].textContent;
        console.log(deleteStudent);
        // excluir da lista de objetos
        event.target.parentElement.parentElement.remove();
    }
});

