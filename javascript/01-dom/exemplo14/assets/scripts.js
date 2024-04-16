const plans = [
    { name: 'Básico', price: 0, description: 'Funcionalidades básicas' },
    { name: 'Pessoal', price: 9.99, description: 'Básico + Ferramentas avançadas' },
    { name: 'Profissional', price: 19.99, description: 'Pessoal + Suporte dedicado' },
    { name: 'Empresarial', price: 39.99, description: 'Pro + Armazenamento ilimitado' },
];

const listPlans = document.querySelectorAll(".box");
//console.log(listPlans[0]);
listPlans.forEach((divPlan,i) => {
    //console.log(plans[i]);
    divPlan.innerHTML = `
    <div class="name">${plans[i].name}</div>
        <div class="price">${plans[i].price}</div>
        <div class="description">${plans[i].description}</div>
    `;

    document.querySelectorAll(".box").forEach((div) => {
        if(div.classList.contains("active")){
            div.classList.remove("active");
        }
        div.addEventListener("click",() => {
            div.classList.add("active");
        });
    });

});
