import logo from './logo.svg';
import './App.css';

import Saludo from "./components/saludo";
import { useState } from 'react';




function App() {


  const state = useState({
    nombre: "Gabriel",
    edad: 21
  })

  console.log("Devolucion del useState", state)

  const [persona, setPersona] = state

  const cambioNombre = () =>{
    console.log("Hola... procedo a cambiar el nombre")
    const nuevoNombre = prompt('Cual es tu nombre?')

    if (nuevoNombre){
      setPersona({...persona, nombre: nuevoNombre})
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        

        {/* Aqui inyecto mi componente saludo */}
        <Saludo persona={persona} />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

        <Saludo/>

        <br />
        <button onClick={cambioNombre}> Cambiar nombre</button>
        {/* <button onClick={()=> setPersona({...persona, edad: 15})}> Cambiar Edad</button> */}
      </header>
    </div>
  );
}

export default App;
