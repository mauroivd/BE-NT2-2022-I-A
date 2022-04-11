/**
 * CONSIGNA: Realizar una funcion que dado un array de objetos `personas` 
 * devuelva un array con un atributo `allowed` (_boolean_) que indique si puede
 *  entrar o no en un casino (Solo los mayores de 21 anios pueden entrar)
 */

const MAYORIA_EDAD = 21

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
  if (item.edad >= MAYORIA_EDAD)
    item.allowed = true
  return item
}

console.log("******")

const array_resultante = array.map(verificarArray)
console.log(array_resultante)


/*
const otro_array = array.map(item => {
  return {...item, allowed: item.edad >= MAYORIA_EDAD}
})
        

console.log(otro_array)

console.log([{a: 'a'},...otro_array, {z:'z'}])
*/



/**
 * Destructuring Objects
 */

const [persona0, persona1] = array_resultante

console.log(persona0)

const { edad, nombre, allowed } = persona0

console.log(`Mi nueva constante (destructurada) edad: ${edad}`)

console.log(nombre, edad, allowed)


export default array_resultante