function Select(props){
    return(
        <div>
            <p>Seleccione {props.nombre}</p>
            <select>
                <option>Seleccione un item ...</option>
                {props.lista.map(item => {
                    return (<option>{item}</option>)
                })}
            </select>
        </div>
    )
}

export default Select