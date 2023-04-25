



const item = document.querySelector("#item");
const myButtonInsert = document.querySelector("#myButtonInsert");
const myList = document.querySelector("#myList");

function insertItem(){
    const newItem = document.createElement("li");
    newItem.textContent = item.value;
    console.log(newItem);
    myList.insertAdjacentElement("afterbegin",newItem);
}

myButtonInsert.addEventListener("click", insertItem);
