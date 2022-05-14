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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TDC = exports.Paypal = exports.MetodoPago = exports.TipoPlan = void 0;
var TipoPlan;
(function (TipoPlan) {
    TipoPlan["mensual"] = "MENSUAL";
    TipoPlan["anual"] = "ANUAL";
})(TipoPlan = exports.TipoPlan || (exports.TipoPlan = {}));
// CREACION DE LAS CLASES DE METODOS DE PAGO
var MetodoPago = /** @class */ (function () {
    function MetodoPago(modalidad) {
        this.modalidad = modalidad;
    }
    return MetodoPago;
}());
exports.MetodoPago = MetodoPago;
//CREACION CLASE PAYPAL
var Paypal = /** @class */ (function (_super) {
    __extends(Paypal, _super);
    function Paypal(email, modalidad) {
        var _this = _super.call(this, modalidad) || this;
        _this.email = email;
        return _this;
    }
    Paypal.prototype.realizarPago = function (IVisitor) {
        IVisitor.visitPAYPAL(this);
    };
    Paypal.prototype.getName = function () {
        return "Paypal";
    };
    return Paypal;
}(MetodoPago));
exports.Paypal = Paypal;
//CREACION CLASE TDC
var TDC = /** @class */ (function (_super) {
    __extends(TDC, _super);
    function TDC(nombre, banco, f_vencimiento, nro_tarjeta, cvc, modalidad) {
        var _this = _super.call(this, modalidad) || this;
        _this.nombre = nombre;
        _this.banco = banco;
        _this.f_vencimiento = f_vencimiento;
        _this.nro_tarjeta = nro_tarjeta;
        _this.cvc = cvc;
        return _this;
    }
    TDC.prototype.realizarPago = function (IVisitor) {
        IVisitor.visitTDC(this);
    };
    TDC.prototype.getName = function () {
        return "TDC";
    };
    return TDC;
}(MetodoPago));
exports.TDC = TDC;
