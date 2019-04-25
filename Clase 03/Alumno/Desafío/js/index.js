var operation = prompt('Ingrese la operación sum, res, mul o div')

var parametro1 = prompt('Ingresá el primer parámetro')

var parsedNumber1 = parseFloat(parametro1, 10)

var parametro2
var parsedNumber2

do {
  parametro2 = prompt('Ingresá el segundo parámetro')
  parsedNumber2 = parseFloat(parametro2, 10)
} while (operation === 'div' && parsedNumber2 === 0)

var result

switch (operation) {
  case 'sum':
    result = parsedNumber1 + parsedNumber2
    break
  case 'res':
    result = parsedNumber1 - parsedNumber2
    break
  case 'mul':
    result = parsedNumber1 * parsedNumber2
    break
  case 'div':
    result = parsedNumber1 / parsedNumber2
    break
  default:
    result = 'Operación incorrecta'
    break
}
 
var message='El resultado de la ' + operation+' es '+result

console.log(message)


