var examResults = [ 7, 5, 6, 4, 3, 2, 8 ]
var result = sumResults(examResults)

console.log('El promedio de los resultados de los examenes es ' + result)

function sumResults (resultsArray) {
  var total = 0
  var exams
  for (var i = 0; i < resultsArray.length; i++) {
    exams = resultsArray[i]
    total = (total + exams)
  }
  total = total / resultsArray.length
  return total
}