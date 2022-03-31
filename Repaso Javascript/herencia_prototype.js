const array = [1,2,3]
console.log(array)

array.push(5)

console.log(array)

console.log(typeof array, array.toString())

array.__proto__.toString = function() {
  return "Hello world"
}

console.log(typeof array, array.toString())





const cadena = String("Hola mundo")

console.log(cadena.toUpperCase(), typeof cadena)


const x = 42

console.log(x.toString())


// console.log(x instanceof Number) ****