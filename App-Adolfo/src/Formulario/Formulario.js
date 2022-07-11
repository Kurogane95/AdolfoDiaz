import Input from '../Input/Input'
import Select from '../Select/Select'
function Formulario(props){

    let items = ["Perro", "Gato", "Canario", "Leon"]

    return(
        <>
            <Input type="text" titulo="Agregar patente"/>
            <Input type="number" titulo="Ingresar año"/>
            <Select lista={items}></Select>
        </>
    )
}

export default Formulario