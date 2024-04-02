

const teams = [
    "Internacional",
    "Grêmio",
    "Juventude",
    "Caxias",
    "Brasil de Pelotas",
    "Ipiranga",
    "Avenida",
    "Aimoré"
];

for (var i = 0; i < teams.length; i++){
    const divTeam = document.createElement("div");
    divTeam.textContent = teams[i];
    divTeam.setAttribute("class","teams");
    document.querySelector("body").appendChild(divTeam);
}

