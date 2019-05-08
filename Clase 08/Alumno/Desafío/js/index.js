var newStudent = {
  firstName: 'Juan',
  lastName: 'Peréz',
  dni: 22999333,
  email: 'juan@gmail.com'
}

function createStudentNode(newStudent) {
  var studentList = document.getElementById('mainList')

  var li = document.createElement('li')
  li.innerHTML =
    '<h1>' +
    newStudent.firstName +
    ' ' +
    newStudent.lastName +
    '</h1><h3>DNI: ' +
    newStudent.dni +
    '</h3><p>E-mail: ' +
    newStudent.email +
    '</p>'
  li.className = 'list-group-item'
  li.id = newStudent.dni
  studentList.appendChild(li)
}

var studentNode = createStudentNode(newStudent)
