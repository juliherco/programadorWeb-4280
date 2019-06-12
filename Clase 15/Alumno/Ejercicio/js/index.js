$(document).ready(function() {
  var url = 'https://swapi.co/api/people/5/'

  getData(url, callback)

  function getData(url, cbk) {
    $.ajax(url)
      .done(function(data) {
        //el .done dice que se ejecute algo cuando todo estè bien
        cbk(null, data)
      })
      .fail(function(error) {
        //si la api falla usamos el .fail
        cbk(error)
      }) //el done y el fail tienen que ver con el status code que salga cuando llama a la api (202, 404, etc). Si el numero que trae es bueno, se ejecuta SOLAMENTE la parte de done. Si trae errror se ejecuta solamente la otra parte
  }

  function callback(error, data) {
    if (error) {
      console.log('Hubo un error', error)
    } else {
      console.log('Todo ok', data)
    }
  }
})
