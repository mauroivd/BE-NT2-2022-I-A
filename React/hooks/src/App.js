import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Counter from './components/counter';
import Button from './components/Button';
import ContadorReducer from "./components/ReducerComponent";

import GlobalContext, { defaulValue } from './components/globals/context'


function App() {

  const [iniciado, setIniciado] = useState(defaulValue)
  

  // const [nombre, setNombre] = useState("NT2 Belgrano")
  // const [edad, setEdad] = useState(31)

  // useEffect(() => {
  //   console.log("MOUNT: Aqui puedo buscar datos externos para mostrar")

  //   return () => {
  //     console.log("UNMOUNT: Aqui deja de estar visible")
  //   }
  // }, [])

  // useEffect(()=>{
  //   console.log("UPDATE: Aqui estoy cambiando el estado nombre: ", nombre)
  // }, [nombre])

  // useEffect(()=>{
  //   console.log("UPDATE: Aqui estoy cambiando el estado edad: ", edad)
  // }, [edad])

  // useEffect(()=>{
  //   console.log("UPDATE: Aqui estoy cambiando el estado nombre o edad: ", nombre, edad)
  // }, [edad, nombre])


  return (
    <GlobalContext.Provider value={{ iniciado, setIniciado }} >
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />



          {/* <p>Hola soy {nombre}</p>
        <p>Tengo {edad} años</p>

        <br />
        <button onClick={() => setNombre(prompt("Cual es tu nombre?"))}>Cambiar nombre</button>
        <button onClick={() => setEdad(prompt("Cual es tu edad?"))}>Cambiar edad</button> */}


          {/* EJEMPLO CONTADOR */}

          <p>
            Counter: <Counter/>
          </p>
          {/* <ContadorReducer /> */}

          <Button />

          {/* <button onClick={() => setIniciado(!iniciado)}  > { iniciado ? 'Pausar' : 'Iniciar' }</button> */}
        </header>
      </div>
    </GlobalContext.Provider>

  );
}

export default App;
