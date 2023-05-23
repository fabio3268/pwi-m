const divTasks = document.querySelector("#task-list");

function listTaskCreator (){
    for (let i in tasksList){
        //console.log(tasksList[i].description, tasksList[i].status);
        let divTask = document.createElement("div");
        divTask.setAttribute("class","task");
        divTask.innerHTML = `
        <span class="status">${tasksList[i].status}</span>
        <span class="description">${tasksList[i].description}</span>
    `;
        let buttonDelete = document.createElement("button");
        buttonDelete.setAttribute("class","delete-btn");
        divTasks.insertAdjacentElement("beforeend",divTask);
        buttonDelete.textContent = "Excluir";
        buttonDelete.addEventListener("click", () => {
            buttonDelete.parentElement.remove();
        });
        divTask.insertAdjacentElement("beforeend",buttonDelete);
    }
}

listTaskCreator();

const buttonInsert = document.querySelector("#add-task-btn");

function insertTask (){
    const description = document.querySelector("#task-description");
    const status = document.querySelector("#task-status");
    let taskObj = {
        description: description.value,
        status: status.value,
        creationDate: "26/05"
    };
    tasksList.push(taskObj);
    divTasks.innerHTML = "";
    listTaskCreator();
    console.table(tasksList);
}

buttonInsert.addEventListener("click",insertTask);
