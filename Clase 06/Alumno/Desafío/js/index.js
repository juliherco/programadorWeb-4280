function includesText(text, baseText) {
  if (typeof text === 'string' && typeof baseText === 'string') {
    var upperText = text.toUpperCase()
    var upperBaseText = baseText.toUpperCase()

    if (upperBaseText.indexOf(upperText) !== -1) {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

console.log(includesText('Pa', 'Patricia'))

console.log(includesText('Patricia', 'Pa'))
console.log(includesText(2, 'Pa'))
