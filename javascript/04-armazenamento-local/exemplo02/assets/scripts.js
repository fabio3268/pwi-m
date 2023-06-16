let users = [];
const user = {
    name : "",
    email : "",
    password : ""
};
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("Gravando na LocalStorage");
    if(localStorage.getItem("users")){
        users = JSON.parse(localStorage.getItem("users"));
    }
    user.name = document.querySelector("#name").value;
    user.email = document.querySelector("#email").value;
    user.password = document.querySelector("#password").value;
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));
    console.log(localStorage.getItem("users"));
});
//localStorage.clear();
//console.log(localStorage.getItem("users"));
