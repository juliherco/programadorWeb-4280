var studentsList = [
    {
      firstName: 'Juan',
      lastName: 'Pérez',
      dni: 45678987
    },
    {
      firstName: 'Ana',
      lastName: 'Fernandez',
      dni: 45678989
    },
    {
      firstName: 'Pedro',
      lastName: 'Mármol',
      dni: 45678956
    },
    {
      firstName: 'Pablo',
      lastName: 'Picapiedras',
      dni: 45678983
    }
  ]

  var text = prompt ('Ingrese un nombre')

  var result = getPosition (text, studentsList)

  function getPosition (text, studentsList){
      for(var i=0; i < studentsList.length; i++){
        var student = studentsList[i]
        if(text === student.lastName || text === student.firstName){
          return i
      }
    }
    return -1
  }
  
  if (result !== -1){
  console.log('Se encontró el estudiante en la posición ' + result)
  }else{
    console.log('No se pudo encontrar el estudiante')
  }
