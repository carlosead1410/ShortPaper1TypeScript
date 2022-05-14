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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Presencial = exports.Telemedicina = exports.Cita = void 0;
var PatronObservador_1 = require("../ModuloNotificaciones/PatronObservador");
// Status que puede tener la Cita
var StatusCita;
(function (StatusCita) {
    StatusCita["enCurso"] = "EN_CURSO";
    StatusCita["aceptada"] = "ACEPTADA";
    StatusCita["pendiente"] = "PENDIENTE";
    StatusCita["cancelada"] = "CANCELADA";
    StatusCita["finalizada"] = "FINALIZADA";
})(StatusCita || (StatusCita = {}));
// Clase Cita
// Falta colocarle la clase Doctor
var Cita = /** @class */ (function (_super) {
    __extends(Cita, _super);
    function Cita(paciente, fecha, o) {
        var _this = _super.call(this, o) || this;
        _this.paciente = paciente;
        _this.fecha = fecha;
        _this.status = StatusCita.pendiente;
        return _this;
    }
    return Cita;
}(PatronObservador_1.ObservableNotificacion));
exports.Cita = Cita;
var Telemedicina = /** @class */ (function (_super) {
    __extends(Telemedicina, _super);
    function Telemedicina() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Telemedicina.prototype.finalizarCita = function () {
        console.log('Finalizada  virtual');
        this.status = StatusCita.finalizada;
    };
    Telemedicina.prototype.obtenerPaciente = function () {
        return this.paciente;
    };
    Telemedicina.prototype.add = function (o) {
        this.observador = o;
    };
    Telemedicina.prototype.notify = function () {
        this.observador.notificar();
    };
    return Telemedicina;
}((Cita)));
exports.Telemedicina = Telemedicina;
var Presencial = /** @class */ (function (_super) {
    __extends(Presencial, _super);
    function Presencial() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Presencial.prototype.finalizarCita = function () {
        console.log('Finalizada presencial');
        this.status = StatusCita.finalizada;
    };
    Presencial.prototype.obtenerPaciente = function () {
        return this.paciente;
    };
    Presencial.prototype.add = function (o) {
        this.observador = o;
    };
    Presencial.prototype.notify = function () {
        this.observador.notificar();
    };
    return Presencial;
}((Cita)));
exports.Presencial = Presencial;
