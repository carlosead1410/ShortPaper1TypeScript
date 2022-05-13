"use strict";
exports.__esModule = true;
exports.Paciente = void 0;
var IVisitor_1 = require("./ModuloSuscripccion/IVisitor");
var Suscripccion_1 = require("./ModuloSuscripccion/Suscripccion");
var Paciente = /** @class */ (function () {
    function Paciente(nombre, edad, profesion, telefonos, correo, doc_id) {
        this.nombre = nombre;
        this.edad = edad;
        this.profesion = profesion;
        this.telefonos = telefonos;
        this.correo = correo;
        this.doc_id = doc_id;
    }
    Paciente.prototype.suscribirse = function (metodo) {
        console.log("Aqui el paciente iniciaria el proceso de suscripccion\n");
        var suscripccion = new Suscripccion_1.Suscripcion();
        metodo.realizarPago(new IVisitor_1.Pago());
        suscripccion.agregarMetodo(metodo);
        suscripccion.actualizarFecha();
        suscripccion.actualizarStatus(Suscripccion_1.StatusSuscripccion.Activa);
        this.plan = suscripccion;
    };
    Paciente.prototype.cancelarSuscripcion = function () {
        this.plan.actualizarStatus(Suscripccion_1.StatusSuscripccion.Cancelada);
    };
    Paciente.prototype.obtenerPlan = function () {
        this.plan.mostrarSuscripccion();
    };
    return Paciente;
}());
exports.Paciente = Paciente;
// let pago1: MetodoPago = new Paypal("arriaga1410@gmail.com","anual");
// let pago2: MetodoPago = new TDC("carlos","Mercantil",new Date("5/21/2025"), 12345567890, 123,"anual");
// console.log(pago1);
// console.log(pago1.realizarPago(new Pago()));
// console.log(pago2);
// console.log(pago2.realizarPago(new Pago()));
