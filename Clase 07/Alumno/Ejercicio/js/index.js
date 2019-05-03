var testList = ['CARLOS', 'GERONIMO', 'NICOLAS', 'LUCAS']

setLocalList('studentsList', testList)

function setLocalList(key, array) {
  if (typeof key === 'string' && Array.isArray(array)) {
    var stringyTestList = JSON.stringify(array)

    localStorage.setItem(key, stringyTestList)
  }
}
