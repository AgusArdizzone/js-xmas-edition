const nombre = document.formulario.nombre.value;
const ciudad = document.formulario.ciudad.value;
const comportamiento = document.formulario.comportamiento.value;
const descripcionRegalo = document.formulario['descripcion-regalo'].value;


function validarNombre(nombre){
    if(nombre.length=== 0){
        return("Nombre debe tener al menos 1 carater");
    }

    if (nombre.length>= 50){
        return("Nombre debe tener menos de 50 caracteres");
    }

    return '';
}

function validarCiudad(ciudad){
    if(ciudad.length=== 0){
        return("ciudad debe tener al menos 1 carater");
    }
    return "";
}

function validarRegalo(regalo){
    if(regalo.length=== 0){
        return("la descripcion del regalo debe tener al menos 1 carater");
    }

    return "";
}