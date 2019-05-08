// - Usar los métodos y propiedades vistos en clase para crear tres nodos `<li>` con distintos nombres adentro, agregarles a cada uno la clase `list-group-item` y agregarlos a la lista provista uno por uno.

//Busco la ul en el HTML y la traigo a JS - Es como que voy a estar parado en la ul a partir de ahora
var mainList = document.getElementById('mainList')

var texts = ['Ed', 'Edd', 'Eddy']

for (var i = 0; i < texts.length; i++) {
  var namesList = texts[i]
  //crea un nodo li
  var li = document.createElement('li')
  //Agrega adentro del li (por el "innerHTML") los nombres del array texts en esa posición
  li.innerHTML = namesList
  //Le agrego una clase a esa li nueva
  li.className = 'list-group-item'
  //"Pusheo" el li al final de la ul
  mainList.appendChild(li)
}
