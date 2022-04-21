import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="container center">
      <h1 className='center title'>TODO App</h1>

      <div className='flow-right controls'>
        <span>Cantidad de Todos: 3 </span>
        <span>Todos pendientes: 3</span>
      </div>

      <button className='button center'>Agregar TODO</button>
      <ul className='todo-list'>
        <li className='todo-container'>
          <input type={"checkbox"} className='todo-checkbox' />
          <span className=''>Tarea 1</span>
          <button className='todo-delete'>X</button>
        </li>
        <li className='todo-container'>
          <input type={"checkbox"} className='todo-checkbox' />
          <span className=''>Tarea 2</span>
          <button className='todo-delete'>X</button>
        </li>
        <li className='todo-container'>
          <input type={"checkbox"} className='todo-checkbox' />
          <span className=''>Tarea 3</span>
          <button className='todo-delete'>X</button>
        </li>
      </ul>
    </div>
  );
}

export default App;
