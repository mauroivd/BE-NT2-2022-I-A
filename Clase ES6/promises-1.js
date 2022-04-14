const url = "https://us-central1-be-tp3-a.cloudfunctions.net/app/api/read"

const peticion = fetch(url)

console.log(peticion)

peticion.then(response => {
  console.log(response)
})

peticion.then(res => {
  console.log("hola mundo")
})

peticion.then(res => {
  return res.json()
}).then(data => {
  console.log(data)
})

peticion.catch(res => {
  console.log(res)
  console.error(res)
})

peticion.finally(() => {
  console.log("Todo esto funcuiona de manera")
})


