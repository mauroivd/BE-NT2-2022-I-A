function imprimirUno(){
  console.log("Uno") 
}
function imprimirDos(){
  console.log("Dos") 
}
function imprimirTres(){
  console.log("Tres") 
}


setTimeout(imprimirUno, 3000)
setTimeout(imprimirDos)

setTimeout(()=>{
  imprimirUno()
}, 5000)

imprimirTres()

