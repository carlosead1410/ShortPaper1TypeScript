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
exports.HistorialMedico = exports.RegistroMedico = void 0;
var PatronObservador_1 = require("../ModuloNotificaciones/PatronObservador");
var RegistroMedico = /** @class */ (function (_super) {
    __extends(RegistroMedico, _super);
    function RegistroMedico(datos, o) {
        var _this = _super.call(this, o) || this;
        _this._datos = datos;
        return _this;
    }
    RegistroMedico.prototype.add = function (o) {
        this.observador = o;
    };
    RegistroMedico.prototype.notify = function () {
        this.observador.notificar();
    };
    RegistroMedico.prototype.getdatos = function () {
        return this._datos;
    };
    return RegistroMedico;
}(PatronObservador_1.ObservableNotificacion));
exports.RegistroMedico = RegistroMedico;
var HistorialMedico = /** @class */ (function () {
    function HistorialMedico() {
        this._registros = [];
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
