import crossroads from 'crossroads' //Está instalado por default en algun lado en node modules.
import contactController from './controllers/contactController'

function router() {
  crossroads.addRoute('', function() {
    console.log('Home page')
    //Al lado de load le digo donde esta el pedacito de HTML que tiene que traer
    $('#root').load(
      './partials/home.html',
      function() //Cuando se termina de cargar este HTML se llama a  la funcion callback
      {
        console.log('Se cargo la home')
      }
    )
  })

  crossroads.addRoute('#/people', function() {
    $('#root').load('./partials/people.html', function() {
      console.log('People page')
    })
  })

  crossroads.addRoute('#/local-storage', function() {
    $('#root').load('./partials/local-storage.html', function() {
      console.log('LS page')
    })
  })

  crossroads.addRoute('#/contact', function() {
    $('#root').load('./partials/contact.html', contactController)
  })

  // En cada cambio del # va a verificar las rutas
  $(window).on('hashchange', function() {
    crossroads.parse(window.location.hash)
  })

  crossroads.parse(window.location.hash)
}

export default router
