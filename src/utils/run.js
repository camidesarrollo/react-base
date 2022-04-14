export const checkRut = (rut) => {

    // Despejar Puntos
    var valor = rut.split('.').join('');
    // Despejar Guión
    valor = valor.split('-').join('');

    // Aislar Cuerpo y Dígito Verificador
    var cuerpo = valor.slice(0, -1);
    var dv = valor.slice(-1).toUpperCase();

    // Formatear RUN
    rut = cuerpo + '-' + dv

    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if (cuerpo.length < 7) {
        //modalMsj("<p>RUT Incompleto</p>");
        return false;
    }

    // Calcular Dígito Verificador
    var suma = 0;
    var multiplo = 2;

    // Para cada dígito del Cuerpo
    for (var i = 1; i <= cuerpo.length; i++) {

        // Obtener su Producto con el Múltiplo Correspondiente
        var index = multiplo * valor.charAt(cuerpo.length - i);

        // Sumar al Contador General
        suma = suma + index;

        // Consolidar Múltiplo dentro del rango [2,7]
        if (multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }

    }

    // Calcular Dígito Verificador en base al Módulo 11
    var dvEsperado = 11 - (suma % 11);

    // Casos Especiales (0 y K)
    dv = (dv === 'K') ? 10 : dv;
    dv = (dv === 0) ? 11 : dv;


    // Validar que el Cuerpo coincide con su Dígito Verificador
    if (dvEsperado !== parseInt(dv)) {
        //modalMsj("<p>RUT inválido</p>");
        return false;
    }

    return true;
    // Si todo sale bien, eliminar errores (decretar que es válido)
    // rut.setCustomValidity('');



}

export const Valida_Rut = (Objeto) => {
    var tmpstr = "";
    var intlargo = Objeto.value
    if (intlargo.length > 0) {
        var crut = Objeto.value
        var largo = crut.length;
        if (largo < 2) {
            //modalMsj("<p>rut inválido</p>");
            Objeto.focus()
            return false;
        }
        for (var i = 0; i < crut.length; i++)
            if (crut.charAt(i) !== ' ' && crut.charAt(i) !== '.' && crut.charAt(i) !== '-') {
                tmpstr = tmpstr + crut.charAt(i);
            }
        var rut = tmpstr;
        crut = tmpstr;
        largo = crut.length;

        if (largo > 2)
            rut = crut.substring(0, largo - 1);
        else
            rut = crut.charAt(0);

        var dv = crut.charAt(largo - 1);

        if (rut == null || dv == null)
            return 0;

        var dvr = '0';
        var suma = 0;
        var mul = 2;

        for (var j = rut.length - 1; j >= 0; j--) {
            suma = suma + rut.charAt(j) * mul;
            if (mul === 7)
                mul = 2;
            else
                mul++;
        }

        var res = suma % 11;
        if (res === 1)
            dvr = 'k';
        else if (res === 0)
            dvr = '0';
        else {
            var dvi = 11 - res;
            dvr = dvi + "";
        }

        if (dvr !== dv.toLowerCase()) {
            return false;
        }

        return true;
    }
}