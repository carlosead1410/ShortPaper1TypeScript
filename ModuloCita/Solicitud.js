"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Solicitud = exports.TipoCita = void 0;
var Suscripccion_1 = require("../ModuloSuscripccion/Suscripccion");
var TipoCita;
(function (TipoCita) {
    TipoCita["Teleconsulta"] = "Teleconsulta";
    TipoCita["Presencial"] = "Presencial";
})(TipoCita = exports.TipoCita || (exports.TipoCita = {}));
var Solicitud = /** @class */ (function () {
    function Solicitud(tipo) {
        this._tipo = tipo;
    }
    Solicitud.prototype.getTipo = function () {
        return this._tipo;
    };
    Solicitud.prototype.verificarSuscripccion = function (paciente) {
        var suscripcion_p = paciente.ObtenerPlan();
        if (suscripcion_p.status != Suscripccion_1.StatusSuscripccion.Activa) {
            throw new Error('El Paciente no tiene una suscripccion activa al sistema, NO podra solicitar citas');
        }
    };
    return Solicitud;
}());
exports.Solicitud = Solicitud;
