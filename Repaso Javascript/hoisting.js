// 
saludo()

// noFunction()
//otraFunction()

function saludo(){
  console.log("Hello world!")
}

const noFunction = function(){
  console.log("Esta funcion no es tomada en cuenta por el mecanismo hoisting")
}

noFunction()

const otraFunction = () => console.log("Otra funcion que no es tomada en cuenta con el mecanismo hoisting")

otraFunction()