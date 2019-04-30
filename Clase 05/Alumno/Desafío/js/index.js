function Student (firstName, lastName, dni, email){
    this.firstName = firstName
    this.lastName = lastName
    this.dni = dni
    this.email = email
    var id = Math.random()
    this.getID = function(){
        return id
        }

    this.getFullName=function() {
        var studentInfo = ''

        if(this.firstName && this.lastName){
            studentInfo = firstName + ' ' + lastName + '. DNI número: '+ dni + '. Email: '+email
        } 
        else {
            studentInfo = 'No se reconoce el alumno'
        }
        return (studentInfo)
    }
}

var student1 = new Student ('Juan', 'Pérez', 45678987,'juan@gmail.com'  )
console.log(student1.getFullName())

var student2 = new Student ('Ana', 'Fernandez', 45678989, 'ana@gmail.com')
console.log(student2.getFullName())

var student3 = new Student ('Pedro', undefined, 45678956,  'pedro@gmail.com')
console.log(student3.getFullName())