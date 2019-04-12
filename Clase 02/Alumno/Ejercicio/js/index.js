var day = prompt ('¿What day is it?')

switch (day){
    case 'Monday':
    case 'Tuesday': 
    case 'Wednesday':
    case 'Thursday':
    case 'Friday':
    console.log('Hoy es un día hábil')
    break

    case 'Saturday':
    case 'Sunday':
    console.log('Hoy es fin de semana!')
    break

    default:
    console.log('El día que ingresaste no es válido')


}
