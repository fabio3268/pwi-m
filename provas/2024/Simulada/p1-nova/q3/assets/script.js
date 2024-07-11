let studentsList = [];

const addButton = document.querySelector("#add");
const oldestButton = document.querySelector("#oldest");

addButton.addEventListener("click", () => {
    let student = {
        name : document.querySelector("#name").value,
        age: document.querySelector("#age").value
    }
    studentsList.push(student);
    console.log(studentsList);
});

oldestButton.addEventListener("click", () => {
    const result = document.querySelector("#result");
    let oldest = 0;
    let oldestIndex = -1;
    studentsList.forEach((item, index, array) => {
        console.log(item,index);
        if(Number(item.age) > Number(oldest)) {
            oldestIndex = index;
            oldest = item.age;
        }
    });

    result.textContent = `${studentsList[oldestIndex].name} - ${studentsList[oldestIndex].age}`;

});