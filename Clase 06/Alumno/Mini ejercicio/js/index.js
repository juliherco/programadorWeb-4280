var text = 'El amor juega a inventarse, huye de sí mismo para volver en su espiral sobrecogedora, los senos cantan de otro modo, la boca besa más profundamente o como de lejos, y en un momento donde antes había como cólera y angustia es ahora el juego puro, el retozo increíble, o al revés, a la hora en que antes se caía en el sueño, el balbuceo de dulces cosas tontas, ahora hay una tensión, algo incomunicado pero presente que exige incorporarse, algo como una rabia insaciable. Sólo el placer en su aletazo último es el mismo; antes y después el mundo se ha hecho pedazos y hay que nombrarlo de nuevo, dedo por dedo, labio por labio, sombra por sombra'

var textUpper = text.toUpperCase()

var searchText = prompt('Ingresá una palabra')

var searchTextUpper = searchText.toUpperCase()

if (textUpper.indexOf(searchTextUpper) !== -1 ){
    console.log('Esa palabra está en el texto')
}else{
    console.log('Esa palabra no está en el texto')
}