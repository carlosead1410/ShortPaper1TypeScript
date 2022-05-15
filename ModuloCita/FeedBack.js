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
    FeedBack.prototype.getvaloracion = function () {
        return this._valoracion;
    };
    FeedBack.prototype.getcomentario = function () {
        return this._comentario;
    };
    FeedBack.prototype.setvaloracion = function (valoracion) {
        if (valoracion < 0 && valoracion > 5) {
            throw new Error('La valoracion debe estar en un Rango de [0-5]');
        }
        this._valoracion = valoracion;
    };
    FeedBack.prototype.setcomentario = function (comentario) {
        this._comentario = comentario;
    };
    FeedBack.prototype.registrarValoracion = function () {
        //Do_Something
    };
    return FeedBack;
}());
exports.FeedBack = FeedBack;
