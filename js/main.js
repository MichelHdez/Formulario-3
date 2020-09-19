
let formulario = document.getElementById('formulario'),
	nombre = formulario.nombre,
	apellido = formulario.apellido,
	email = formulario.email,
	mensaje = formulario.mensaje,
	error = document.getElementById('error');

	const validarNombre = (e) => {
		 if (nombre.value == '' || nombre.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor completa el campo de nombre</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    const validarApellido = (e) => {
		 if (apellido.value == '' || apellido.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor completa el campo de apellido</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    const validarCorreo = (e) => {
		 if (email.value == '' || nombre.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor completa el campo de correo</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    const validarMensaje = (e) => {
		 if (mensaje.value == '' || mensaje.value == null) {
            error.style.display = 'block';
            error.innerHTML += '<li>Por favor completa el campo de mensaje</li>'
            e.preventDefault();
        } else {
            error.style.display = 'none';
        }
    }

    const validarFormulario = (e) =>{
    	error.innerHTML = '';
    	validarNombre(e);
    	validarApellido(e);
    	validarCorreo(e);
    	validarMensaje(e);
    }
    
 formulario.addEventListener('submit',validarFormulario);