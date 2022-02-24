let inputName = document.getElementById("name");
let inputTel = document.getElementById("tel");
let contatsList = document.getElementById("contactsList");
 
function formSubmit() {
    if (!inputName.value || !inputTel.value) {
        return false;
    }

    if (formData = inputData()  ) {
    insertNew(formData); 
    return true;

    }
} 

let formData = [];

function inputData() {
    formData["name"] = inputName.value;
    formData["tel"] = inputTel.value;
  
    let dbContacts = { name: inputName.value, tel: inputTel.value } 

    formData.push(dbContacts);

    window.localStorage.setItem("Contatos", JSON.stringify(formData));
    document.querySelector('form').reset();

    return formData;
}

function insertNew(data) {
    let table = contatsList.getElementsByTagName('tbody')[0];
    let newRow = table.insertRow(table.length);
   cell1 = newRow.insertCell(0);
    cell1.innerHTML = 
    "<div class='item-contact'> <h3>" + data.name + "</h3>" + "<h4>" + data.tel + 
    "</h3>" + "</div>" + "<a onClick='deleteItem(this)'>Delete</a>";
}

function deleteItem(del) {
    let row = del.parentElement.parentElement;
    contatsList.deleteRow(row.rowIndex);
}
 
function closeX () {
    mesgError.classList.remove("active");
}