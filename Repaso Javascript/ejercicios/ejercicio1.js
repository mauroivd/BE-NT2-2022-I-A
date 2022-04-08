/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas` 
 * devuelva un array con un atributo `allowed` (_boolean_) que indique si puede
 *  entrar o no en un casino (Solo los mayores de 21 anios pueden entrar)
 */

const LIMITE_EDAD = 21

 const array = [
  {
    nombre: "Alejandra",
    apellido: "Perez",
    edad: 25
  },
  {
    nombre: "Jezza",
    apellido: "Gonzales",
    edad: 19
  },
  {
    nombre: "Eduardo",
    apellido: "Perez",
    edad: 25
  }
]

const verificarArray = (item) => {
  if(item.edad >= LIMITE_EDAD)
    item.allowed = true
  else
    item.allowed = false
  return item
}

const array_resultante = array.map(verificarArray)
// console.log(array_resultante[0], array_resultante[1], array_resultante[2])

console.log(typeof verificarArray)

const otro_array = array.map(item => item.edad >= LIMITE_EDAD? {...item, allowed: true}: item)

// console.log(otro_array)

const myFilter = array_resultante.filter(item => item.allowed)

console.log(myFilter)




/**
 * Destructuring Objects
 */

//  const [persona0, persona1] = array_resultante

//  console.log(persona0)
 
//  const { edad, nombre, allowed } = persona0
 
//  console.log(`Mi nueva constante (destructurada) edad: ${edad}`)
 
//  console.log(nombre, edad, allowed)