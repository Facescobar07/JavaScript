
let DNI = "39601189";

function bienvenida() {

    let ingreso = false;

    for (let i = 2; i >= 0; i--) {

        let ingresaTuDni = prompt("Ingresá tu DNI, tenés " + (i + 1) + " intentos");

        if (ingresaTuDni === DNI) {
            alert("Bienvenido Facundo");
            ingreso = true;
            break;
        }
        else {
            alert("Lo siento, intentá de nuevo, te quedan " + i + " intentos")
        }

    }
    return ingreso;
}


if (bienvenida()) {
    let saldo = 15000
    let opciones = prompt("Elegí una opción \n1- Saldo. \n2- Extracciones. \n3- Depósitos. \n4- Cuentas. \n5- 5 para salir");

    while (opciones !="5") {

        switch (opciones) {

            case "1": alert("Tu saldo es $" + saldo);
                break;
            case "2":
                let Extracion = parseInt(prompt("Cantidad a extraer"));
                if (Extracion <= saldo) {
                    saldo = saldo - Extracion;
                    alert("El saldo actual es $" + saldo)
                }
                else {
                    alert("Fondos insuficientes")
                }
                break;
            case "3":
                let Deposito = parseInt(prompt("Deposite su dinero"));
                saldo = saldo + Deposito;
                alert("Depósito exitoso. Tu saldo actual es $" + saldo);
                break;
            case "4":
                let Cuentas = [Pesos,Dólares]     
            default:
                alert("Opción Inválida");
                break;

        }
        opciones = prompt("Elegí una opción \n1- Saldo. \n2- Extracciones. \n3- Depósitos. \n4- Cuentas \n5- 5 para Salir");


    }
} else {
    alert("Demasiados intentos, retendremos tu tarjeta por volantin");
}
alert("Nosvii");

