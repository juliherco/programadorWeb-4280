$(document).ready(function() {
  var firstNameInputNode = $('#firstName')
  var emailInputNode = $('#email')
  var commentsInputNode = $('#comments')
  var submitButtonNode = $('#submitButton')

  firstNameInputNode.one('blur', validateField)

  emailInputNode.one('blur', validateEmailField)

  commentsInputNode.one('blur', validateField)

  function validateField(event) {
    var inputNode = $(this)

    var errorText = ''
    inputNode.next().remove() //Por si tiene un mensaje de error, se le agrega una linea abajo, entonces cuando pasamos este comando se elimina el mensaje de error

    if (!inputNode.val()) {
      errorText = 'Campo requerido'
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent() //que busque el parent del error text (osea el input) y le agregue un div abajo con el mensaje de error

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateField) //si ya hubo un blur, que vuelva a correr esta funciòn pero cada vez que escribe
    }

    validateButton()
  }

  function validateEmailField(event) {
    var inputNode = $(this)

    var errorText = ''

    inputNode.next().remove()

    var value = inputNode.val()

    if (!value) {
      errorText = errorText + 'Campo requerido '
    } else {
      if (value.indexOf('@') === -1) {
        errorText = errorText + 'Debe contener arroba (@) '
      }
      if (value.indexOf('.') === -1) {
        errorText = errorText + 'Debe contener punto (.) '
      }
    }

    if (errorText) {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<div class="invalid-feedback">' + errorText + '</div>')
    } else {
      inputNode.addClass('is-valid')
      inputNode.removeClass('is-invalid')
    }

    if (event.type === 'blur') {
      inputNode.on('input', validateEmailField)
    }

    validateButton()
  }

  function validateButton() {
    var validInputNodes = $('.is-valid') //Busca a los nodos con la clase is-valid, osea que ya pasaron las validaciones anteriores

    if (validInputNodes.length === 3) {
      submitButtonNode.attr('disabled', false)
    } else {
      submitButtonNode.attr('disabled', true)
    }
  }
})
