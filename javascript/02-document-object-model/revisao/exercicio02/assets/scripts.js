const name = document.querySelector("#name");
const sayHello = document.querySelector("#sayHello");
const result = document.querySelector("#result");

sayHello.addEventListener("click",() => {
    //alert("oi");
    //console.log(name.value);
    //result.innerHTML = "Olá, " + name.value + "!";
    result.innerHTML = `Olá, ${name.value}!`;
});