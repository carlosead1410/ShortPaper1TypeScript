"use strict";
exports.__esModule = true;
exports.ObservableAuditoria = exports.Registro_Historico = void 0;
var Registro_Historico = /** @class */ (function () {
    function Registro_Historico() {
        this.registro = [];
    }
    Registro_Historico.prototype.registrarActividad = function () {
        var registroA;
        this.registro.push(registroA);
    };
    return Registro_Historico;
}());
exports.Registro_Historico = Registro_Historico;
var ObservableAuditoria = /** @class */ (function () {
    function ObservableAuditoria(observador) {
        this.observador = observador;
    }
    return ObservableAuditoria;
}());
exports.ObservableAuditoria = ObservableAuditoria;
