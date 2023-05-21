/* Valida el campo de Evento para ver si hace aparecer el campo de Texto al elegir la opción Otro*/
function mostrarCampoTexto() {
  var eventoSelect = document.getElementById("Evento");
  var campoTexto = document.getElementById("campoEvento");

  if (eventoSelect.value === "Otro") {
    campoTexto.style.display = "block";
  } else {
    campoTexto.style.display = "none";
  }
}

/*Función que hace aparecer el mensaje de Error en los Inputs del formulario a los que se le haya ingresado un valor no válido */
  function mostrarError(elementId, message) {
    var errorElement = document.getElementById(elementId + "-error");
    errorElement.textContent = message;
  }

  /*Función que oculta el mensaje de Error de la anterior función */
  function ocultarError(elementId) {
    var errorElement = document.getElementById(elementId + "-error");
    errorElement.textContent = "";
  }

  /*Función que valida el input de Nombre(s) que solo tenga letras o espacio en blanco */
  function validarNombre() {
    var nombreInput = document.getElementById("Nombre");
    var nombreValor = nombreInput.value.trim();
    var letrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

    if (!letrasRegex.test(nombreValor)) {
      mostrarError("Nombre", "Ingresar solo letras.");
    } else {
      ocultarError("Nombre");
    }
  }

  /*Función que valida el input de Apellido Paterno que solo tenga letras */
  function validarApellidoPaterno() {
    var apellidoPaternoInput = document.getElementById("AP");
    var apellidoPaternoValor = apellidoPaternoInput.value.trim();
    var letrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

    if (!letrasRegex.test(apellidoPaternoValor)) {
      mostrarError("AP", "Ingresar solo letras.");
    } else {
      ocultarError("AP");
    }
  }

  /*Función que valida el input de Apellido Materno que solo tenga letras */
  function validarApellidoMaterno() {
    var apellidoMaternoInput = document.getElementById("AM");
    var apellidoMaternoValor = apellidoMaternoInput.value.trim();
    var letrasRegex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ]+$/;

    if (!letrasRegex.test(apellidoMaternoValor)) {
      mostrarError("AM", "Ingresar solo letras.");
    } else {
      ocultarError("AM");
    }
  }

  /*Función que valida el campo de Teléfono para que solo acepte números y máximo 10*/
  function validarTelefono() {
    var telefonoInput = document.getElementById("Teléfono");
    var telefonoValor = telefonoInput.value.trim();
    var numerosRegex = /^\d+$/;

    if (!numerosRegex.test(telefonoValor)) {
      mostrarError("Teléfono", "El teléfono solo debe contener números.");
    } else if (telefonoValor.length > 10) {
      mostrarError("Teléfono", "El teléfono debe tener máximo 10 dígitos.");
    } else {
      ocultarError("Teléfono");
    }
  }

  /*Función que valida el campo de RFC checando que los primeros 4 caracteres ingresados sean letras, los siguientes 6 sean números y los siguientes 3 pueden ser combinación de letras o números. También valida que el usuario sea mayor de edad. */
  function validarRFC() {
    var rfcInput = document.getElementById("RFC");
    var rfcValor = rfcInput.value.trim();
    var rfcRegex = /^[A-Za-z]{4}\d{6}[A-Za-z0-9]{3,10}$/;
  
    if (!rfcRegex.test(rfcValor)) {
      mostrarError("RFC", "El RFC ingresado no es válido.");
      return;
    }
  
    var fechaNacimientoStr = rfcValor.substring(4, 10);
    var anio = parseInt(fechaNacimientoStr.substring(0, 2));
    var mes = parseInt(fechaNacimientoStr.substring(2, 4));
    var dia = parseInt(fechaNacimientoStr.substring(4, 6));
  
    var fechaActual = new Date();
    var anioActual = fechaActual.getFullYear() - 2000;
    var mesActual = fechaActual.getMonth() + 1;
    var diaActual = fechaActual.getDate();
  
    var edad = anioActual - anio;
    if (mesActual < mes || (mesActual === mes && diaActual < dia)) {
      edad--;
    }
    if (edad < 18) {
      mostrarError("RFC", "Debes ser mayor de 18 años para continuar.");
      return;
    }
  
    ocultarError("RFC");
  }

  /*Función que valida el Código Postal para que solo acepte números */
  function validarCP(){
    var CPInput= document.getElementById("CP");
    var CPValor= CPInput.value.trim();
    var CPRegex= /^\d+$/;

    if (!CPRegex.test(CPValor)) {
      mostrarError("CP", "El Código Postal solo debe contener números.");
    } else {
      ocultarError("CP");
    }
  }

  /*Función que valida el campo de Número Interior para que solo acepte números */
  function validarNumero(){
    var NumeroInput= document.getElementById("Numero");
    var NumeroValor= NumeroInput.value.trim();
    var NumeroRegex= /^\d+$/;

    if (!NumeroRegex.test(NumeroValor)) {
      mostrarError("Numero", "El Número interior solo debe contener números.");
    } else {
      ocultarError("Numero");
    }
  }

    /*Función que valida el campo de Invitados para que solo acepte números y en un rango de entre 75 a 200*/
  function validarInvitados(){
    var InvitadosInput= document.getElementById("Invitados");
    var InvitadosValor= InvitadosInput.value.trim();
    var InvitadosRegex= /^(?:7[5-9]|8[0-9]|9[0-9]|1[0-9]{2}|200)$/;

    if(!InvitadosRegex.test(InvitadosValor)){
      mostrarError("Invitados", "Los invitados deben ser un valor entre 75 y 200");
    }else{
      ocultarError("Invitados");
    }
  }

  /*Función que valida que la lista Alcaldia tenga una opción elegida válida */
function validarAlcaldia(){
  const selectElement = document.getElementById("Alcaldia");
  const selectedValue = selectElement.value;

  if (selectedValue === '') {
    mostrarError("Alcaldia", "Debes seleccionar una opción");
  }else{
    ocultarError("Alcaldia");
  }
}

   /*Función que valida que la lista Entidad tenga una opción elegida válida */
function validarEntidad(){
  const selectElement = document.getElementById("Entidades");
  const selectedValue = selectElement.value;

  if (selectedValue === '') {
    mostrarError("Entidades", "Debes seleccionar una opción");
  }else{
    ocultarError("Entidades");
  }
}

/*Función que valida que la lista Evento tenga una opción elegida válida */
function validarEvento(){
  const selectElement = document.getElementById("Evento");
  const selectedValue = selectElement.value;

  if (selectedValue === '') {
    mostrarError("Evento", "Debes seleccionar una opción");
  }else{
    ocultarError("Evento");
  }
}