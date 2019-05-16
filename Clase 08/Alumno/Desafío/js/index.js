var newStudent = {
  firstName: 'Juan',
  lastName: 'Perez',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(newStudent) {
  var li = document.createElement('li')

  //var studentList = document.getElementById('mainList')(No hace falta porque todavia no lo tenemos que crear en el HTML
  )

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

var studentNode = createStudentNode(newStudent)

console.log(studentNode)
