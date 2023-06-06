




document.querySelectorAll("li").forEach((item) => {
    item.addEventListener("click", () => {
        document.querySelectorAll("li").forEach((item) => {
            if(item.classList.contains("active")){
                item.classList.remove("active");
            }
        });
        item.classList.add("active");
    })
})
