"use strict";
exports.__esModule = true;
exports.HistorialMedico = void 0;
var HistorialMedico = /** @class */ (function () {
    function HistorialMedico() {
        this.lista = ['Registro 1', 'Registro 2', 'Registro 3', 'Registro 4'];
    }
    HistorialMedico.prototype.mostrarRegistro = function () {
        console.log("****   SU HISTORIAL MEDICO    ****\n");
        this.lista.forEach(function (e) {
            console.log(e);
        });
        ;
        console.log("\n");
    };
    HistorialMedico.prototype.agregarRegistro = function (a) {
        this.lista.push(a);
    };
    return HistorialMedico;
}());
exports.HistorialMedico = HistorialMedico;
