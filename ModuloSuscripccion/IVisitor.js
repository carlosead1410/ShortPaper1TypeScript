"use strict";
exports.__esModule = true;
exports.Pago = void 0;
var Pago = /** @class */ (function () {
    function Pago() {
    }
    Pago.prototype.visitTDC = function (tarjeta) {
        console.log(tarjeta);
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
