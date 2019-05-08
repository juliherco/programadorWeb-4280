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

var studentsList = getLocalList('studentsList')

if (studentsList) {
  console.log(studentsList)
  if (studentsList.length) {
    console.log('Tiene guardados ' + studentsList.length + ' estudiantes')
  } else {
    console.log('La lista esta vacía')
  }
} else {
  console.log('Le pasó una key incorrecta')
}
