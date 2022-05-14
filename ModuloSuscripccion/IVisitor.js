export class Pago {
    visitTDC(tarjeta) {
        console.log(tarjeta);
        console.log("El pago por TDC se ha registrado con exito\n");
    }
    ;
    visitPAYPAL(paypal) {
        console.log(paypal);
        console.log("El Pago por PayPal se ha registrado con exito\n");
    }
    ;
}
