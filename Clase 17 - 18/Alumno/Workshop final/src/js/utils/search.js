/**
 * searchStudentIndexByText permite buscar la posición de un estudiante en el array,
 * comparando nombre o apellido por valor exacto
 * @param {string} text nombre del estudiante
 * @param {Array} studentsList Array de estudiantes
 * @returns {number} posición del estudiante en el Array, si no lo encuentra -1
 */

function searchPersonIndexById(id, peopleList) {
  var index = -1
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    var personId = person.url.split('/')[5]
    if (personId === id) {
      index = i
      break
    }
  }
  return index
}

function searchIndexByUrl(url, peopleList) {
  for (var i = 0; i < peopleList.length; i++) {
    var person = peopleList[i]
    if (url === person.url) {
      return i
    }
  }

  return -1
}

export { searchPersonIndexById, searchIndexByUrl }
