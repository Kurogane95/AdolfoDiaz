let funcion = ()=> {
let arreglo = []

arreglo[0] = document.getElementById("input-1").value 
arreglo[1] = document.getElementById("input-2").value
arreglo[2] = document.getElementById("input-3").value
arreglo[3] = document.getElementById("input-3").value

//Llenando el arreglo
for (let i = 0; i < 4; i++){
    arreglo[1] = document.getElementById("input-"+(i+1))
    value
}

//Escribiendo en pantalla
for(let j = 0; j <4; j++){
    window.setTimeout( function (){
        document.getElementById("p-"+(j+1)).innerHTML =
        arreglo[j]
    },1000)
}
/*hola
soy
un bloque de comentarios
*/
}