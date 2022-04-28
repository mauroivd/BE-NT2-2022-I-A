import Button from "../Button";

export default ({todo, onDelete, onEdit}) => {    
    //console.log(todo)

    const clickCheckbox =() => {
        onEdit({...todo, status: !todo.status})
    }

    const clickDelete = () => {
        onDelete(todo)
    }
    const clickEdit = () => {
        const title = prompt("Nombre TODO:")
        if (title)
            onEdit({...todo, title: title})
        
    }
    return (
        <li className='todo-container'>
          <input type={"checkbox"} className='todo-checkbox' checked={todo.status} onChange={clickCheckbox} />
          <span className=''>{todo.title}</span>
          
          <Button className={"todo-delete"} text={"✏️"} onClick={clickEdit} />
          <Button className={"todo-delete"} text={"❌ "} onClick={clickDelete} />
        </li>
    )
}