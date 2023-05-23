const tasksList = [
    {
        description: "Fazer compras",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Limpar a casa",
        status: "Concluída",
        creationDate: "01/05"
    },
    {
        description: "Estudar para o exame",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Enviar relatório",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Fazer exercícios físicos",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Ler um livro",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Resolver problemas de matemática",
        status: "Pendente",
        creationDate: "01/05"
    },
    {
        description: "Preparar a apresentação",
        status: "Pendente",
        creationDate: "02/05"
    },
    {
        description: "Organizar os documentos",
        status: "Pendente",
        creationDate: "02/05"
    },
    {
        description: "Agendar reunião",
        status: "Pendente",
        creationDate: "02/05"
    }
];

const divTasks = document.querySelector("#task-list");

for (let i in tasksList){
    console.log(tasksList[i].description, tasksList[i].status);
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
