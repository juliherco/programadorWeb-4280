//var password = prompt('Ingresá tu contraseña')

//if (password) {
//  console.log('Hay valor')
//} else {
//  console.log('No hay valor')
//} ESTO LO HAGO PARA VER QUÉ ME TIRA LA CONSOLA CUANDO PONGO ACEPTAR O CANCELAR. ME TIRA FALSE EN LOS DOS CASOS, POR ESO USO EL CODIGO DE ABAJO

do {
  password = prompt('Ingresá tu contraseña')
} while (!password)
