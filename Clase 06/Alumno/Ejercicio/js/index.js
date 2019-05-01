var numbers = [1,2,3,4,5]

var numbersUpdated = numbers.slice()

function deleteElement (a, b){
    numbersUpdated.splice (a, b)
    return numbersUpdated
}
console.log(numbers)

console.log(deleteElement(2, 1))