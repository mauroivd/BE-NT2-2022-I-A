/**
 * Hacer una funcion que dado un array de participantes del curso me devuelva el alumno con mayor edad.
 * 
 * [
 *  {
 *    firstName,
 *    lastName,
 *    age
 *  },
 *  ...,
 *  n
 * ]
 */


function participanteMayorEdad(arr){

  console.log(arr.length)

  arr.forEach((elem, index) => {
    console.log(`Arr[${index}]`, elem)


  })
  
  console.log('************** OTRA FORMA DE RECORRER ARRAYS')
  for (var i = 0; i < arr.length; i++){
    console.log(`Arr[${i}]`, arr[i])
  }

}



const alumnos =[
  {
    firstName: "Daniel",
    lastName: "Guzman",
    age: 23
  },
  {
    firstName: "Kenaan",
    lastName: "Chab",
    age: 25
  },
  {
    firstName: "Mauricio",
    lastName: "Villaroel",
    age: 20
  }
]

console.log(alumnos)

participanteMayorEdad(alumnos)

/**
const miFuncion = function(){
  console.log("hola mundo")
}

function saludo(){
  console.log("Hola mundo")
}

const otroSaludo = () => {
  console.log("Hola mundo")
}

const otroSaludoMas = () => console.log("Hola mundo")

miFuncion()
saludo()
otroSaludoMas()

 */