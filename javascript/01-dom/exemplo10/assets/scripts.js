


const list = document.querySelector("#list");
//list.innerHTML = "<li>1</li><li>2</li><li>3</li><li>3</li>";
for(let i = 0; i < 5; i++){
    const item = document.createElement("li");
    item.textContent = i;
    console.log(item);
    //list.insertAdjacentElement("beforeend",item);
    list.appendChild(item);
}