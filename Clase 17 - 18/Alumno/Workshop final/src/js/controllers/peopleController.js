import getData from '../utils/getDataFromApi'
import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import { searchPersonIndexById } from '../utils/search'

var searchingMore
var apiList = []
var nextUrl

getData('https://swapi.co/api/people', getApiList)

function getApiList(error, data) {
  var localList = getLocalList('peopleList')

  var lang = 'es'
  var addButton = $('#seeMore')
  var tableBody = $('#tableBody')

  // var index = searchPersonIndexById() //TODO: PARA QUE NO SE CARGUE EL BOTON
  if (data.results) {
    var results = data.results
    apiList = apiList.concat(results)
    for (var i = 0; i < results.length; i++) {
      var person = results[i]
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
        addButton.one('click', function() {
          getData(data.next, getApiList)
        })
      } else if (data.next === null) {
        addButton.attr('disabled', true)
      }
    }
    var saveButton = $('.btn-info')

    saveButton.one('click', function() {
      var saveId = $(this).attr('id')
      console.log(saveId)

      // var index = searchPersonIndexById(saveId, results)

      // if (index === -1) {
      // results.push(person[index])
      setLocalList('peopleList', person)
    })
  }
}

export default { getApiList }
