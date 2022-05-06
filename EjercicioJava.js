let funcion = ()=> {
let arreglo = []

//Llenando el arreglo
for (let i = 0; i < 5; i++){
    arreglo[i] = document.getElementById("input-"+(i)).value
}



//Escribiendo en pantalla
for(let j = 0; j <5; j++){
    window.setTimeout( function (){
        document.getElementById("p-"+(j+1)).innerHTML = arreglo[j]
    },1000)
}
/*hola
soy
un bloque de comentarios
*/
}