const reducer = (state, action) => {
    switch (action) {
        case "incrementar":
            return state + 1
        case "decrementar":
            return state - 1
        default:
            throw new Error("Accion no definida dentro de nuestro reducer")
    }
}

export default reducer