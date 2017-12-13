//Declaración de variables
var nombreUsuario = "Oliver Duran" ;
var saldoCuenta = 11000;
var limiteExtraccion = 1500;

var dineroExtraido;
var dineroDepositado;

var precioDeServicioAgua = 350;
var precioDeServicioLuz = 210;
var precioDeServicioInternet = 570;
var precioDeServicioTelefono = 425;

var cuentaAmiga1 = 1234567;
var cuentaAmiga2 = 7654321;

var codigoCuenta = 5678;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function sumarDinero(cantidad) {
    saldoCuenta += cantidad;
}

function restarDinero(cantidad) {
    saldoCuenta -= cantidad;
}

function cambiarLimiteDeExtraccion() {
    var cambiarLimiteDeExtraccion = prompt("Ingrese un nuevo límite de extracción:");

    if (cambiarLimiteDeExtraccion == null) {
        alert("No se ingreso el nuevo límite de Extracción.");
    }
    else if (isNaN(cambiarLimiteDeExtraccion)) {
        alert("Ingresa solo el monto.");
    }
    else {
        limiteExtraccion = parseInt(cambiarLimiteDeExtraccion);
        alert("El nuevo límte de extraccón es: $" + limiteExtraccion);
        actualizarLimiteEnPantalla();
    }
}

function mostrarOperacion(alertaDeOperacion, accionDeOperacion, transaccionDeDinero) {
    alert(
        "Has " + alertaDeOperacion + ": $" + transaccionDeDinero + "\n" +
        "Saldo anterior: $" + accionDeOperacion + "\n" +
        "Saldo actual: $" + saldoCuenta
    );
}

function extraerDinero() {
    var extraerDinero = prompt("Ingrese la cantidad de dinero que desea extraer:");

    if (extraerDinero == null) {
        alert("No se ingreso monto para extraer.");
    }
    else {
        dineroExtraido = parseInt(extraerDinero);

        if (dineroExtraido > saldoCuenta ) {
            alert("No hay saldo disponible para extraer esa cantidad de dinero.");
        }
        else if (dineroExtraido > limiteExtraccion ) {
            alert("La cantidad que deseas extraer es mayor a tu límite de extracción.");
        }
        else if (isNaN(dineroExtraido)){
            alert("Solo puedes ingresar el monto.");
        }
        else if (extraerDinero % 100 !== 0) {
            alert("Solo puedes extraer billetes de 100.");
        }
        else {
            restarDinero(dineroExtraido);
            mostrarOperacion(
                "retirado",
                saldoCuenta + dineroExtraido,
                dineroExtraido
            );
            actualizarSaldoEnPantalla();
        }
    }
}

function mostrarOperacion(alertaDeOperacion, accionDeOperacion, transaccionDeDinero) {
    alert(
        "Has " + alertaDeOperacion + ": $" + transaccionDeDinero + "\n" +
        "Saldo anterior: $" + accionDeOperacion + "\n" +
        "Saldo actual: $" + saldoCuenta
    );
}

function depositarDinero() {
    dineroDepositado = prompt("Ingrese la cantidad de dinero que desea depositar:");

    if (dineroDepositado == null) {
        alert("No se ingreso monto para dipositar.");
    }
    else if (isNaN(dineroDepositado)) {
        alert("Ingresa solo el monto.");
    }
    else {
        dineroDepositado = parseFloat(dineroDepositado);
        sumarDinero(dineroDepositado);
        mostrarOperacion("depositado", saldoCuenta - dineroDepositado, dineroDepositado);
        actualizarSaldoEnPantalla();
    }
}

function pagoDeServicio(servicio, precioDeServicio) {

    if (saldoCuenta < precioDeServicio) {
        alert("No hay suficiente saldo para pagar este servicio.");
    }
    else {
        alert(
            "Has pagado el servicio " + servicio + ".\n" +
            "Saldo anterior: $" + saldoCuenta + "\n" +
            "Dinero descontado: $" + precioDeServicio + "\n" +
            "Saldo actual: $" + (saldoCuenta - precioDeServicio)
        );
        restarDinero(precioDeServicio);
        actualizarSaldoEnPantalla();
    }
}

