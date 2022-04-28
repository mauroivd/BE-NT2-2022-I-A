export default ({todos}) => {

    let itemCount = todos.length

    let unCheckedCount = todos.reduce((counter, todo) => {
        return (!todo.status) ? counter + 1 : counter
    }, 0)

    return (
        <div className='flow-right controls'>
            {/* <span>Cantidad de Todos: {itemCount} </span> */}
            <span>Cantidad de Todos: {itemCount} </span>
            <span>Todos pendientes: {unCheckedCount} </span>
        </div>
    )

}