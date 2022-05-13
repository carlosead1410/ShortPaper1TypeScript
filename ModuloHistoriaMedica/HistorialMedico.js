"use strict";
/*
    Necesito la clase Paciente Y Doctor
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistorialMedico = exports.RegistroMedico = void 0;
var RegistroMedico = /** @class */ (function () {
    function RegistroMedico(datos) {
        this._datos = datos;
    }
    Object.defineProperty(RegistroMedico.prototype, "datos", {
        get: function () {
            return this._datos;
        },
        enumerable: false,
        configurable: true
    });
    return RegistroMedico;
}());
exports.RegistroMedico = RegistroMedico;
var HistorialMedico = /** @class */ (function () {
    function HistorialMedico() {
    }
    HistorialMedico.prototype.mostrarRegistro = function () {
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this._registros.forEach(function (e) {
            console.log(e);
        });
        ;
        console.log("\n");
    };
    HistorialMedico.prototype.agregarRegistro = function (a) {
        this._registros.push(a);
    };
    return HistorialMedico;
}());
exports.HistorialMedico = HistorialMedico;
