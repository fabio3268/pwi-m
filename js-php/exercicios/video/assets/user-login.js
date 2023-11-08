
const form = document.querySelector("#form-user-login");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const url = "api/user-login.php";
    const options = {
        method: "post",
        body: new FormData(form)
    };

    fetch(url, options).then((response) => {
        response.json().then((data) => {
            //console.log(data.user.name);
            const message = document.querySelector("#message");
            message.textContent = data.message;
            if(data.type == "success"){
                setTimeout(() => {
                    window.location.href = "app";
                }, 3000);
            }
        });
    });
});

