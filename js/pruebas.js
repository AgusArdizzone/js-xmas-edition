function probarValidarNombre() {
  console.assert(
      validarNombre('') === "Nombre debe tener al menos 1 carater",
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
          "Nombre debe tener menos de 50 caracteres",
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("1234") === 'El nombre solo acepta letras',
      'Validar nombre no valido que no tenga numeros',
  );

  console.assert(
        validarNombre('Agustin') === '',
        'Validar Nombre no funciono con un nombre valido',
    );
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'ciudad debe tener al menos 1 carater',
        'Validar Ciudad no valido que la ciudad no este vacia',
    );

    console.assert(
        validarCiudad('Austin') === '',
        'Validar Ciudad no funciono con un nombre valido',
    );
}

probarValidarCiudad();

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'la descripcion del regalo debe tener al menos 1 carater',
        'Validar regalo no valido que la desc del regalo no este vacia',
    );

    console.assert(
        validarRegalo('asdfghjkloasdfghjkloasdfghjkloasdfgasdfghjkloasdfghjkloasdfghjklohjkloasdfghjasdfghjkloasdfghjklokloasdfghjklo') === "la descripcion del regalo debe tener menos de 100 caracteres",
        "Validar regalo no valido que la desc tenga menos de 100 caracteres",
    );

    console.assert(
        validarRegalo("pelota") === "",
        "Validar regalo no funciono con una descripcion correcta",
    );
}

probarValidarRegalo();
