import getData from '../utils/getDataFromApi'
import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import { searchPersonIndexById } from '../utils/search'

// var apiList = []

// function peopleController() {
//   // var searchingMore

//   // var nextUrl

//   getData('https://swapi.co/api/people', getApiList)
// }

// function getApiList(error, data) {
//   var localList = getLocalList('peopleList')

//   var lang = 'es'
//   var addButton = $('#seeMore')
//   var tableBody = $('#tableBody')

//   // var index = searchPersonIndexById() //TODO: PARA QUE NO SE CARGUE EL BOTON SI YA ESTA EN EL LS

//   if (!error) {
//     apiList = apiList.concat(data.results) //cada pagina nueva me la une al final de la lista
//     console.log(apiList)
//     for (var i = 0; i < apiList.length; i++) {
//       var person = apiList[i]
//       var id = person.url.split('/')[5]

//       tableBody.append(
//         '<tr><th scope="row">' +
//           id +
//           '</th><td>' +
//           person.name +
//           '</td><td>' +
//           translates[lang]['gender'][person.gender] +
//           '</td><td>' +
//           person.height +
//           ' cm</td><td>' +
//           person.mass +
//           ' kg</td><td>' +
//           person.eye_color +
//           '</td><td><button id="' +
//           id +
//           '" type="button" class="btn btn-info">Save</button></td></tr>'
//       )
//       if (data.next) {
//         addButton.one('click', function() {
//           getData(data.next, getApiList)
//         })
//       } else if (data.next === null) {
//         addButton.attr('disabled', true)
//       }
//     }
//     var saveButton = $('.btn-info')

//     saveButton.one('click', function() {
//       var saveId = $(this).attr('id')
//       console.log(saveId)

//       // var index = searchPersonIndexById(saveId, results)

//       // if (index === -1) {
//       // results.push(person[index])
//       setLocalList('peopleList', person)
//     })
//   }
// }

function peopleController() {
  var seeMoreButton = $('#seeMore')
  var tableBody = $('#tableBody')
  var localList = getLocalList('peopleList')

  var apiList = []

  var lang = 'es'

  console.log('PATO', localList)
  getData('https://swapi.co/api/people/', cbk)

  function cbk(error, data) {
    if (!error) {
      apiList = apiList.concat(data.results)
      for (var i = 0; i < apiList.length; i++) {
        var person = apiList[i]
        console.log(person)
        var id = person.url.split('/')[5]

        tableBody.append(
          '<tr><th scope="row">' +
            id +
            '</th><td>' +
            person.name +
            '</td><td>' +
            translates[lang]['gender'][person.gender] +
            '</td><td>' +
            person.height +
            ' cm</td><td>' +
            person.mass +
            ' kg</td><td>' +
            person.eye_color +
            '</td><td><button id="' +
            id +
            '" type="button" class="btn btn-info">Save</button></td></tr>'
        )

        if (data.next) {
          seeMoreButton.one('click', function() {
            getData(data.next, cbk)
          })
        }
      }
    }
  }
}
export default peopleController