function pagarServicio() {
    var servicioAPagar = prompt(
        "Ingrese el número que corresponda con el servicio que quieres pagar:"  + "\n" + "\n" +
        "1 - Agua" + "\n" +
        "2 - Luz"  + "\n" +
        "3 - Internet" + "\n" +
        "4 - Teléfono" + "\n"
    );

    if (servicioAPagar == null) {
        alert("No ingreso ninguna opción.");
    }
    else {
        servicioAPagar = parseInt(servicioAPagar);

        switch (servicioAPagar) {
            case 1:
                pagoDeServicio("Agua", precioDeServicioAgua);
                break;
            case 2:
                pagoDeServicio("Luz", precioDeServicioLuz);
                break;
            case 3:
                pagoDeServicio("Internet", precioDeServicioInternet);
                break;
            case 4:
                pagoDeServicio("Teléfono", precioDeServicioTelefono);
                break;
            default:
                alert("No existe el servicio que se ha seleccionado.");
                break;
        }
    }
}

function transferirDinero() {
    var montoATransferir = prompt("Ingrese el monto que desea transferir:");

    if(saldoCuenta < montoATransferir) {
        alert("No puede transferirse esa cantidad de dinero.");
    }
    else if (montoATransferir == null) {
        alert("No ingreso monto para la transferencia.");
    }
    else if (isNaN(montoATransferir)) {
        alert("Ingrese solo el monto.");
    }
    else{
        var cuentaATransferir = prompt("Ingrese el número de cuenta al que desea transferir el dinero:");

        if (cuentaATransferir == null) {
            alert("No ingreso cuenta para la transferencia.");
        }
        else {
            restarDinero(montoATransferir);
            cuentaATransferir = parseInt(cuentaATransferir);

            function tranferirACuenta(cuenta) {
                alert(
                    "Se han transferido $" + montoATransferir + "\n" +
                    "Cuenta destino: " + cuenta
                );
                actualizarSaldoEnPantalla();
            }
            switch (cuentaATransferir) {
                case cuentaAmiga1:
                    tranferirACuenta(cuentaAmiga1);
                    break;
                case cuentaAmiga2:
                    tranferirACuenta(cuentaAmiga2);
                    break;
                default:
                    alert("Solo puede transferirse dinero a una cuenta amiga.");
                    break;
            }
        }
    }
}

function depositarCheque() {
    var montoDecheque =  prompt("Ingrese el monto del cheque:");

    if (montoDecheque == null) {
        alert("No ingreso monto para el deposito.");
    }
    else {
        var montochequeDepositado = parseInt(montoDecheque);

        if (isNaN(montochequeDepositado)){
            alert("Ingrese solo el monto.");
        }
        else if (montochequeDepositado < 1000) {
            alert("Solo se aceptan cheques desde $1000");
        }
        else {
            sumarDinero(montochequeDepositado);
            mostrarOperacion(
                "depositado un cheque con el monto",
                saldoCuenta - montochequeDepositado,
                montochequeDepositado
            );
            actualizarSaldoEnPantalla();
        }
    }
}

window.onload(iniciarSesion());

function alertaCodigoIncorrecto(mensaje) {
    alert(mensaje);
    nombreUsuario = "";
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    actualizarNombreEnPantalla("");
}

function iniciarSesion() {
    var codigoVerificacion = prompt("Ingresa tu código de verificación:");

    if (codigoVerificacion == null) {
        alertaCodigoIncorrecto("Usted no ingreso un código de verficación.");
    }
    else {
        if (codigoVerificacion == codigoCuenta) {
            alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones.");
        }
        else {
            alertaCodigoIncorrecto(
                "Código incorrecto." + "\n\n" +
                "Tu dinero ha sido retenido por cuestiones de seguridad." + "\n\n"
            );
        }
    }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarNombreEnPantalla(nombre) {
    document.getElementById("nombre").innerHTML = nombre;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
