function obtenerUsuariodesdeBD(callback){
  // Esto va a simular la llamada a una BD
  setTimeout(()=>{
    const userData = {
      firstName: "Carlos",
      lastName: "Gonzales",
      edad: 40
    }
    // supongamos que tengo una llamada a esta BD y dura 1000
    callback(userData)

  }, 1000)
}


function saludoUsuario(user){
  console.log(`Hola ${user.firstName} ${user.lastName}`)
}



// MI llamada a la BD
obtenerUsuariodesdeBD(console.log)
obtenerUsuariodesdeBD(saludoUsuario)

