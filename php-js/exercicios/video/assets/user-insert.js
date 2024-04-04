const form = document.querySelector("#form-user-insert");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = "api/user-insert.php";
    const options = {
        method: "post",
        body: new FormData(form)
    };

    fetch(url, options).then((response) => {
        response.json().then((user) => {
            console.log(user);
        });
    });

} );