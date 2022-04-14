(async function() {
  console.log("vamos a ejecutar un codigo dentro de la funcion")


  const url = "https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read"

  const buscarVehiculo = (id) => {
    return new Promise((resolve, reject) => {
      fetch(`${url}/${id}`).then(res => {
        if (res.status === 200)
          return resolve(res.json())
        else
          throw new Error('Error comunicacion con Backend')
      })
      .catch(error => { 
        return reject('Error: Imposible buscar vehiculo en este momento. Intente mas tarde')
      })
    })
  }


  /**
   * Llamada asincrona de la promesa
   
  const vehiculo = buscarVehiculo("0f5b1667-6b83-4454-a5be-885c5c0d38f1")

  console.log(vehiculo)

  vehiculo.then(data => console.log(data))
  vehiculo.catch(error => console.error(error))

  vehiculo.finally(() => console.log("Termino de ejecutar la promesa"))

  console.log("Aprovecho la asincronicidad y juego con la promesa")
  */

 /**
  * Llamada Sincrona de la promesa
  */

 try{
   const vehiculo = await buscarVehiculo("0f5b1667-6b83-4454-a5be-885c5c0d38f1")

   console.log(typeof vehiculo, vehiculo)

   console.info("Quiero que esto se ejecute incluso despues de buscar la data")
 }catch(error){
   console.error(error)
 }
 



})()