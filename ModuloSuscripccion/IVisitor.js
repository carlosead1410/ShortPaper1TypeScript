"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagoSuscripccion = void 0;
var MetodoPago_1 = require("./MetodoPago");
var PagoSuscripccion = /** @class */ (function () {
    function PagoSuscripccion() {
    }
    PagoSuscripccion.prototype.visitTDC = function (tarjeta) {
        var multiplicador;
        if (tarjeta.modalidad == MetodoPago_1.TipoPlan.anual) {
            multiplicador = 10;
        }
        else {
            multiplicador = 1;
        }
        var precio = 8.99;
        console.log(tarjeta);
        console.log("Como su metodo de Pago fue por TDC se hara una recarga de un 5% al monto final\n");
        console.log("El pago por TDC se ha registrado con exito\n");
        console.log("Monto Pagado: ".concat(precio * multiplicador * 0.95, "\n"));
    };
    ;
    PagoSuscripccion.prototype.visitPAYPAL = function (paypal) {
        var multiplicador;
        if (paypal.modalidad == MetodoPago_1.TipoPlan.anual) {
            multiplicador = 10;
        }
        else {
            multiplicador = 1;
        }
        var precio = 8.99;
        console.log(paypal);
        console.log("El Pago por PayPal se ha registrado con exito:\n");
        console.log("Monto Pagado: ".concat(precio * multiplicador, "\n"));
    };
    ;
    return PagoSuscripccion;
}());
exports.PagoSuscripccion = PagoSuscripccion;
