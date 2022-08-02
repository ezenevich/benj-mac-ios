let btnAdd = document.querySelector('button');
let table = document.querySelector('table');

let nameInput = document.querySelector('#name');
let surnameInput = document.querySelector('#surname');
let ageInput = document.querySelector('#age');

btnAdd.addEventListener('click', (event) => addTableRow(event));
table.addEventListener('click', (event) => delTableRow(event));

const addTableRow = (event) => {
    event.preventDefault();
    let name = nameInput.value;
    let surname = surnameInput.value;
    let age = ageInput.value;
    let template = `
                <tr class="trow">
                    <td>${name}</td>
                    <td>${surname}</td>
                    <td>${age}</td>
                    <td><button id="click" class="button">delete</button></td>
                </tr>`;
    table.innerHTML += template;
    // Очищение полей, добавить кнопку
}

function delTableRow(event) {
    if (!event.target.classList.contains("button")) {
        return;
    }
    const btn = event.target;
    btn.closest("tr").remove();
}