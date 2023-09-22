console.log("Olá");

const url = "api/user-list.php";
const options = {
    method : "get"
}

fetch(url,options).then((response) => {
    response.json().then((users) => {
        const tbody = document.querySelector("tbody");
        users.forEach((user) => {
            console.log(user);
            const tr = document.createElement("tr");
            tr.innerHTML = `
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
            `;
            tbody.appendChild(tr);
        });

    });
});
