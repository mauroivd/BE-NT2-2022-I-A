// Esto hara una llamada recursiva infinita (te congelara la pantalla al cabo de un tiempo)


function recursion(){
  console.log("Recursion!")
  return recursion()
}


// Esto causa un desbordamiento de pila (stack overflow)
// recursion()

