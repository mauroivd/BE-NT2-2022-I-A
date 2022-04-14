/**
 * Estructura de datos
 * 
 * {
 *  nombre,
 *  telefono,
 *  edad
 *  etc
 * }
 * 
 */

const CANTIDAD_CONTACTOS = 10


 const nombres = ["Daniel", "Fernando", "Ely", "Hilda", "Kenaan"]
 const apellidos = ["Villarroel", "Soto", "Cruz", "Carrasquero", "Unias"]
 
 const random = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min
 
 const generarNombre = () => `${nombres[random(0, nombres.length - 1)]}`
 
 const generarApellido = () => `${apellidos[random(0, apellidos.length - 1)]}`
 
 // Telefono seria algo como 11-333-1123
 const generarTelefono = () => `${random(10,99)}-${random(100,999)}-${random(1000,9999)}`
 
 //console.log(generarNombre())
 //console.log(generarApellido())
 
 const crearContacto = () => {
   return {
     nombreCompleto: `${generarApellido()}, ${generarNombre()}`,
     telefono: generarTelefono(),
     edad: random(18,50)
   }
 }
 
 const prueba = crearContacto()
 console.log(prueba, prueba.nombreCompleto[0])
 
 
 
 
 const contactos = Array.from({
   length: CANTIDAD_CONTACTOS
 }, crearContacto)
 
 console.log(contactos)
 
 
 /**
  * CONSIGNA: Dado una lista de contactos crear una funcion que me agrupe los contactos segun la primera letra de su nombre completo con la siguiente estructura
  * 
  * {
  * 
  *    F: [{}, {},...,{}],
  *    C: [{}, {},...,{}],
  *    U: [{nombreCompleto: "Unias, Fernando", ...}, {nombreCompleto: "Unias, Hilda", ...}]
  * 
  * }
  * 
  */
 
 // Ejemplo reduce sumando todas las edades
 
 const sumEdad = contactos.reduce((previousValue, item)=>{
   //console.log("ITEM => ", item)
   //console.log("previousValue => ", previousValue)
   //console.log("*********************************")
   return previousValue + item.edad
 },0)
 
 console.log("La sumatoria de edad es: ", sumEdad)
 
 
 
 const contactsByLetter = contactos.reduce((obj, contacto) => {
   const firstLetter = contacto.nombreCompleto[0]  
   //console.log(...(obj[firstLetter]) || [])
   return {
     ...obj,
     [firstLetter]: [...(obj[firstLetter] || []), contacto]
   }
 }, {})
 
 
 /**
  * CONSIGNA FINAL: Con el objeto de contactos por letra devolver un array 
  * agrupado por letras y ordenado alfabeticamente
  * 
  * Ejemplo:
  * 
  * [
  *    {
  *      "title": "A",
  *      "data": [{...}, {...}]
  *    },
  *    {
  *      "title": "C",
  *      "data": [{...}, {...}]
  *    },
  *    {
  *      "title": "Z",
  *      "data": [{...}, {...}]
  *    }
  * ]
  */
 //console.log(">>>>", contactsByLetter.A)
 
 console.log(Object.keys(contactsByLetter).sort())
 const CAA = Object.keys(contactsByLetter).sort().map((item, index) => {
   console.log(item, index, contactsByLetter[item])
   return {
     title: item,
     data: contactsByLetter[item]
   }
 })
 console.log(CAA)
 
 // otro ejemplo

 
const tarea = contactos.reduce((acc, item) => {
  if (!acc[item.nombreCompleto[0]]) acc[item.nombreCompleto[0]] = []
  acc[item.nombreCompleto[0]].push(item)
  return acc

}, {})

console.log(tarea)
 
 
 
