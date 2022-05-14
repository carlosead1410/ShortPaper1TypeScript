"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableAuditoria = exports.Registro_Actividad = exports.Registro_Auditoria = void 0;
var Registro_Auditoria = /** @class */ (function () {
    function Registro_Auditoria() {
        this.registro = new Array();
    }
    Registro_Auditoria.prototype.registrar = function (registroA) {
        this.registro.push(registroA);
    };
    return Registro_Auditoria;
}());
exports.Registro_Auditoria = Registro_Auditoria;
var Registro_Actividad = /** @class */ (function () {
    function Registro_Actividad() {
        this.registro = new Array();
    }
    Registro_Actividad.prototype.registrar = function (registroA) {
        this.registro.push(registroA);
    };
    return Registro_Actividad;
}());
exports.Registro_Actividad = Registro_Actividad;
var ObservableAuditoria = /** @class */ (function () {
    function ObservableAuditoria(observador) {
        this.observador = observador;
    }
    return ObservableAuditoria;
}());
exports.ObservableAuditoria = ObservableAuditoria;
