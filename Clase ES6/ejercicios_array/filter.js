import arrayResultante from './map'

console.log(arrayResultante)

/**
 * CONSIGNA: realizar una funcion que dado un array de objetos personas devuelva un 
 * nuevo array solamente con las personas que pueden entrar al casino
 *  (definido por el ejercicio anterior `allowed: true`
 */

const personasEnCasino = arrayResultante.filter(item => item.allowed)
//Array.filter()

console.log(personasEnCasino)