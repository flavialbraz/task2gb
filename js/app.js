const contatsList = document.getElementById("contactsList");
const form = document.getElementById("formSave");
const currentContact = JSON.parse(localStorage.getItem("Contacts")) || []  
 
currentContact.forEach( (element) => {    
  createContact(element)
})
 
form.addEventListener('submit', (event) => {
    event.preventDefault()
  
    const name = event.target.elements['name']
    const tel = event.target.elements['tel']

    const exist = currentContact.find( element => element.name === name.value )  

    const ObjContact = {
      "name": name.value,
      "tel": tel.value
   }


   if ( exist ) {
    ObjContact.id = exist.id  
    msgExists()
    currentContact[itens.findIndex(element => element.id === exist.id)] = ObjContact

   } else {
    
    ObjContact.id = currentContact[currentContact.length -1] ? (currentContact[currentContact.length-1]).id + 1 : 0;
    
    createContact(ObjContact)
    currentContact.push(ObjContact)
  }

  localStorage.setItem("Contacts", JSON.stringify(currentContact))
    form.reset()
})

function createContact (item) { 
  const newItem = document.createElement('li')
  const nameItem = document.createElement('h3')
  const telItem = document.createElement('h4')
  
  nameItem.innerHTML = item.name
  newItem.appendChild(nameItem)
 
  telItem.innerHTML = item.tel
  newItem.appendChild(telItem)

  newItem.appendChild(botaoDeleta(item.id))

  contatsList.appendChild(newItem) 
}
 

 function msgExists () {
  const errormsg =  document.getElementById("alreadyexists")
  errormsg.classList.add('active')
 
  setTimeout(function(){
    errormsg.classList.remove('active') 
    }, 2400);

 }

 function botaoDeleta(id) {
    const elementBtn = document.createElement("button")
    elementBtn.innerText = "X"

    elementBtn.addEventListener("click", function() {
        deleteElement(this.parentNode, id)
    })
    return elementBtn
}
 
 function deleteElement(tag, id) {
  tag.remove()
  currentContact.splice(currentContact.findIndex(element => element.id === id), 1)
  localStorage.setItem("Contacts", JSON.stringify(currentContact))
}
