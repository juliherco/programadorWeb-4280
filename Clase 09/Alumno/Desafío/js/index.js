var emailInput = document.getElementById('email')

emailInput.onblur = emailValidation

function emailValidation(event) {
  var inputNode = event.target
  var inputValue = inputNode.value

  if (
    inputValue.indexOf('@') === -1 ||
    (inputValue.indexOf('.') === -1 || !inputValue)
  ) {
    emailInput.classList.add('is-invalid')
    emailInput.classList.remove('is-valid')
  } else {
    emailInput.classList.add('is-valid')
    emailInput.classList.remove('is-invalid')
  }
}
