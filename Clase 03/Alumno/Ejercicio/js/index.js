var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Sabado',
  'Domingo',
  'Pato'
]

for (var i = 0; i < 10; i++) {
  var day = daysOfTheWeek[i]

  switch (day) {
    case 'Lunes':
    case 'Martes':
    case 'Miércoles':
    case 'Miercoles':
    case 'Jueves':
    case 'Viernes':
      console.log(day + ' es un día hábil')
      break

    case 'Sábado':
    case 'Sabado':
    case 'Domingo':
      console.log(day + ' es fin de semana!')
      break

    default:
      console.log(day + ' no es válido')
  }
}
