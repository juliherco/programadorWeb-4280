$(document).ready(function() {
  var squareNode = $('.square')

  squareNode.click(sqClick)

  function sqClick() {
    var node = $(this)

    node.addClass('square')
  }
})
