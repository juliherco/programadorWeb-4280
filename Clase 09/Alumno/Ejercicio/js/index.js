var zipInput = document.getElementById('zipCode')

zipInput.onblur = validateZc

function validateZc(event) {
  var inputNode = event.target
  var inputValue = inputNode.value
  parsedInputValue = parseInt(inputValue, 10)
  if (
    typeof parsedInputValue === 'number' &&
    parsedInputValue >= 1000 &&
    parsedInputValue <= 9999 &&
    parsedInputValue
  ) {
    inputNode.classList.add('is-valid')
    inputNode.classList.remove('is-invalid')
  } else {
    inputNode.classList.add('is-invalid')
    inputNode.classList.remove('is-valid')
  }
}
