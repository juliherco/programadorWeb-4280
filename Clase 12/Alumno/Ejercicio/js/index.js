console.log('Init Tic Tac Toe')
// Creo una para saber quien juega (si es true circulo si es false cruz)
var player = true

// Busco todos los nodos con la clase square en el DOM
var squareNodes = $('.square')

// Les agrego a cada uno la función squareClick en el evento click
squareNodes.click(squareClick)

/**
 * squareClick es una función que agrega la clase circle o cross según
 * corresponda y alterna el turno para cambiar de jugador
 * @param { HTMLEvent } event
 */
function squareClick(event) {
  var squareNode = $(this) //Identifica donde está clickeando

  if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
    //Esta parte es para que agregue cruz o circulo SÓLO si el cuadrado no tiene ni la clase circulo ni la cruz, osea que está vacío - el hasClass se preugnta si tiene la clase que pusimos entre parentesis, true or false
    if (player) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('cross')
    }

    player = !player //En cualquiera de las dos jugadas cambio la variable player (si esta en true va a ser false, y viceversa)
  }
}
