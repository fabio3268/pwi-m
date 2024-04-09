

const myList = document.querySelector("#myList");

myList.addEventListener("click", (element) => {
    console.log(element.target.tagName);
    if (element.target.tagName == "BUTTON"){
        console.log("Apaga o item");
        console.log(element.target.parentElement);
        element.target.parentElement.remove();
    }
});



