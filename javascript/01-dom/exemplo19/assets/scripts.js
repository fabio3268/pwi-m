




//document.querySelector("#text-box").setAttribute("disabled", true);

const checkBox = document.querySelector("#checkbox");
checkBox.addEventListener("change", () => {
    console.log(checkBox.checked);
    if(checkBox.checked) {
        document.querySelector("#text-box").setAttribute("disabled",true);
    } else {
        document.querySelector("#text-box").removeAttribute("disabled");
    }
});

