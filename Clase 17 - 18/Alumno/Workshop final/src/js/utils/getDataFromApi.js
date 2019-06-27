function getData(url, cbk) {
  $.ajax(url)
    .done(function(data) {
      cbk(null, data);
    })
    .fail(function(error) {
      cbk(error);
    });
}

/**
 * getAllList recibe como parámetro un error y la data,
 * si no hay error muestra los nombres en consola
 * @param {Object} error
 * @param {Object} data
 */

function getAllList(error, data) {
  if (data.results) {
    var results = data.results;
    for (var i = 0; i < results.length; i++) {
      console.log(results[i].name);
    }
  }
  if (data.next) {
    getData(data.next, getAllList);
  }
}

export { getData, getAllList };
