if (true){
  var ambito = "Esta variable estara disponible hasta el final del codigo y/o script en donde se este ejecutando"  

  //console.log(ambito)
}

console.log(ambito)

if (true){
  let blockscoped = "Esta variable estata solo disponible dentro de este bloque de control"
  console.log("blockscoped:", blockscoped)

  const otroBlock = "Esta constante tampoco estara disponible de forma global"
  console.log("otroBlock: ", otroBlock)
}



console.log(typeof blockscoped)
console.log(typeof otroBlock)

