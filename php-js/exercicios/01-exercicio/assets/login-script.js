console.log("Olá");
const formUser = document.querySelector("form");
    formUser.addEventListener("submit",(event) => {
    event.preventDefault();
    const url = "api/user-login.php";
    const formData = new FormData(formUser);
    console.log(formData.get("password"));
    const options = {
      method : "post",
      body : formData
    };
    fetch(url,options).then((response) => {
        response.text().then((user) => {
            console.log(user);
        })
    });
});
