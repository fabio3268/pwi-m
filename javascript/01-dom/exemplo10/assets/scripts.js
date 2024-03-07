


const myElement = document.createElement("div");
myElement.innerHTML = "<span>Programação Web I</span>";
console.log(myElement);

const myLi = document.createElement("li");
myLi.textContent = "Programação WEB I";
console.log(myLi);
document.querySelector("#list").insertAdjacentElement("afterbegin",myLi);