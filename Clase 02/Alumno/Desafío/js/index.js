var genero = prompt('Ingrese su género')
var edad = prompt('Ingresá tu edad')
var message = ''

switch (genero){
    case 'Female':
      message= message + 'Sra. '
    break
    
    case 'Male':
      message= message + 'Sr.'
    break

    default:
      message=message + 'Sx.'
    break

   }

if (edad >= 18){
    console.log(message + 'usted es mayor de edad puede ingresar')
} else{
    console.log(message + 'usted es menor de edad no puede ingresar')
}