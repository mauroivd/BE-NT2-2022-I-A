function saludo(nombre){
  console.log(`Hola ${nombre}`)
  // console.log('Hola '+ nombre)
}



const o = new Object()

console.log(o)

o.firstName = "Daniel"
o.lastName = 'Guzman'
o.isTeaching = true
o.age = 31
o.friends = ['Elyein', "Fernando", `Juan`, 5.9, new Object()]
o.sayHello = saludo

console.log(o)

o.sayHello(o.friends[2])

/**
o.class = 'NT2-A'

console.log(o)

delete o.class // Eliminamos atributos de un Objeto JavaScript

console.log(o) 
 */

// Convierte un objeto a cadeno 
let cadena_objeto  = JSON.stringify(o)
//console.log(typeof cadena_objeto, cadena_objeto)

// Convertimos una cadena a objeto
cadena_objeto = JSON.parse(cadena_objeto)
//console.log(typeof cadena_objeto, cadena_objeto)



const o2 = {}
o2["firstName"] = "Ana"
o2["lastName"] = "Perez"
console.log(o2, o2["firstName"], o2['lastName'], o2["0"], o2.firstName, o2[0])

let a = 'age'
o2[a] = 31

console.log(o2)

console.log("*******************************")


const o3 = {
  firstName : "Daniel",
  lastName : "Guzman",
  saludo: function (nombre){
    console.log(`Hola ${nombre}, un gusto saludarte`)
  },
  direccion: {
    calle: 'Av. Libertador',
    numro: 6700
  }
}


console.log(o3)

o3.saludo('Catalina')