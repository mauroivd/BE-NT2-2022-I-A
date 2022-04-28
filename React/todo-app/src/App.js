import logo from './logo.svg';
import './App.css';
import Button from './components/Button';
import Todo from './components/Todo';
import Counters from './components/Counters';
import { useState } from 'react';

function App() {

  /**
   * Estructura de los TODOs
   * 
   *  [
   *     {
   *        id, //opcional
   *        title,
   *        status
   *     }
   *  ]
   */
  const [todos, setTodos] = useState([
    // {
    //   title: "todo 1",
    //   status: false
    // },
    // {
    //   title: "todo 2",
    //   status: true
    // }
    
  ])

  const addTodo = ()=> {
    const title = prompt('Nombre TODO?')
    console.log(todos)
    if (title){
      const nuevoTodo = {
        title,
        status: false
      }

      // Esto que se hace es para actualizar el estado `todos`
      setTodos([...todos, nuevoTodo])
    }
  }

  const onEdit = (todo) => {
    console.log("Este es el TODO modificado y enviado por el HIJO", todo)
    // debugger
    setTodos(todos.map((item, index) => (todo.index === index ) ? todo: item ))
  }

  const onDelete = (todo) => {
    console.log('Deberia borrar este TODO', todo)

    setTodos(todos.filter((item, index) => todo.index !== index ))

  }
  


  return (
    <div className="container center">
      <h1 className='center title'>TODO App</h1>

      <Counters todos={todos} />


      <Button className={"button center"} text={"Add TODO"} onClick={addTodo} />



      <ul className='todo-list'>
        {
          todos.map((todo, index)=> <Todo key={index} todo={{...todo, index}} onEdit={onEdit} onDelete={onDelete}  />)
        }        
      </ul>
    </div>
  );
}

export default App;
