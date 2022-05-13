"use strict";
exports.__esModule = true;
exports.Suscripcion = exports.StatusSuscripccion = void 0;
var MetodoPago_1 = require("./MetodoPago");
var StatusSuscripccion;
(function (StatusSuscripccion) {
    StatusSuscripccion["Activa"] = "ACTIVA";
    StatusSuscripccion["Cancelada"] = "CANCELADA";
    StatusSuscripccion["Bloqueada"] = "BLOQUEADA";
})(StatusSuscripccion = exports.StatusSuscripccion || (exports.StatusSuscripccion = {}));
var Suscripcion = /** @class */ (function () {
    function Suscripcion() {
    }
    Suscripcion.prototype.actualizarFecha = function () {
        if (this.mpago.modalidad == MetodoPago_1.TipoPlan.mensual) {
            console.log("MENSUAL");
            this.fecha_inicio = new Date(Date.now());
            this.fecha_fin = new Date(this.fecha_inicio.getFullYear(), this.fecha_inicio.getMonth() + 1, this.fecha_inicio.getDate());
        }
        if (this.mpago.modalidad == MetodoPago_1.TipoPlan.anual) {
            console.log("ANUAL");
            this.fecha_inicio = new Date(Date.now());
            this.fecha_fin = new Date(this.fecha_inicio.getFullYear() + 1, this.fecha_inicio.getMonth(), this.fecha_inicio.getDate());
        }
    };
    Suscripcion.prototype.agregarMetodo = function (mpago) {
        this.mpago = mpago;
    };
    Suscripcion.prototype.mostrarSuscripccion = function () {
        console.log("Su Suscripccion Inicio el dia: ".concat(this.fecha_inicio.toLocaleString()));
        console.log("Su Suscripccion finaliza el dia: ".concat(this.fecha_fin.toLocaleString()));
        console.log("Su Metodo de Pago fue: ".concat(this.mpago.getName()));
        console.log("Su Estatus de suscripccion es : ".concat(this.status));
    };
    Suscripcion.prototype.actualizarStatus = function (statusSus) {
        this.status = statusSus;
    };
    return Suscripcion;
}());
exports.Suscripcion = Suscripcion;
