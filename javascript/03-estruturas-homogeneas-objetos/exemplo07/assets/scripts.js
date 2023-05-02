





const employeesArrayObj = [
    {
        name: 'Fábio',
        lastName: 'Silva',
        age: 19,
        salary: 2345.67
    },
    {
        name: 'José',
        lastName: 'Santos',
        age: 20,
        salary: 2345.67
    },
    {
        name: 'Maria',
        lastName: 'Oliveira',
        age: 21,
        salary: 2345.67
    }
];
//console.log(employeesArrayObj);

function peopleShow (people){
    console.log(people.name);
    console.log(people.age);
    let div =  document.createElement("div");
    let spanName = document.createElement("span");
    spanName.textContent = people.name;
    let spanAge = document.createElement("span");
    spanAge.textContent = people.age;
    div.insertAdjacentElement("afterbegin",spanAge);
    div.insertAdjacentElement("afterbegin",spanName);
    document.querySelector("body").insertAdjacentElement("afterbegin",div);
}

employeesArrayObj.forEach(peopleShow);






