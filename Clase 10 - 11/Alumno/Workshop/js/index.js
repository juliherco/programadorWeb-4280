console.log('Primer workshop')

//Me creo un array vacío en el scope global para que después la podamos usar.
//Busco si hay algo en el LS y si no hay me devuelve un array vacío-- FUENTE DE VERDAD!
var studentsList = getLocalList('list')

//Busco el campo nombre y DNI en el DOM y lo traigo a JS
var firstNameInput = document.getElementById('firstName')
var dniInput = document.getElementById('dni')
var deleteDni = document.getElementById('deleteDni')
var addStudentButton = document.getElementById('addStudentButton')
var mainListNode = document.getElementById('mainList')

//Carga inicial de los elementos en el DOM
for (var i = 0; i < studentsList.length; i++) {
  var student = studentsList[i]
  var liStudent = createStudentNode(student)
  mainListNode.appendChild(liStudent)
}

//Respondo al evento onblur con la funcion que valida el campo nombre y DNI
firstNameInput.onblur = validateRequired
dniInput.onblur = validateDni

//Con el botón validado, llamo a la función que agrega el estudiante
addStudentButton.onclick = addStudent

deleteStudentButton.onclick = deleteStudent

function deleteStudent() {
  //Busco el valor en el input a eliminar
  var dniValue = deleteDniInput.value
//TODO!!! SEGUIR LA FUNCION

function addStudent() {
  //levanto los valores ya validados del form
  var firstNameValue = firstNameInput.value
  var dniValue = dniInput.value

  //creo un objeto estudiante local
  var student = {
    firstName: firstNameValue,
    dni: dniValue
  }

  //Agrego el estudiante en memoria (LS)
  studentsList.push(student)

  //Agrego el estudiante en el DOM
  var liStudent = createStudentNode(student)

  //Agrego el nodo a la lista
  mainListNode.appendChild(liStudent)

  //Actualizo la info del LS con la info en memoria
  setLocalList('list', studentsList)

  //Limpiamos el formulario una vez que lo agrega al LS
  firstNameInput.value = ''
  dniInput.value = ''

  //vuelvo a deshabilitar el botón
  addStudentButton.disabled = true

  //Saco las clases válidas
  firstNameInput.classList.remove('is-valid')
  dniInput.classList.remove('is-valid')
}

function validateRequired(event) {
  var inputNode = event.target //target es la propiedad, y event es un nombre generico, puedo poner cualquier cosa. Me avisa en qué campo el usuario hizo click o escribió algo. Me guardo esto en la var inputNode para ver exactamente en qué elemento fue que el usuario hizo algo

  var value = inputNode.value //Busco qué valor tenía el nodo en ese momento

  if (!value) {
    //caso invalido
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    //caso válido
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateAddButton()
}

function validateDni(event) {
  var inputNode = event.target
  var value = inputNode.value

  var parsedValue = parseInt(value, 10) //Trato de convertir a número

  //verifico si existe el DNI en los datos guardados en local Storage
  //TODO: Hay que terminar de validar esto

  var dniExists = false
  if (searchStudentIndexByDni(value, studentsList) !== -1) {
    dniExists = true
  }

  if (!value || isNaN(parsedValue) || parsedValue <= 0 || dniExists) {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  } else {
    //caso válido
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
  validateAddButton()
}

//Función para validar si todos los campos son validos y habilitar el boton
function validateAddButton() {
  var validInputs = document.getElementsByClassName('is-valid') //Busco todos los campos válidos

  if (validInputs.length !== 2) {
    //como tengo 2 campos, me tengo que fijar que los campos válidos que encuentra sean todos (osea 2) para habilitar el botón
    addStudentButton.disabled = true
  } else {
    addStudentButton.disabled = false
  }
}

function setLocalList(key, list) {
  if (typeof key === 'string' && Array.isArray(list)) {
    var stringyTestList = JSON.stringify(list)

    localStorage.setItem(key, stringyTestList)
  }
}

function getLocalList(key) {
  if (typeof key === 'string') {
    var localList = localStorage.getItem(key)
    if (localList) {
      var parsedLocalList = JSON.parse(localList)
      return parsedLocalList
    } else {
      return []
    }
  }
}

function createStudentNode(newStudent) {
  var li = document.createElement('li')

  var fullName = ''

  if (newStudent.firstName && newStudent.lastName) {
    fullName = newStudent.firstName + ' ' + newStudent.lastName
  } else if (newStudent.firstName) {
    fullName = newStudent.firstName
  } else if (newStudent.lastName) {
    fullName = newStudent.lastName
  }

  li.innerHTML =
    '<h1>' +
    fullName +
    '</h1><h3>DNI: ' +
    newStudent.dni +
    '</h3><p>E-mail: ' +
    newStudent.email +
    '</p>'
  li.className = 'list-group-item'
  li.id = newStudent.dni
  return li
}

function searchStudentIndexByDni(dni, studentsList) {
  var index = -1
  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dnis) {
      index = i
      break
    }
  }
  return index
}
