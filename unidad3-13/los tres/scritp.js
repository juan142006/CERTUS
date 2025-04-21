//OBTENER EL BOTON POR SU ID Y LO ALMACENAMOS EN UNA VARIABLE

const boton=document.getElementById("botonColor");


//CREAR UN ARREGLO DE COLORES POSIBLES PARA FONDO
const colores=[ 'lightblue','lightgreen','lightpink','lightyellow' ,'lavender' ,'red'];


//AÑADIR UN EVENTO  ala hora de hacer un CLICK
boton.addEventListener('click',cambiarcolor)


//*DEFINIR LA FUNCION PARA CAMBIAR EL COLOR*/
function cambiarcolor(){
    //VAMOS A GENERAR UN  NUMERO ALEATORIO ENTRE 0
    //  Y LA CANTIDAD DE COLORES -1*/
    const indiceAleatorio = Math.floor(Math.random()*colores.length)
    /*Usaremos ese numero para seleccionar un color del arreglo*/
    const colorseleccionado=colores[indiceAleatorio];
    /*POR ULTIMO CAMBIAMOS EL COLOR DEL FONDO DE LA 
    PAGINA, USANDO DOCUMENT.BODY*/
    document.body.style.backgroundColor=colorseleccionado;

}
