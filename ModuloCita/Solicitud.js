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
    function Solicitud(tipo, especialidad) {
        this._tipo = tipo;
        this._especialidad = especialidad;
    }
    Solicitud.prototype.getTipo = function () {
        return this._tipo;
    };
    Solicitud.prototype.getEspecialidad = function () {
        return this._especialidad;
    };
    Solicitud.prototype.verificarEspecialidad = function (doctor) {
        var especializaciones = doctor.getEspecializaciones();
        var especialidad;
        if (especializaciones.length == 0) {
            throw new Error('El doctor no posee esta especialidad');
            return false;
        }
        for (var _i = 0, especializaciones_1 = especializaciones; _i < especializaciones_1.length; _i++) {
            var especialidad_1 = especializaciones_1[_i];
            if (especialidad_1.getNombre() == this._especialidad.getNombre()) {
                return true;
            }
        }
        throw new Error('El doctor no posee esta especialidad');
        return false;
    };
    Solicitud.prototype.verificarSuscripccion = function (paciente) {
        var suscripcion_p = paciente.ObtenerPlan();
        if (suscripcion_p.status == Suscripccion_1.StatusSuscripccion.Cancelada) {
            throw new Error('El Paciente CANCELO su suscripccion al sistema, no podra solicitar citas');
        }
        if (suscripcion_p.status == Suscripccion_1.StatusSuscripccion.Bloqueada) {
            throw new Error('Su suscripccion fue BLOQUEADA por un mal uso del sistema, NO podra solicitar Citas');
        }
    };
    return Solicitud;
}());
exports.Solicitud = Solicitud;
