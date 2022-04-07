function addOne(num){
  throw new Error('Este es un error generado')
  console.log("Estoy en addOne")
  return num + num
}

function getNum(){
  console.log('estoy en getNum')
  return addOne(10)
}

function c(){
  console.log('Estoy en C')
  console.log(getNum())
}

c()