function validarFormulario(event){
    const $form = document.formulario;
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form['descripcion-regalo'].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorDescripcionRegalo = validarRegalo(descripcionRegalo); 
    
    errores= {
        nombre: errorNombre,
        ciudad: errorCiudad,
        'descripcion-regalo': errorDescripcionRegalo
    }

    const esExito = manejarErrores(errores) === 0; 
    console.log(esExito);

    if(esExito){
        $form.className = "oculto";
        document.querySelector("#exito").className = "";
    }


    event.preventDefault();
}


function manejarErrores (errores){
    let hayErrores = 0;
    const keys = Object.keys(errores);
    console.log(keys);

    keys.forEach(function(key){
        const error = (errores[key]);
        const $errors = document.querySelector("#errores");

        if(error){
            hayErrores++;
            $form[key].className = "error";

            const $error = document.createElement("li");
            $error.innerText = error;
            $errors.appendChild($error);
        }else{
            //si existe el error, borrarlo aca
            $form[key].className = "";
        }
    })
    return hayErrores;
}

function validarNombre(nombre){
    if(nombre.length=== 0){
        return("Nombre debe tener al menos 1 carater");
    }

    if (nombre.length>= 50){
        return("Nombre debe tener menos de 50 caracteres");
    }

    if(!(/^[a-z]+$/i.test(nombre))){
        return "El nombre solo acepta letras";
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
    if (regalo.length >= 100){
        return("la descripcion del regalo debe tener menos de 100 caracteres");
    }
    
    if(regalo.length=== 0){
        return("la descripcion del regalo debe tener al menos 1 carater");
    }

    if(!(/^[a-z0-9]+$/i.test(regalo))){
        return "La descripcion solo acepta letras y numeros";
    }

    return "";
}

const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarFormulario;