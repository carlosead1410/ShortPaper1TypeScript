"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pago = void 0;
var Pago = /** @class */ (function () {
    function Pago() {
    }
    Pago.prototype.visitTDC = function (tarjeta) {
        console.log(tarjeta);
        console.log("Como su metodo de Pago fue por TDC se hara una recarga de un 5% al monto final\n");
        console.log("El pago por TDC se ha registrado con exito\n");
    };
    ;
    Pago.prototype.visitPAYPAL = function (paypal) {
        console.log(paypal);
        console.log("El Pago por PayPal se ha registrado con exito\n");
    };
    ;
    return Pago;
}());
exports.Pago = Pago;
