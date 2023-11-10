import {showDataSelect} from "./functions.js";

const categoryListSelect = document.querySelector("#category");
const urlCategoriesList = "../api/categories-list.php";
fetch(urlCategoriesList).then((response) => {
    response.json().then((categoriesList) => {
        //console.log(categoriesList);
        showDataSelect(categoriesList,categoryListSelect);
    });
});

categoryListSelect.addEventListener("change", () => {
    const query = new URLSearchParams({
        categoryId: categoryListSelect.value
    }).toString();
    const urlBooksByCategory = `../api/books-by-category.php?${query}`;
    console.log(urlBooksByCategory);
    fetch(urlBooksByCategory).then((response) => {
        response.json().then((books) => {
            //console.log(books);
            const bookList = document.querySelector("#bookList");
            bookList.innerHTML = "";
            books.forEach((book) => {
                console.log(book.title)
                const tr = document.createElement("tr");
                tr.setAttribute("book-id", book.id)
                tr.innerHTML = `<td>${book.id}</td>
                                <td>${book.title}</td>
                                <td>${book.price}</td>
                                <td><button>X</button></td>`;
                bookList.appendChild(tr);
            });


        })
    });
});

const tableBooks = document.querySelector("table");

// Seletor para a modal
const modal = document.querySelector("#edit-modal");

// Seletor para o botão de fechar a modal
const closeModalButton = document.querySelector(".close");

// Seletor para o formulário de edição
const editForm = document.querySelector("#edit-form");

// Função para abrir a modal com dados do produto (vai receber por parâmetro o id do produto)
function openModal() {
    modal.style.display = "block";
}

// Fechar a modal ao clicar no botão de fechar
closeModalButton.addEventListener("click", () => {
    modal.style.display = "none";
});

// Fechar a modal quando o usuário clicar fora dela
window.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
