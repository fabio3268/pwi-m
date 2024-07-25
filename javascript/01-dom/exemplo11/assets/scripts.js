

const divList = document.querySelectorAll("div");
console.log(divList);
divList.forEach((element) => {
    console.log(element);
    element.textContent = "- " + element.textContent;
});

document.querySelector("#red").addEventListener("click", () => {
    divList.forEach((element) => {
        element.classList = "red";
    });
});

document.querySelector("#blue").addEventListener("click", () => {
    divList.forEach((element) => {
        element.classList = "blue";
    });
});

