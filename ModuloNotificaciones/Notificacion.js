"use strict";
exports.__esModule = true;
exports.NotificacionPush = exports.Llamada = exports.CorreoElectronico = exports.SMS = void 0;
var SMS = /** @class */ (function () {
    function SMS() {
    }
    SMS.prototype.notificar = function () {
        console.log('Notificacion a traves de SMS');
    };
    return SMS;
}());
exports.SMS = SMS;
var CorreoElectronico = /** @class */ (function () {
    function CorreoElectronico() {
    }
    CorreoElectronico.prototype.notificar = function () {
        console.log('Notificacion a traves de Correo Electronico');
    };
    return CorreoElectronico;
}());
exports.CorreoElectronico = CorreoElectronico;
var Llamada = /** @class */ (function () {
    function Llamada() {
    }
    Llamada.prototype.notificar = function () {
        console.log('Notificacion a traves de Llamada');
    };
    return Llamada;
}());
exports.Llamada = Llamada;
var NotificacionPush = /** @class */ (function () {
    function NotificacionPush() {
    }
    NotificacionPush.prototype.notificar = function () {
        console.log('Notificacion a traves de Notificacion Push');
    };
    return NotificacionPush;
}());
exports.NotificacionPush = NotificacionPush;
