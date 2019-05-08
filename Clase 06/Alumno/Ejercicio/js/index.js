var numbers = [1, 2, 3, 4, 5]

function deleteElement(index, array) {
  var arrayCopy = array.slice() //El slice sin ningún parámetro me va a copiar el array que yo le pase completo

  arrayCopy.splice(index, 1) //El slice elimina elementos del array, desde el index(posición que yo le pase) y hasta cuantos lugares (en este caso 1 porque quiero eliminar esa posición sola)

  return arrayCopy
}

var newNumbers = deleteElement(2, numbers)
console.log(numbers)

console.log(newNumbers)
