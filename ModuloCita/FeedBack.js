"use strict";
/*
    Clase FeedBack, despues de cada Cita se tiene
    un feedback del cliente hacia el doctor
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedBack = void 0;
var FeedBack = /** @class */ (function () {
    function FeedBack() {
    }
    Object.defineProperty(FeedBack.prototype, "valoracion", {
        get: function () {
            return this._valoracion;
        },
        set: function (valoracion) {
            if (valoracion < 0 && valoracion > 5) {
                throw new Error('La valoracion debe estar en un Rango de [0-5]');
            }
            this._valoracion = valoracion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(FeedBack.prototype, "comentario", {
        get: function () {
            return this._comentario;
        },
        set: function (comentario) {
            this._comentario = comentario;
        },
        enumerable: false,
        configurable: true
    });
    FeedBack.prototype.registrarValoracion = function () {
        //Do_Something
    };
    return FeedBack;
}());
exports.FeedBack = FeedBack;
