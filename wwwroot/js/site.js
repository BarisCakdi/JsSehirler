let cities = [];
function addRecord(citi) {
    cities.push(citi);
    render();
}

function render() {
    sehirTablo.innerHTML = '';
    citiFood.innerHTML = '';
    citiHistory.innerHTML = '';
    citiPlate2.innerHTML = '';
    citiPlate1.innerHTML = '';

    for (let citi of cities) {
        sehirTablo.innerHTML += `
        <tr>
        <td>${citi.isim}</td>
        <td>${citi.tip}</td>
        <td>${citi.meshur}</td>
        <td>${citi.plaka}</td>
        <td><button class="btn btn-danger deleteBtn ">Sil</button></td>
        </tr>
        `
        if (citi.tip === "yemek") {
            citiFood.innerHTML += `
        <td>${citi.isim}</td>
        <td>${citi.meshur}</td>
        <td><button class="btn btn-danger deleteBtn ">Sil</button></td>
        `;
        }
        if (citi.tip === "tarih") {
            citiHistory.innerHTML += `
        <td>${citi.isim}</td>
        <td>${citi.meshur}</td>
        <td><button class="btn btn-danger deleteBtn ">Sil</button></td>
        `;
        }
        if (citi.plaka % 2 == 0) {
            citiPlate2.innerHTML += `
        <td>${citi.isim}</td>
        <td>${citi.plaka}</td>
        <td><button class="btn btn-danger deleteBtn ">Sil</button></td>
        `;
        } else {
            citiPlate1.innerHTML += `
        <td>${citi.isim}</td>
        <td>${citi.plaka}</td>
        <td><button class="btn btn-danger deleteBtn ">Sil</button></td>
        `;
        }
    }
    bindEvents();
}

sehirForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    let formData = new FormData(sehirForm);
    let formObj = Object.fromEntries(formData);
    addRecord(formObj);
    sehirForm.reset();
}


function bindEvents() {
    let deleteBtns = document.querySelectorAll('.deleteBtn');
    for (let btn of deleteBtns) {
        btn.addEventListener('click', deleteRow);
    }
}
bindEvents();

function deleteRow() {
    if (confirm('Eminmisin')) {
        this.parentElement.parentElement.remove();
    }
}