import { getData, getAllList } from '../utils/getDataFromApi'
import { getLocalList, setLocalList } from '../utils/localStorage'
import translates from '../utils/translate'
import searchPersonIndexById from '../utils/search'

function peopleController() {
  var tableBody = $('#tableBody')

  var seeMoreButton = $('#seeMore')

  var apiList = []

  var peopleLocalList = getLocalList('peopleList')

  var startUrl = 'https://swapi.co/api/people/'

  loadPeople(startUrl)

  function loadPeople(url) {
    //Trae a los personajes desde la api
    getData(url, function(error, data) {
      if (data.results) {
        appendPeople(data.results)
        apiList = apiList.concat(data.results)
      }

      if (!error && data) {
        //Carga la siguiente pagina de personajes cuando apreto ver mas
        seeMoreButton.one('click', function() {
          loadPeople(data.next)
        })
      } else if (data.next === 'null') {
        seeMoreButton.css('display', 'none') //no funciona, arreglar
      }
    })
  }

  function appendPeople(peopleList) {
    //me muestra la lista de personajes en el DOM
    var lang = 'es'
    var person

    for (var i = 0; i < peopleList.length; i++) {
      person = peopleList[i]

      var peopleId = person.url.split('/')[5]

      tableBody.append(
        '<tr id="' +
          peopleId +
          '"><th scope="row" >' +
          peopleId +
          '</th><td>' +
          person.name +
          '</td><td>' +
          translates[lang]['gender'][person.gender] +
          '</td><td>' +
          person.height +
          ' cm</td><td>' +
          person.mass +
          ' kg</td><td>' +
          translates[lang]['eyeColor'][person.eye_color] +
          '</td><td><button type="button" class="btn btn-success">Save</button></td></tr>'
      )

      $('#' + peopleId).click(function() {
        var rowNode = $(this)
        var id = rowNode.attr('id')

        var index = searchPersonIndexById(id, apiList)

        peopleLocalList.push(apiList[index])

        setLocalList('peopleList', peopleLocalList)

        // console.log(peopleLocalList)

        // var newIndex = searchPersonIndexById(index, peopleLocalList)

        // console.log(newIndex)

        // if (newIndex !== -1) {
        //   apiList.splice(newIndex, 1)
        // }

        rowNode.hide(300, function() {
          rowNode.remove()
        })
      })
    }
  }
}

export default peopleController
