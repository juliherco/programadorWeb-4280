var numbers = [1,2,3,4,5]

function deleteElement (index, array){
    
    var arrayCopy = array.slice()
    
    arrayCopy.splice(index, 1)

    return arrayCopy

}

var newNumbers = deleteElement (2, numbers)
console.log(numbers)

console.log(newNumbers)