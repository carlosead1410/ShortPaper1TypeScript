"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Paciente = void 0;
var IVisitor_1 = require("./ModuloSuscripccion/IVisitor");
var Suscripccion_1 = require("./ModuloSuscripccion/Suscripccion");
var ObservadorRegistro_1 = require("./PatronObservadorAuditoria/ObservadorRegistro");
var Paciente = /** @class */ (function (_super) {
    __extends(Paciente, _super);
    function Paciente(nombre, edad, profesion, telefonos, correo, doc_id, o) {
        var _this = _super.call(this, o) || this;
        _this.nombre = nombre;
        _this.edad = edad;
        _this.profesion = profesion;
        _this.telefonos = telefonos;
        _this.correo = correo;
        _this.doc_id = doc_id;
        return _this;
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
    Paciente.prototype.add = function (o) {
        this.observador = this.observador;
    };
    Paciente.prototype.notify = function () {
        this.observador.registrarActividad();
    };
    return Paciente;
}(ObservadorRegistro_1.ObservableAuditoria));
exports.Paciente = Paciente;
// let pago1: MetodoPago = new Paypal("arriaga1410@gmail.com","anual");
// let pago2: MetodoPago = new TDC("carlos","Mercantil",new Date("5/21/2025"), 12345567890, 123,"anual");
// console.log(pago1);
// console.log(pago1.realizarPago(new Pago()));
// console.log(pago2);
// console.log(pago2.realizarPago(new Pago()));
