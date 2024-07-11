const studentsList = [
    {
        name: "John",
        grade: 8.5
    },
    {
        name: "Alice",
        grade: 9.2
    },
    {
        name: "Mike",
        grade: 7.8
    },
    {
        name: "Emily",
        grade: 9.0
    },
    {
        name: "Daniel",
        grade: 8.7
    },
    {
        name: "Sarah",
        grade: 9.5
    },
    {
        name: "Alex",
        grade: 8.1
    },
    {
        name: "Olivia",
        grade: 8.9
    },
    {
        name: "William",
        grade: 9.3
    },
    {
        name: "Sophia",
        grade: 8.8
    },
    {
        name: "Fábio",
        grade: 9.9
    }
];

studentsList.forEach((item) => {
    const tbody = document.querySelector("tbody");
    const row = document.createElement("tr");
    row.innerHTML = `<td>${item.name}</td><td>${item.grade}</td>`;
    tbody.appendChild(row);
});

const averegeButton = document.querySelector("#calculate-average");
averegeButton.addEventListener("click", () => {
    console.log("Média");
    let gradeSum = 0;
    let maxGrade = 0;
    let maxGradeIndex = -1;
    studentsList.forEach((item, index) => {
        gradeSum = gradeSum + item.grade;
        if(item.grade > maxGrade){
            maxGrade = item.grade;
            maxGradeIndex = index;
        }
    });
    console.log(gradeSum, studentsList.length, );
    const result = document.querySelector("#average-div");
    result.innerHTML = `
        <div>Média: ${gradeSum / studentsList.length}</div>
        <div>Aluno: ${studentsList[maxGradeIndex].name}</div>
        <div>Nota: ${studentsList[maxGradeIndex].grade}</div>
    `;
});
