var myLi =  document.createElement("li");
myLi.textContent = "A";
console.log(myLi);
var myList = document.querySelector("#list");
myList.insertAdjacentElement("afterbegin",myLi);
