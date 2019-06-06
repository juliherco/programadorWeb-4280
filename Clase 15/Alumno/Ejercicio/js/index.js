$(document).ready(function() {
  var url = 'https://swapi.co/api/people/5/'

  getData(url, callback)

  function getData(url, cbk) {
    $.ajax(url)
      .done(function(data) {
        //el .done dice que se ejecute algo cuando nos haya traido toda la info de la api
        cbk(null, data)
      })
      .fail(function(error) {
        cbk(error)
      })
  }

  function callback(error, data) {
    if (error) {
      console.log('Hubo un error', error)
    } else {
      console.log('Todo ok', data)
    }
  }
})
