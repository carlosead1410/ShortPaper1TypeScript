"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObservableAuditoria = exports.Registro = void 0;
var Registro = /** @class */ (function () {
    function Registro() {
        this.registro = new Array();
    }
    Registro.prototype.registrar = function (registroA) {
        this.registro.push(registroA);
    };
    Registro.prototype.mostrarRegistros = function () {
        console.log("****   REGISTRO ****\n");
        for (var _i = 0, _a = this.registro; _i < _a.length; _i++) {
            var regist = _a[_i];
            console.log(regist);
            console.log("\n");
        }
    };
    return Registro;
}());
exports.Registro = Registro;
var ObservableAuditoria = /** @class */ (function () {
    function ObservableAuditoria(observador) {
        this.observador = observador;
    }
    return ObservableAuditoria;
}());
exports.ObservableAuditoria = ObservableAuditoria;
