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
}

probarValidarNombre();

function probarValidarCiudad(){
    console.assert(
        validarCiudad('') === 'ciudad debe tener al menos 1 carater',
        'Validar Ciudad no valido que la ciudad no este vacia',
    );
}

probarValidarCiudad();

function probarValidarRegalo(){
    console.assert(
        validarRegalo('') === 'la descripcion del regalo debe tener al menos 1 carater',
        'Validar regalo no valido que la desc del regalo no este vacia',
    )
}

probarValidarRegalo();
