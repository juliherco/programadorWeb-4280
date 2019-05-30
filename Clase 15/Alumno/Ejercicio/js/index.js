$(document).ready(function() {
  console.log('Wookie')

  var url = 'https://swapi.co/api/people/3/'

  getData(url, callback)

  function getData(url, cbk) {
    $.ajax(url)
      .done(function(data) {
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
